<script setup lang="ts">
import CustomButton from '@/shared/components/CustomButton.vue';
import Calendar from 'primevue/calendar';
import InputText from 'primevue/inputtext';
import { ArrowLeftIcon } from '@heroicons/vue/24/solid';
import { ref } from 'vue';

const buttondisplay = ref();
</script>

<template>
  <div class="add-task-page">
    <header class="header add-task-page__header">
      <div class="header__button">
        <CustomButton
          type="icon"
          theme="reverse"
          :icon="ArrowLeftIcon"
        />
      </div>
      <span class="header__title">Добавление задачи</span>
    </header>
    <main class="main">
      <div class="date main__date">
        <div class="date__item">
          <span class="blue-title">Начало</span>
          <Calendar
            v-model="buttondisplay"
            showIcon
            date-format="M-dd-yy"
          />
        </div>
        <div class="date__item">
          <span class="blue-title">Конец</span>
          <Calendar
            v-model="buttondisplay"
            showIcon
            date-format="M-dd-yy"
          />
        </div>
      </div>
      <div class="main__title">
        <h3 class="blue-title">Заголовок</h3>
        <InputText size="large" />
      </div>

      <div class="main__category"></div>
    </main>
  </div>
</template>

<style scoped lang="scss">
.add-task-page {
  width: 100%;
  background: var(--color-blue);
  display: flex;
  flex-direction: column;
  row-gap: 30px;
}

.header {
  margin-top: 20px;
  padding: 20px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;

  &__button {
    position: absolute;
    left: 10px;
  }

  &__title {
    color: white;
    font-weight: 600;
    font-size: 20px;
  }
}

.main {
  flex: 1;
  background: white;
  padding: 20px;
  border-radius: 50px 50px 0 0;

  display: flex;
  flex-direction: column;
  row-gap: 20px;

  &__date {
    margin-top: 20px;
  }

  &__title {
    display: flex;
    flex-direction: column;
    row-gap: 10px;
  }
}

.date {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  column-gap: 15px;

  &__item {
    display: flex;
    flex-direction: column;
    row-gap: 7px;
  }
}
</style>
