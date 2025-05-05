<template>
    <ion-page>
      <ion-header>
        <ion-toolbar>
          <ion-title>Menú</ion-title>
        </ion-toolbar>
      </ion-header>
  
      <ion-content class="ion-padding">
        <div class="menu-container">
          <MenuButton label="Página 1" route="/pagina1" icon="document-outline" />
          <MenuButton label="Página 2" route="/pagina2" icon="albums-outline" />
          <MenuButton label="Página 3" route="/pagina3" icon="person-outline" />
          <MenuButton label="Página 4" route="/pagina4" icon="settings-outline" />
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script setup>
  import MenuButton from '@/components/MenuButton.vue';
  </script>
  
  <style scoped>
  .menu-container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
    gap: 1rem;
  }
  </style>
  