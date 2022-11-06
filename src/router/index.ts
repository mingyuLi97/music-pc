import { createRouter, createWebHistory } from 'vue-router';
import RecommendViewVue from '@/views/discover/recommend/RecommendView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      // component: RecommendViewVue,
      redirect: '/discover/recommend',
    },
    {
      path: '/discover/',
      name: 'discover',
      redirect: '/discover/recommend',
      children: [
        {
          path: 'top-list',
          component: () => import('@/views/discover/TopList.vue'),
        },
        {
          path: 'play-list',
          component: () => import('@/views/discover/PlayList.vue'),
        },
        {
          path: 'dj-radio',
          component: () => import('@/views/discover/DjRadio.vue'),
        },
        {
          path: 'artist',
          component: () => import('@/views/discover/ArtistView.vue'),
        },
        {
          path: 'album',
          component: () => import('@/views/discover/AlbumView.vue'),
        },
        {
          path: 'recommend',
          component: RecommendViewVue,
        },
      ],
    },
    {
      path: '/my-music',
      component: () => import('@/views/my-music/MyMusic.vue'),
    },
    {
      path: '/download',
      component: () => import('@/views/download/DownloadView.vue'),
    },
    // 将匹配所有内容并将其放在 `$route.params.pathMatch` 下
    {
      path: '/:pathMatch(.*)*',
      name: 'NotFound',
      component: () => import('@/views/error/NotFound.vue'),
    },
  ],
});

export default router;
