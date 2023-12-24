<script setup lang="ts">
import CheckboxSwitch from '@/shared/components/CheckboxSwitch.vue';
import { XMarkIcon } from '@heroicons/vue/24/solid';
</script>

<template>
  <div class="task-detail">
    <header class="header">
      <div class="header__title">
        <span>UI Design</span>
      </div>
      <div class="btn btn__icon">
        <XMarkIcon />
      </div>
    </header>
    <div class="task-info">
      <div class="task-info__date">
        <div class="task-info__dateStart">
          <div>Начало</div>
          <div>21 февраль 2022</div>
        </div>
        <div class="task-info__dateEnd">
          <div>Конец</div>
          <div>3 марта 2022</div>
        </div>
      </div>
      <div class="remaining-time">
        <div class="remaining-time__item">
          <div class="remaining-time__value">0</div>
          <div class="remaining-time__text">месяцев</div>
        </div>
        <div>
          <div class="remaining-time__value">12</div>
          <div class="remaining-time__text">дней</div>
        </div>
        <div>
          <div class="remaining-time__value">18</div>
          <div class="remaining-time__text">часов</div>
        </div>
      </div>
      <div class="description task-info__description">
        <h3>Описание</h3>
        <p>
          user interface (UI) is anything a user may interact with to use a digital product or
          service. This includes everything from screens and touchscreens, keyboards, sounds, and
          even lights. To understand the evolution of UI, however, it’s helpful to learn a bit more
          about its history and how it has evolved into best practices and a profession.
        </p>
      </div>
    </div>
    <div class="progress">
      <div class="progress-bar">
        <div class="progress-bar__line"></div>
      </div>
      <div class="progress__value">80%</div>
    </div>
    <div class="todo-list__wrapper">
      <h3>Список подзадач</h3>
      <div class="todo-list">
        <div class="list-item">
          <div class="list-item__title">Work Out</div>
          <CheckboxSwitch id="saadsd" />
        </div>
        <div class="list-item">
          <div class="list-item__title">Daily Meeting</div>
          <CheckboxSwitch id="saasddsd" />
        </div>
        <div class="list-item">
          <div class="list-item__title">Reading a Book</div>
          <CheckboxSwitch id="saddsd" />
        </div>
        <div class="list-item">
          <div class="list-item__title">Daily Meeting</div>
          <CheckboxSwitch id="saaasd" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.task-detail {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  padding: 20px;
  max-width: 375px;
  width: 100%;
}

.progress {
  display: flex;
  flex-direction: column;
  row-gap: 3px;
  font-size: 12px;

  &__title {
    color: white;
  }

  &__value {
    display: flex;
    justify-content: flex-end;
  }
}

.progress-bar {
  height: 4px;
  border-radius: 4px;
  background: #004797;

  &__line {
    height: 4px;
    border-radius: 4px;
    width: 80%;
    background: white;
  }
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>
