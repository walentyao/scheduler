<script setup lang="ts">
interface IProps {
  id: string;
}

const props = defineProps<IProps>();
</script>

<template>
  <div class="checkbox-wrapper">
    <input
      type="checkbox"
      :id="id"
      class="switch-checkbox"
    />
    <label :for="id"></label>
  </div>
</template>

<style scoped lang="scss">
.switch-checkbox {
  display: none;
}

.checkbox-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.switch-checkbox + label {
  display: inline-block;
  width: 60px;
  height: 34px;
  background-color: #ccc;
  border-radius: 17px;
  position: relative;
  cursor: pointer;
}

.switch-checkbox + label:after {
  content: '';
  position: absolute;
  top: 2px;
  left: 2px;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-color: #fff;
  transition: transform 0.3s;
}

.switch-checkbox:checked + label {
  background-color: var(--color-blue);
}

.switch-checkbox:checked + label:after {
  transform: translateX(26px);
}
</style>
