<script setup lang="ts">
import CustomButton from '@/shared/components/CustomButton.vue';
</script>

<template>
  <div class="page">
    <div class="login">
      <div class="titleApp">
        <h1 class="titleApp__name">SCHEDULER</h1>
        <h3 class="titleApp__desc">Management App</h3>
      </div>

      <form class="form login__form">
        <h4 class="form__title">Войдите в свой аккаунт</h4>
        <div class="inputPrimary">
          <label
            for="email"
            class="inputPrimary__image"
          >
            <img
              src="/convert.svg"
              alt="convert"
            />
          </label>
          <input
            type="email"
            id="email"
            placeholder="Почта"
            class="inputPrimary__input"
          />
        </div>
        <div class="form__wrapper">
          <div class="inputPrimary">
            <label
              for="password"
              class="inputPrimary__image"
            >
              <img
                src="/lock.svg"
                alt="convert"
              />
            </label>
            <input
              type="password"
              id="password"
              placeholder="Пароль"
              class="inputPrimary__input"
            />
          </div>
          <a
            href="#app"
            class="form__forgot"
            >Забыли пароль?</a
          >
        </div>
        <CustomButton
          type="primary"
          label="Войти"
        />
      </form>

      <div class="alternative login__alternative">
        <div class="alternative__title">Или войдите с помощью</div>
        <div class="auth-links">
          <div class="auth-links__link">
            <img
              src="/google.svg"
              alt="1"
              class="auth-links__icon"
            />
          </div>
          <div class="auth-links__link">
            <img
              src="/twitter.svg"
              alt="2"
              class="auth-links__icon"
            />
          </div>
          <div class="auth-links__link">
            <img
              src="/facebook.svg"
              alt="3"
              class="auth-links__icon"
            />
          </div>
        </div>
      </div>
      <div class="referencesRegister login__referencesRegister">
        Ещё нет аккаунта?
        <a
          href="#app"
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
</style>
