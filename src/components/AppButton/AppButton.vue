<template>
  <button type="button" class="btn" :class="[`btn-${variant}`, `btn-${size}`]">
    <slot />
  </button>
</template>

<script setup lang="ts">
import { ButtonVariant, ButtonSize } from "./AppButton.types";
import { PropType, defineProps } from "vue";

defineProps({
  variant: {
    type: String as PropType<ButtonVariant>,
    default: ButtonVariant.Primary,
  },
  size: {
    type: String as PropType<ButtonSize>,
    default: ButtonSize.Medium,
  },
});
</script>

<style lang="scss" scoped>
.btn {
  &-primary {
    background-color: $btn-primary;

    &:hover {
      background-color: $btn-primary-hover;
    }

    &.active {
      border: $btn-primary-active;
      background-color: $btn-primary-active;
    }
  }
}
</style>
