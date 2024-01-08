import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(true);

  return { isAuth };
});
