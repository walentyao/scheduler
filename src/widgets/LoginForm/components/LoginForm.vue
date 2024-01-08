<script setup lang="ts">
import CustomButton from '@/shared/components/CustomButton.vue';
import PrimaryInput from '@/shared/components/PrimaryInput.vue';
import { AtSymbolIcon, LockClosedIcon } from '@heroicons/vue/24/solid';
import { reactive } from 'vue';
import { useAuthStore } from '@/app/providers/stores/auth.store';
import { storeToRefs } from 'pinia';
import { useRouter } from 'vue-router';

const inputs = reactive<{
  email: string;
  password: string;
}>({
  email: '',
  password: '',
});

const router = useRouter();
const storeAuth = useAuthStore();
const { isAuth } = storeToRefs(storeAuth);
const handlerClickAuth = () => {
  isAuth.value = true;
  router.push('/');
};
</script>

<template>
  <form
    class="form"
    @submit.prevent
  >
    <h4 class="form__title">Войдите в свой аккаунт</h4>
    <PrimaryInput
      id="email"
      type="email"
      placeholder="Почта"
      :image="AtSymbolIcon"
      v-model="inputs.email"
    />
    <div class="form__wrapper">
      <PrimaryInput
        id="password"
        :image="LockClosedIcon"
        type="password"
        v-model="inputs.password"
      />
      <a
        href="#"
        class="form__forgot"
        >Забыли пароль?</a
      >
    </div>
    <CustomButton
      type="primary"
      label="Войти"
      @click="handlerClickAuth"
    />
  </form>
</template>

<style scoped lang="scss">
.form {
  display: flex;
  flex-direction: column;
  row-gap: 20px;
  width: 100%;

  &__title {
    font-weight: 500;
    margin: 0 auto;
  }

  &__wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    row-gap: 3px;
    width: 100%;
  }

  &__forgot {
    font-size: 12px;
    text-decoration: none;
    color: var(--color-blue);
  }
}
</style>
