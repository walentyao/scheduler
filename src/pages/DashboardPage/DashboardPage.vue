<script setup lang="ts">
import NavigationFooter from '@/widgets/NavigationFooter/components/NavigationFooter.vue';
import CheckboxSwitch from '@/shared/components/CheckboxSwitch.vue';
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
      <div class="listTasks tasks__listTasks">
        <div class="cardTask">
          <div class="cardTask__date">
            <span>10 дней</span>
          </div>
          <div class="cardTask__title">
            <img
              src="/iconui.svg"
              class="cardTask__icon"
              alt="ui"
            />
            <span class="cardTask__text">UI Design</span>
          </div>
          <div class="progress">
            <div class="progress__title">Прогресс</div>
            <div class="progressBar">
              <div class="progressBar__line"></div>
            </div>
            <div class="progress__value">80%</div>
          </div>
        </div>

        <div class="cardTask">
          <div class="cardTask__date">
            <span>10 дней</span>
          </div>
          <div class="cardTask__title">
            <img
              src="/iconui.svg"
              class="cardTask__icon"
              alt="ui"
            />
            <span class="cardTask__text">UI Design</span>
          </div>
          <div class="progress">
            <div class="progressBar">
              <div class="progressBar__line"></div>
            </div>
            <div class="progress__value">80%</div>
          </div>
        </div>
      </div>
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
  max-width: 375px;
  width: 100%;
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

.listTasks {
  display: flex;
  flex-direction: row;
  column-gap: 12px;
}

.cardTask {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px;
  background: #006ee9;
  border-radius: 20px;
  color: white;

  width: 130px;
  height: 190px;

  &__date {
    display: flex;
    justify-content: flex-end;
    color: black;

    span {
      padding: 5px;
      border-radius: 10px;

      background: white;

      font-size: 12px;
    }
  }

  &__title {
    display: flex;
    flex-direction: row;
    align-items: center;
    column-gap: 7px;
  }
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

.progressBar {
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
