<script setup>
import { useRoute, useRouter } from "vue-router";
import { useRoomStore } from "../../stores";
import ChatRoom from "../../components/ChatRoom.vue";

const route = useRoute();
const router = useRouter();
const roomStore = useRoomStore();

const toChat = (roomId) => {
  router.push({ name: "detail-chat", params: { room_id: roomId } });
};
</script>

<template>
  <div class="mx-auto max-w-7xl">
    <div class="flex">
      <div
        class="w-3/10 flex h-screen flex-col border-r-1 border-l-1 border-gray-line"
      >
        <div class="px-4 py-4 font-bold text-2xl bg-white">Chats</div>

        <div class="overflow-y-auto flex-1 flow-column">
          <ChatRoom
            :data="roomStore.data"
            :roomId="route.params.room_id"
            @to-chat="toChat"
          />
        </div>
      </div>

      <div
        class="w-7/10 border-r-1 border-gray-line relative h-screen flex flex-col justify-between"
      >
        <div
          class="bg-room-active w-full h-full flex justify-center items-center"
          v-if="!route.params.room_id"
        >
          <div>
            <div>Untuk Memulai Percakapan</div>
            <div>Pilih Chat Disamping Kiri</div>
          </div>
        </div>
        <router-view v-else />
      </div>
    </div>
  </div>
</template>
