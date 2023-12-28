<script setup lang="ts">
import CheckboxSwitch from '@/shared/components/CheckboxSwitch.vue';
</script>

<template>
  <div class="list">
    <div class="list__item">
      <div class="list-item__title">Work Out</div>
      <CheckboxSwitch id="saadsd" />
    </div>
    <div class="list__item">
      <div class="list-item__title">Daily Meeting</div>
      <CheckboxSwitch id="saasddsd" />
    </div>
    <div class="list__item">
      <div class="list-item__title">Reading a Book</div>
      <CheckboxSwitch id="saddsd" />
    </div>
    <div class="list__item">
      <div class="list-item__title">Daily Meeting</div>
      <CheckboxSwitch id="saaasd" />
    </div>
  </div>
</template>

<style scoped lang="scss">
.list {
  display: flex;
  flex-direction: column;
  row-gap: 8px;
  margin-top: 8px;

  &__item {
    display: flex;
    justify-content: space-between;
    align-items: center;

    border: 1px solid #e3e3e3;
    border-radius: 10px;
    padding: 8px;
  }
}
</style>
