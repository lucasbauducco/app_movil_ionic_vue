<script setup lang="ts">
import {
  IonContent,
  IonPage,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonFab,
  IonFabButton
} from '@ionic/vue';
import { trash, camera } from 'ionicons/icons';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

const { photos, deletePhoto, takePhoto } = usePhotoGallery();

const handleDeletePhoto = async (index: number) => {
  await deletePhoto(index);
};
</script>

<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Galería</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content class="ion-padding">
      <ion-grid>
        <ion-row>
          <ion-col
            v-for="(photo, index) in photos"
            :key="photo.filePath"
            size="6"
            size-sm="4"
            size-md="3"
            size-lg="2"
            class="ion-text-center"
          >
            <div class="photo-wrapper">
              <ion-img
                :src="photo.webviewPath"
                class="photo-img"
              />
              <ion-icon
                :icon="trash"
                color="danger"
                class="delete-icon"
                @click="handleDeletePhoto(index)"
              />
            </div>
          </ion-col>
        </ion-row>
      </ion-grid>

      <!-- FAB dentro de ion-content -->
      <ion-fab vertical="bottom" horizontal="center" slot="fixed">
        <ion-fab-button @click="takePhoto">
          <ion-icon :icon="camera"></ion-icon>
        </ion-fab-button>
      </ion-fab>
    </ion-content>
  </ion-page>
</template>

<style scoped>
.photo-wrapper {
  position: relative;
}

.photo-img {
  max-height: 150px;
  object-fit: cover;
  border-radius: 8px;
  width: 100%;
}

.delete-icon {
  position: absolute;
  bottom: 8px;
  right: 8px;
  font-size: 20px;
  cursor: pointer;
  background: white;
  border-radius: 50%;
  padding: 4px;
}
</style>


