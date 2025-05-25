import { defineStore } from "pinia";
import { ref } from "vue";
import dataRoom from "../assets/data/list_rooms.json";

export const useRoomStore = defineStore("roomStore", () => {
  const data = ref([...dataRoom.data.customer_rooms]);

  const setData = (newData = []) => {
    data.value = newData;
  };

  return {
    data,
    setData,
  };
});
