<template>
  <p class="app-placeholder"><slot /></p>
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
  border-radius: 2px;

  @include dashed-border($text-unactive);
}
</style>
