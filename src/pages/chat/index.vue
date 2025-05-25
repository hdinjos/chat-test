<script setup>
import { useRoute, useRouter } from "vue-router";
import { useRoomStore } from "../../stores";
import { msgIsFile } from "../../utils/index";

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
          <div
            v-for="d in roomStore.data"
            :key="d.room_id"
            @click="toChat(d.room_id)"
            class="pl-4 flex items-center hover:bg-room-hover cursor-pointer"
            :class="{
              'bg-room-active': d.room_id === route.params.room_id,
              'bg-white': d.room_id !== route.params.room_id,
            }"
          >
            <img
              class="bg-white w-10 h-10 rounded-full object-cover mr-4"
              :src="d.user_avatar_url"
            />
            <div class="border-b-1 border-gray-line w-full py-3 pr-3">
              <div class="flex justify-between">
                <div class="font-medium">{{ d.name }}</div>
              </div>
              <div class="text-sm text text-last-msg line-clamp-1">
                {{
                  msgIsFile(d.last_comment_text)
                    ? "Mengirim File"
                    : d.last_comment_text
                }}
              </div>
            </div>
          </div>
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
