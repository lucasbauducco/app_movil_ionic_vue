<script setup lang="ts">
import { IonContent, IonPage, IonFab, IonFabButton, IonHeader, IonToolbar, IonTitle, IonIcon } from '@ionic/vue';
import { camera } from 'ionicons/icons';
import { usePhotoGallery } from '@/composables/usePhotoGallery';

const { takePhoto, photos } = usePhotoGallery();
</script>

<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Toma de Foto</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content>
        <ion-fab vertical="bottom" horizontal="center" slot="fixed">
          <ion-fab-button @click="takePhoto">
            <ion-icon :icon="camera"></ion-icon>
          </ion-fab-button>
        </ion-fab>
      </ion-content>
    </ion-page>
  </template>
