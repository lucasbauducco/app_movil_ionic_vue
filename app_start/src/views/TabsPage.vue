<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar slot="bottom">
        <ion-tab-button tab="menu" href="/tabs/menu">
          <ion-icon aria-hidden="true" :icon="triangle" />
          <ion-label>Menu</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="gallerytake" href="/tabs/gallerytake">
          <ion-icon aria-hidden="true" :icon="ellipse" />
          <ion-label>Gallery Take</ion-label>
        </ion-tab-button>

        <ion-tab-button tab="takephoto" href="/tabs/takephoto">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Take Photo</ion-label>
        </ion-tab-button>
        <ion-tab-button tab="gallery" href="/tabs/gallery">
          <ion-icon aria-hidden="true" :icon="square" />
          <ion-label>Gallery</ion-label>
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { ellipse, square, triangle } from 'ionicons/icons';
</script>
