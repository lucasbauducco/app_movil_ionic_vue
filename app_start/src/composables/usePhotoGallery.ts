import { ref, onMounted } from 'vue';
import { Camera, CameraResultType, CameraSource, Photo } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { Preferences } from '@capacitor/preferences';

interface UserPhoto {
  filePath: string;
  webviewPath: string;
}

const PHOTO_STORAGE = 'photos';

export function usePhotoGallery() {
  const photos = ref<UserPhoto[]>([]);

  const loadSaved = async () => {
    const photoList = await Preferences.get({ key: PHOTO_STORAGE });
    const savedPhotos = photoList.value ? JSON.parse(photoList.value) : [];

    for (const photo of savedPhotos) {
      const file = await Filesystem.readFile({
        path: photo.filePath,
        directory: Directory.Data,
      });

      photo.webviewPath = `data:image/jpeg;base64,${file.data}`;
    }

    photos.value = savedPhotos;
  };

  const takePhoto = async () => {
    const photo = await Camera.getPhoto({
      resultType: CameraResultType.Uri,
      source: CameraSource.Camera,
      quality: 90,
    });

    const fileName = new Date().getTime() + '.jpeg';
    const response = await fetch(photo.webPath!);
    const blob = await response.blob();
    const base64Data = await convertBlobToBase64(blob) as string;

    await Filesystem.writeFile({
      path: fileName,
      data: base64Data,
      directory: Directory.Data,
    });

    const savedPhoto: UserPhoto = {
      filePath: fileName,
      webviewPath: photo.webPath!,
    };

    photos.value = [savedPhoto, ...photos.value];
    await Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(photos.value) });
  };

  const deletePhoto = async (index: number) => {
    const photo = photos.value[index];
    photos.value.splice(index, 1);
    await Preferences.set({ key: PHOTO_STORAGE, value: JSON.stringify(photos.value) });

    await Filesystem.deleteFile({
      path: photo.filePath,
      directory: Directory.Data,
    });
  };

  const convertBlobToBase64 = (blob: Blob): Promise<string | ArrayBuffer> =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onerror = reject;
      reader.onload = () => resolve(reader.result!);
      reader.readAsDataURL(blob);
    });

  onMounted(loadSaved);

  return {
    photos,
    takePhoto,
    deletePhoto,
  };
}

