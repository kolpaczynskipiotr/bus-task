<template>
  <div>
    <AppCard>
      <AppTable>
        <template #thead>
          <tr>
            <th>Bus stops</th>
          </tr>
        </template>
        <tr
          v-for="(stop, index) in busStops"
          :key="`${stop}-${index}`"
          @click="selectedStop = stop"
        >
          {{
            stop
          }}
        </tr>
      </AppTable>
    </AppCard>
  </div>
</template>

<script lang="ts" setup>
import AppTable from "@/components/AppTable/AppTable.vue";
import AppCard from "@/components/AppCard/AppCard.vue";
import { computed } from "vue";
import { useStore } from "vuex";

const store = useStore();

const busStops = computed(() => store.state.stops);

const fetchTimetable = async () => {
  if (store.getters.hasStops) {
    return;
  }

  await store.dispatch("fetchTimetable");
};

fetchTimetable();
</script>

<style lang="scss" scoped></style>
