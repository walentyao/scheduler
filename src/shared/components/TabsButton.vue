<script setup lang="ts">
import { ref } from 'vue';

interface IProps {
  options: string[];
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();

const currentTabValue = ref<string>(props.options[0]);

const toggleTab = (newValue: string) => {
  currentTabValue.value = newValue;
  emit('update:modelValue', newValue);
};
</script>

<template>
  <div class="tabs">
    <div
      class="tabs__item"
      v-for="item in options"
      :key="item"
      :class="{
        tabs__item_default: currentTabValue !== item,
        tabs__item_active: currentTabValue === item,
      }"
      @click="toggleTab(item)"
    >
      <span class="tabs__text">{{ item }}</span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.tabs {
  display: flex;
  justify-content: center;
  flex-direction: row;
  column-gap: 10px;

  &__item {
    display: flex;
    flex: 1;
    justify-content: center;
    align-items: center;

    max-width: 160px;
    min-height: 50px;

    padding: 15px 10px;
    border-radius: 10px;
    font-weight: 500;

    transition: all 0.3s ease;

    &_default {
      background: white;
      border: 1px solid #d9d9d9;
      color: var(--color-blue);
    }

    &_active {
      background: var(--color-blue);
      color: white;
    }
  }

  &__text {
    display: flex;
    justify-content: center;
    align-items: center;

    text-align: center;
    font-size: 14px;
  }
}
</style>
