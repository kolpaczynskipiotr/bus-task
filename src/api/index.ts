import { Stop } from "@/types/api.types";
import { useHTTP } from "./client";

const http = useHTTP({
  baseURL: process.env.VUE_APP_API_URL,
});

export default function () {
  const getTimetable = async () => {
    return await http.get<Stop[]>("/stops");
  };

  return {
    getTimetable,
  };
}
