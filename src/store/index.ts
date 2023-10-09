import { createStore } from "vuex";
import useApi from "@/api";
import { Stop } from "@/types/api.types";
import { covertTimeToDate, normalizeData } from "@/helpers";

const { getTimetable } = useApi();

export default createStore({
  state: {
    timetable: {} as Record<string, Stop[]>,
    stops: null as Set<string> | null,
  },
  getters: {
    hasStops(state) {
      return !!state.stops?.size;
    },
    hasTimeline(state) {
      return !!Object.values(state.timetable)?.length;
    },
    getBusLines(state) {
      return Object.keys(state.timetable) ?? [];
    },
    getBusStops(state) {
      return (busId: number) =>
        state.timetable[busId]
          ?.sort((a: Stop, b: Stop) => b.order - a.order)
          ?.reduce((sum: string[], item: Stop) => {
            if (sum.includes(item.stop)) {
              return sum;
            }

            sum.push(item.stop);
            return sum;
          }, []);
    },
    getStopTimeline(state) {
      return (busId: number, stopId: string) =>
        state.timetable[busId]
          ?.reduce((sum: string[], item: Stop) => {
            if (item.stop !== stopId) {
              return sum;
            }

            if (sum.includes(item.time)) {
              return sum;
            }

            sum.push(item.time);
            return sum;
          }, [])
          ?.sort((a: string, b: string) => {
            if (!(a && b)) {
              return 0;
            }

            return covertTimeToDate(b) < covertTimeToDate(a) ? 1 : -1;
          }) ?? [];
    },
  },
  mutations: {
    setTimetable(state, value: Stop[]) {
      state.timetable = normalizeData<Stop>(value, "line");
      state.stops = new Set(value.map((item) => item.stop));
    },
  },
  actions: {
    async fetchTimetable(context) {
      try {
        const res = await getTimetable();

        context.commit("setTimetable", res.data);
      } catch (e) {
        console.error(e);
      }
    },
  },
});
