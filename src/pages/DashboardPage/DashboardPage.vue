<script setup lang="ts">
import CheckboxSwitch from '@/shared/components/CheckboxSwitch.vue';
import { TaskList } from '@/widgets/TaskList';
</script>

<template>
  <div class="dashboard">
    <header class="header">
      <div class="header__date">Понедельник, февраль 20 2022</div>
      <div class="header__notifications">
        <img
          src="/notifications.svg"
          alt="notifications"
        />
      </div>
    </header>
    <div class="greeting">
      <h2>Привет Валентин</h2>
      <p>Хорошего дня!</p>
    </div>
    <div class="tasks">
      <h3>Приоритетные задачи</h3>
      <!--      TODO-->
      <TaskList class="tasks__listTasks" />
    </div>
    <div class="dailyTasks">
      <h3>Задания на день</h3>
      <div class="dailyTasks__list">
        <div class="dailyTask">
          <div class="dailyTask__title">Work Out</div>
          <CheckboxSwitch id="check1" />
        </div>
        <div class="dailyTask">
          <div class="dailyTask__title">Daily Meeting</div>
          <CheckboxSwitch id="check2" />
        </div>
        <div class="dailyTask">
          <div class="dailyTask__title">Reading a Book</div>
          <CheckboxSwitch id="check3" />
        </div>
        <div class="dailyTask">
          <div class="dailyTask__title">Daily Meeting</div>
          <CheckboxSwitch id="check4" />
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.dashboard {
  display: flex;
  flex-direction: column;
  row-gap: 30px;

  padding: 10px;
  margin: 0 auto;
  max-width: 375px;
}

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  &__date {
    font-size: 14px;
  }
}

.greeting {
  display: flex;
  flex-direction: column;
  row-gap: 5px;
}

.tasks {
  &__listTasks {
    margin-top: 20px;
  }
}
.dailyTasks {
  display: flex;
  flex-direction: column;
  row-gap: 10px;

  &__list {
    display: flex;
    flex-direction: column;

    row-gap: 10px;
  }
}

.dailyTask {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  padding: 5px 10px;
  border: 1px solid rgba(225, 225, 225, 0.6);
  border-radius: 10px;
}
</style>
