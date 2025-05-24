<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
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
            class="pl-4 flex items-center bg-white hover:bg-room-hover cursor-pointer"
          >
            <img
              class="bg-white w-10 h-10 rounded-full object-cover mr-4"
              src="https://latest-multichannel.qiscus.com/img/default_avatar.svg"
            />
            <div class="border-b-1 border-gray-line w-full py-3">
              <div>Andi Wibowo</div>
              <div>Lorem ipsum dolor sit amet</div>
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
            <div>Pilih Chat Disamping Kanan</div>
          </div>
        </div>
        <router-view v-else />
      </div>
    </div>
  </div>
</template>
