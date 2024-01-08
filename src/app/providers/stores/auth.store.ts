import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useAuthStore = defineStore('auth', () => {
  const isAuth = ref<boolean>(false);

  return { isAuth };
});
