import { Stop } from "@/types/api.types";
import { useHTTP } from "./client";

const http = useHTTP({
  baseURL: "http://localhost:3000", // @todo: add env variable
});

export default function () {
  const getTimetable = async () => {
    return await http.get<Stop[]>("/stops");
  };

  return {
    getTimetable,
  };
}
