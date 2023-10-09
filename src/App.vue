<template>
  <div class="app container">
    <h1 class="app__title mt-5 mb-4">Timetable</h1>
    <AppTabs>
      <AppTab href="/">Bus Lines</AppTab>
      <AppTab href="/stops">Stops</AppTab>
    </AppTabs>
    <router-view></router-view>
  </div>
</template>

<script lang="ts" setup>
import AppTabs from "@/components/AppTabs/AppTabs.vue";
import AppTab from "@/components/AppTabs/AppTab.vue";
</script>

<style lang="scss">
@import "./styles/main.scss";
</style>
