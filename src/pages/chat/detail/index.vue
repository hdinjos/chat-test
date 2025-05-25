<script setup>
import { ref, onMounted, watch } from "vue";
import { useRoute, useRouter } from "vue-router";
import { useRoomStore } from "../../../stores/index";
import { formatDate, getFileUrl, msgIsFile } from "../../../utils";

const route = useRoute();
const router = useRouter();
const roomStore = useRoomStore();
const detail = ref({});
const dataChat = ref([]);

const inputMsg = ref("");

const getInitChat = () => {
  if (route.params.room_id) {
    const currentRoom = roomStore.data.find(
      (item) => item.room_id === route.params.room_id
    );
    if (!currentRoom) {
      router.replace({
        name: "chat",
      });
    } else {
      detail.value = currentRoom;
      dataChat.value = [
        {
          msg: detail.value.last_comment_text,
          name: detail.value.last_comment_sender,
          date: formatDate(detail.value.last_comment_timestamp),
          isSender: true,
        },
      ];
    }
  }
};

onMounted(() => {
  getInitChat();
});

watch(route, (val) => {
  getInitChat();
});

const changeLatestMsg = (msg) => {
  const newRoom = roomStore.data.map((item) => {
    if (item.room_id === route.params.room_id) {
      return { ...item, last_comment_text: msg };
    }
    return item;
  });
  roomStore.setData(newRoom);
};
const handleEnter = (e) => {
  if (e.code === "Enter") {
    if (inputMsg.value === "") return;
    dataChat.value.unshift({
      msg: inputMsg.value,
      name: "Logined User",
      date: formatDate(new Date()),
      isSender: false,
    });
    changeLatestMsg(inputMsg.value);
    inputMsg.value = "";
  }
};

const handleSend = () => {
  if (inputMsg.value === "") return;
  dataChat.value.unshift({
    msg: inputMsg.value,
    name: "Logined User",
    date: formatDate(new Date()),
    isSender: false,
  });
  changeLatestMsg(inputMsg.value);
  inputMsg.value = "";
};
</script>

<template>
  <div class="px-4 py-3 flex items-center bg-room-active">
    <img
      class="bg-white w-10 h-10 rounded-full object-cover mr-4"
      :src="detail.user_avatar_url"
    />
    <div>{{ detail?.name }}</div>
  </div>
  <div class="h-full overflow-y-auto flex flex-col-reverse">
    <div
      v-for="(d, index) in dataChat"
      :key="index"
      class="px-16 flex"
      :class="{ 'justify-start': d.isSender, 'justify-end': !d.isSender }"
    >
      <div
        class="w-fit max-w-md text-left mb-3 px-3 py-2 rounded"
        :class="{ 'bg-blue-200': d.isSender, 'bg-green-200': !d.isSender }"
      >
        <img v-if="msgIsFile(d.msg)" :src="getFileUrl(d.msg)" />
        <div v-else>
          {{ d.msg }}
        </div>
        <div class="text-sm text-end">{{ d.date }}</div>
      </div>
    </div>

    <div class="mt-2"></div>
  </div>
  <div class="px-4 py-3 flex items-center bg-room-active gap-3">
    <input
      v-model="inputMsg"
      @keypress="handleEnter"
      placeholder="Tulis pesan"
      type="text"
      class="outline-none w-full bg-white rounded-md px-3 py-2"
    />
    <button
      @click="handleSend"
      class="px-4 py-2 bg-black text-white rounded-md cursor-pointer"
    >
      Kirim
    </button>
  </div>
</template>
