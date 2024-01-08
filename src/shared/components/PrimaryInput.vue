<script setup lang="ts">
import { type Component, ref } from 'vue';

interface IProps {
  image: Component;
  type: string;
  id: string;
  placeholder?: string;
  modelValue: string;
}

const props = defineProps<IProps>();
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void;
}>();
</script>

<template>
  <div class="input-primary">
    <label
      :for="id"
      class="input-primary__label"
    >
      <component
        :is="image"
        class="input-primary__image"
      />
    </label>
    <input
      :type="type"
      :id="id"
      :placeholder="placeholder"
      class="input-primary__input"
      :value="modelValue"
      @input="emit('update:modelValue', $event.target.value)"
    />
  </div>
</template>

<style scoped lang="scss">
.input-primary {
  position: relative;
  border-radius: 10px;
  height: 48px;
  width: 100%;
  overflow: hidden;
  transition: all 0.3s ease;

  &__label {
    position: absolute;
    z-index: 100;
    top: 0;
    left: 0;

    display: flex;
    justify-content: center;
    align-items: center;

    width: 50px;
    height: 100%;

    background: var(--color-blue);
  }

  &__input {
    position: relative;
    z-index: 10;

    outline: none;

    border: 1px solid rgba(154, 154, 154, 0.5);
    border-radius: 10px;

    width: 100%;
    height: 100%;
    padding-left: 60px;
  }

  &__image {
    color: white;
    width: 24px;
    height: 24px;
  }
}
</style>
