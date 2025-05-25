<script setup>
import { defineProps, defineEmits } from "vue";
import { msgIsFile } from "../utils";

const props = defineProps({
  data: {
    type: Array,
  },
  room_id: {
    type: String,
  },
});

const emits = defineEmits(["to-chat"]);

const toChat = (roomId) => {
  emits("to-chat", roomId);
};
</script>

<template>
  <div
    v-for="d in data"
    :key="d.room_id"
    @click="toChat(d.room_id)"
    class="pl-4 flex items-center hover:bg-room-hover cursor-pointer"
    :class="{
      'bg-room-active': d.room_id === room_id,
      'bg-white': d.room_id !== room_id,
    }"
  >
    <img
      class="bg-white w-10 h-10 rounded-full object-cover mr-4"
      :src="d.user_avatar_url"
      alt="avatar_img"
    />
    <div class="border-b-1 border-gray-line w-full py-3 pr-3">
      <div class="flex justify-between">
        <div class="font-medium">{{ d.name }}</div>
      </div>
      <div class="text-sm text text-last-msg line-clamp-1">
        {{
          msgIsFile(d.last_comment_text) ? "Mengirim File" : d.last_comment_text
        }}
      </div>
    </div>
  </div>
</template>
