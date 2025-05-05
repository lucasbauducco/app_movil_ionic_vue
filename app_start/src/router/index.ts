import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

// Cargar las vistas de forma perezosa (lazy loading)
const TabsPage = () => import('@/views/TabsPage.vue');
const Tab1Page = () => import('@/views/Tab1Page.vue');
const MenuView = () => import('@/views/MenuViewPage.vue');
const GalleryTakePage = () => import('@/views/GalleryTakePage.vue');
const TakePhotoPage = () => import('@/views/TakePhotoPage.vue');
const GalleryPage = () => import('@/views/GalleryPage.vue');

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/tabs/tab1',
  },
  {
    path: '/tabs/',
    component: TabsPage,
    children: [
      {
        path: '',
        redirect: '/tabs/tab1',
      },
      {
        path: 'tab1',
        component: Tab1Page,
      },
      {
        path: 'menu',
        component: MenuView,
      },
      {
        path: 'gallerytake',
        component: GalleryTakePage,
      },
      {
        path: 'takephoto',
        component: TakePhotoPage,
      },
      {
        path: 'gallery',
        component: GalleryPage,
      },
    ],
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
