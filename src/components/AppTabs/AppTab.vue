<template>
  <li class="app-tab nav-item">
    <a
      class="app-tab__link nav-link"
      :aria-current="isActive"
      :href="href"
      :class="{ active: isActive }"
    >
      <slot />
    </a>
  </li>
</template>

<script lang="ts" setup>
import { computed, defineProps } from "vue";
import { useRoute } from "vue-router";

const props = defineProps({
  href: {
    type: String,
    default: "#",
  },
});

const route = useRoute();

const isActive = computed(() =>
  route.matched.some(({ path }) => path.startsWith(props.href))
);
</script>

<style lang="scss" scoped>
.app-tab {
  &__link {
    padding: $spacer-lg 0;
    min-width: 120px;
    text-align: center;
    color: $text-unactive;
    --bs-nav-link-color: $text-unactive;

    &.active {
      font-weight: normal;
      border-bottom-color: $text-active;
    }
  }
}
</style>
