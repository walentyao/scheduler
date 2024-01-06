<script setup lang="ts">
import { type Component } from 'vue';

type TypeButton = 'primary' | 'icon';

interface IProps {
  label?: string;
  icon?: Component;
  type: TypeButton;
  theme?: string;
}

const props = defineProps<IProps>();

const getStyle = (): string => {
  let style = 'btn__' + props.type;
  if (props.type === 'icon' && props.theme) style += ' btn__icon_' + props.theme;

  return style;
};
</script>

<template>
  <button
    class="btn"
    :class="getStyle()"
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
  --color-btn-back: var(--color-blue);
  --color-btn-icon: white;
  --color-btn-text: white;

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
    background: var(--color-btn-back);
    color: var(--color-btn-text);

    &:hover {
      background: rgba(126, 14, 218, 0.7);
    }
  }

  &__icon {
    max-width: max-content;
    height: auto;
    background: var(--color-btn-back);

    &_reverse {
      --color-btn-back: white;
      --color-btn-icon: var(--color-blue);
    }
  }
}

.icon {
  width: 24px;
  height: 24px;
  color: var(--color-btn-icon);
}
</style>
