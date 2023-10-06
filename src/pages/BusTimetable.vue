<template>
  <div>
    <AppTable></AppTable>
  </div>
</template>

<script lang="ts" setup>
import AppTable from "@/components/AppTable.vue";
import useApi from "@/api";

const { getTimetable } = useApi();

const fetchStops = async () => {
  try {
    const res = await getTimetable();

    console.log(res.data[0].stop);
  } catch (e) {
    console.error(e);
  }
};

fetchStops();
</script>

<style lang="scss" scoped></style>
