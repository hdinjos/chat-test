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
    class="px-16 flex relative"
    :class="{ 'justify-start': d.isSender, 'justify-end': !d.isSender }"
  >
    <div v-if="d.isSender">
      <svg
        viewBox="0 0 8 13"
        height="13"
        width="8"
        preserveAspectRatio="xMidYMid meet"
        class="absolute top-0 left-14"
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 8 13"
      >
        <title>tail-in</title>
        <path
          opacity="0.13"
          fill="#bedbff"
          d="M1.533,3.568L8,12.193V1H2.812 C1.042,1,0.474,2.156,1.533,3.568z"
        ></path>
        <path
          fill="#bedbff"
          d="M1.533,2.568L8,11.193V0L2.812,0C1.042,0,0.474,1.156,1.533,2.568z"
        ></path>
      </svg>
    </div>
    <div v-else>
      <svg
        viewBox="0 0 8 13"
        height="13"
        width="8"
        preserveAspectRatio="xMidYMid meet"
        class="absolute top-0 right-14"
        version="1.1"
        x="0px"
        y="0px"
        enable-background="new 0 0 8 13"
      >
        <title>tail-out</title>
        <path
          opacity="0.13"
          d="M5.188,1H0v11.193l6.467-8.625 C7.526,2.156,6.958,1,5.188,1z"
        ></path>
        <path
          fill="#b9f8cf"
          d="M5.188,0H0v11.193l6.467-8.625C7.526,1.156,6.958,0,5.188,0z"
        ></path>
      </svg>
    </div>
    <div
      class="w-fit max-w-md text-left mb-3 px-3 py-2 rounded-b-md"
      :class="{
        'bg-blue-200': d.isSender,
        'bg-green-200': !d.isSender,
        'rounded-tr-sm': d.isSender,
        'rounded-tl-sm ': !d.isSender,
      }"
    >
      <img v-if="msgIsFile(d.msg)" :src="getFileUrl(d.msg)" />
      <div v-else>
        {{ d.msg }}
      </div>
      <div class="text-sm text-end">{{ d.date }}</div>
    </div>
  </div>
</template>
