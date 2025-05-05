<template>
    <ion-button expand="block" @click="$router.push(route)">
      <ion-icon v-if="icon" :icon="icon" slot="start" />
      {{ label }}
    </ion-button>
  </template>
  
  <script setup>
  import { IonButton, IonIcon } from '@ionic/vue';
  import { defineProps } from 'vue';
  
  defineProps({
    label: String,
    route: String,
    icon: String
  });
  </script>
  