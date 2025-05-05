<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Gallery</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-grid>
        <ion-row>
          <ion-col
            v-for="(img, index) in images"
            :key="index"
            size="6"
            class="gallery-item"
          >
            <ion-img :src="img" @click="openModal(img)" />
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-modal :is-open="showModal" @didDismiss="showModal = false">
        <ion-content>
          <ion-img :src="selectedImage" class="full-image" />
          <ion-button expand="block" @click="showModal = false">
            Cerrar
          </ion-button>
        </ion-content>
      </ion-modal>
      <ExploreContainer name="Gallery Page" />
    </ion-content>
  </ion-page>
</template>
  
<script setup lang="ts">
import {
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonModal,
  IonButton,
} from '@ionic/vue'
import { ref } from 'vue'

const images = ref<string[]>([
  'https://picsum.photos/id/1011/300',
  'https://picsum.photos/id/1012/300',
  'https://picsum.photos/id/1013/300',
  'https://picsum.photos/id/1015/300',
])

const selectedImage = ref<string | undefined>(undefined)
const showModal = ref(false)

const openModal = (img: string) => {
  selectedImage.value = img
  showModal.value = true
}
</script>
  
<style scoped>
.gallery-item ion-img {
  cursor: pointer;
  border-radius: 8px;
  transition: transform 0.2s ease;
}
.gallery-item ion-img:hover {
  transform: scale(1.05);
}
.full-image {
  width: 100%;
  height: auto;
  margin-top: 20px;
  border-radius: 8px;
}
</style>