<script setup></script>

<template>
  <div class="px-4 py-3 flex items-center bg-room-active">
    <img
      class="bg-white w-10 h-10 rounded-full object-cover mr-4"
      src="https://latest-multichannel.qiscus.com/img/default_avatar.svg"
    />
    <div>Andi Wibowo</div>
  </div>
  <div class="h-full overflow-y-auto flex flex-col-reverse">
    <div class="px-16 flex justify-end">
      <div class="bg-green-200 w-fit max-w-md text-left mb-3 px-3 py-2 rounded">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        sequi magnam quaerat sit explicabo vitae dolorem placeat laudantium
        facere accusamus nulla cupiditate exercitationem fugiat in, assumenda
        facilis dolor veniam incidunt?
      </div>
    </div>
    <div class="px-20 flex justify-start">
      <div class="bg-blue-200 w-fit max-w-md text-left mb-3 px-3 py-2 rounded">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Accusantium
        sequi magnam quaerat sit explicabo vitae dolorem placeat laudantium
        facere accusamus nulla cupiditate exercitationem fugiat in, assumenda
        facilis dolor veniam incidunt?
      </div>
    </div>

    <div class="mt-2"></div>
  </div>
  <div class="px-4 py-3 flex items-center bg-[#f0f2f5]">
    <input
      placeholder="Tulis pesan"
      type="text"
      class="outline-none w-full bg-white rounded-md px-3 py-2"
    />
  </div>
</template>
