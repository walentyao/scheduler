import { createRouter, createWebHistory } from 'vue-router';
import DashboardPage from '@/pages/DashboardPage/DashboardPage.vue';
import NavigationFooter from '@/widgets/NavigationFooter/components/NavigationFooter.vue';
import PageLayout from '@/shared/layouts/PageLayout.vue';
import LoginPage from '@/pages/LoginPage/LoginPage.vue';
import RegisterPage from '@/pages/RegisterPage/RegisterPage.vue';
import DetailTaskPage from '@/pages/DetailTaskPage/DetailTaskPage.vue';
import AddTaskPage from '@/pages/AddTaskPage/AddTaskPage.vue';
import { useAuthStore } from '@/app/providers/stores/auth.store';
import { storeToRefs } from 'pinia';

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
          meta: {
            navigation: true,
          },
        },
        {
          path: '/detail',
          name: 'detail',
          component: DetailTaskPage,
        },
        {
          path: '/add-task',
          name: 'addTask',
          component: AddTaskPage,
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

router.beforeEach((to, from) => {
  const store = useAuthStore();
  const { isAuth } = storeToRefs(store);

  if (!isAuth.value && to.name !== 'login' && to.name !== 'register') return { name: 'login' };
});

export default router;
