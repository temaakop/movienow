<!-- TODO: добавть стилизация актвиного чекбокса -->
<script setup lang="ts">
import { ref, type Prop, type PropType } from 'vue'

const isChecked = ref(false)

const props = defineProps({
  checkboxId: String as PropType<string>,
  disabled: Boolean as PropType<boolean>
})

const emit = defineEmits<{
  (e: 'update:checked', value: boolean): void
}>()

const handleChange = (event: Event) => {
  const target = event.target as HTMLInputElement
  isChecked.value = target.checked
  emit('update:checked', isChecked.value)
}
</script>

<template>
  <div class="filters-item__container">
    <input
      class="filters-item__checkbox"
      type="checkbox"
      :id="checkboxId"
      :checked="isChecked"
      :disabled="disabled"
      @change="handleChange"
    />
    <label class="filters-item__text" :for="checkboxId"> Отсортировать по году</label>
  </div>
</template>

<style scoped lang="scss">
.filters-item__container {
  display: flex;
  justify-content: space-between;
  gap: 8px;
  align-items: center;
  height: 20px;

  .filters-item__checkbox {
    opacity: 0;
    width: 15px;
    height: 15px;
    cursor: pointer;
  }

  .filters-item__text {
    position: relative;
    color: var(--color-text-light-grey);
    font-size: 16px;
    font-weight: 400;
    line-height: 16px;
    vertical-align: middle;

    &::before {
      position: absolute;
      left: -23px;
      display: block;
      content: '';
      width: 15px;
      height: 15px;
      border: 1px solid var(--color-text-light-grey);
    }
  }

  .filters-item__checkbox:checked + .filters-item__text::before {
    background-color: red;
  }
}
</style>
