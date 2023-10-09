<template>
  <span class="app-placeholder"> <slot /> </span>
</template>

<style scoped lang="scss">
.app-placeholder {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  color: $text-secondary;
  background: $fg-primary;

  @include dashed-border($text-unactive);
}
</style>
