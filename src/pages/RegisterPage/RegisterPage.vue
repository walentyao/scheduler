<script setup lang="ts">
import CustomButton from '@/shared/components/CustomButton.vue';
</script>

<template>
  <div class="page">
    <div class="registration">
      <a class="backspace registration__backspace">
        <img
          src="/arrov-left.svg"
          alt="arov-left"
        />
      </a>

      <div class="registration__titleApp titleApp">
        <h1 class="titleApp__name">SCHEDULER</h1>
        <h3 class="titleApp__desc">Management App</h3>
      </div>

      <form class="form registration__form">
        <h4 class="form__title">Создайте свой аккаунт</h4>
        <div class="inputPrimary">
          <label
            for="username"
            class="inputPrimary__image"
          >
            <img
              src="/user.svg"
              alt="convert"
            />
          </label>
          <input
            type="text"
            id="username"
            placeholder="Никнейм"
            class="inputPrimary__input"
          />
        </div>
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
        <div class="inputPrimary">
          <label
            for="controlPassword"
            class="inputPrimary__image"
          >
            <img
              src="/lock.svg"
              alt="convert"
            />
          </label>
          <input
            type="password"
            id="controlPassword"
            placeholder="Повторите пароль"
            class="inputPrimary__input"
          />
        </div>
        <CustomButton
          type="primary"
          label="Зарегистрироваться"
        />
      </form>

      <div class="alternative registration__alternative">
        <div class="alternative__title">Или зарегистрируйтесь через</div>
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
      <div class="referencesRegister registration__referencesRegister">
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

.registration {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  max-width: 375px;
  width: 100%;

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

.referencesRegister {
  display: flex;
  justify-content: center;
  font-size: 14px;
  font-weight: 500;

  &__link {
    text-decoration: none;
    color: var(--color-blue);
  }
}

.backspace {
  display: flex;
  align-items: center;
  justify-content: center;

  border-radius: 10px;
  background: var(--color-blue);
  width: 36px;
  height: 36px;
}
</style>
