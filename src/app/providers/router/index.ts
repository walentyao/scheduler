import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '@/pages/DashboardPage/DashboardPage.vue';
import NavigationFooter from '@/widgets/NavigationFooter/components/NavigationFooter.vue';
import PageLayout from '@/shared/layouts/PageLayout.vue';
import LoginPage from '@/pages/LoginPage/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage/RegisterPage.vue';
import DetailTaskPage from '@/pages/DetailTaskPage/DetailTaskPage.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'root',
      components: {
        default: PageLayout,
        navigation: NavigationFooter,
      },
      children: [
        {
          path: '/',
          name: 'dashboard',
          component: DashboardPage,
        },
        {
          path: '/detail',
          name: 'detail',
          component: DetailTaskPage,
        },
      ],
    },
    {
      path: '/login',
      name: 'login',
      component: LoginPage,
    },
    {
      path: '/register',
      name: 'register',
      component: RegisterPage,
    },
  ],
});

export default router;