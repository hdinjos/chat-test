<script setup>
import { defineProps } from "vue";
import { msgIsFile, getFileUrl } from "../utils";

const props = defineProps({
  data: {
    type: Array,
  },
});

</script>

<template>
  <div
    v-for="(d, index) in data"
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
</template>
