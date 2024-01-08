<script setup lang="ts">
import { LoginForm } from '@/widgets/LoginForm';
import { AlternativeAuth } from '@/features/AlternativeAuth';
</script>

<template>
  <div class="page">
    <div class="login">
      <div class="title-app">
        <h1 class="title-app__name">SCHEDULER</h1>
        <h3 class="title-app__desc">Management App</h3>
      </div>

      <LoginForm class="login__form" />
      <AlternativeAuth class="login__alternative" />
      <div class="referencesRegister login__referencesRegister">
        Ещё нет аккаунта?
        <a
          href="#"
          class="referencesRegister__link"
          >Зарегистрироваться</a
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import '@/shared/styles/auth';

.login {
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 375px;

  padding: 10px;

  &__form {
    margin-top: 120px;
  }

  &__alternative {
    margin-top: 40px;
  }

  &__referencesRegister {
    margin-top: 30px;
  }

  &__titleApp {
    margin-top: 20px;
  }

  &__backspace {
    margin-top: 20px;
  }
}

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
