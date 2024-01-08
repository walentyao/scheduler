<script setup lang="ts"></script>

<template>
  <div class="alternative">
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
</template>

<style scoped lang="scss">
.alternative {
  display: flex;
  flex-direction: column;
  row-gap: 20px;

  max-width: 345px;
  width: 100%;

  &__title {
    position: relative;
    margin: 0 auto;

    &::before {
      position: absolute;
      top: 50%;
      left: -15px;
      content: '';
      transform: translateY(-50%);

      width: 10px;
      height: 2px;
      background: var(--color-blue);
      opacity: 0.7;
    }

    &::after {
      position: absolute;
      top: 50%;
      right: -15px;
      content: '';
      transform: translateY(-50%);

      width: 10px;
      height: 2px;
      background: var(--color-blue);
      opacity: 0.7;
    }
  }
}

.auth-links {
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  padding: 0 20px;

  &__link {
    width: 70px;
    height: 70px;

    display: flex;
    justify-content: center;
    align-items: center;

    border-radius: 10px;
    border: 1px solid rgba(199, 199, 199, 0.6);
  }
}
</style>
