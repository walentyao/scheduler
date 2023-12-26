<script setup lang="ts">
import { type Component } from 'vue';

type TypeButton = 'primary' | 'icon';
interface IProps {
  label?: string;
  icon?: Component;
  type: TypeButton;
}

const props = defineProps<IProps>();

const style = 'btn__' + props.type;
</script>

<template>
  <button
    class="btn"
    :class="style"
  >
    <component
      v-if="icon"
      :is="icon"
      class="icon"
    />
    <span v-if="label">{{ label }}</span>
  </button>
</template>

<style scoped lang="scss">
.btn {
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  width: 100%;
  height: 50px;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: all 0.2s ease;

  &__primary {
    background: var(--color-blue);
    color: white;

    &:hover {
      background: rgba(126, 14, 218, 0.7);
    }
  }

  &__icon {
    max-width: max-content;
    height: auto;
    background: var(--color-blue);
  }
}

.icon {
  width: 24px;
  height: 24px;
  color: white;
}
</style>
