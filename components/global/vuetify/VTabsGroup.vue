<template>
  <div
    class="h-14 bg-[#02774B] rounded-t-lg flex justify-between items-center px-2"
  >
    <p class="text-white">លទ្ធផលឆ្នោត</p>
    <p class="text-white">Count down</p>
    <p>
      <input
        type="date"
        id="start"
        name="trip-start"
        v-model="currentDate"
        class="bg-[#02774B] text-white focus:!border-none"
      />
    </p>
  </div>

  <v-card>
    <v-tabs v-model="tab" bg-color="white">
      <v-tab value="one">
        <v-btn icon></v-btn>
      </v-tab>
      <v-tab value="two">Item Two</v-tab>
      <v-tab value="three">Item Three</v-tab>
      <v-tab value="four">Item Three</v-tab>
      <v-tab value="five">Item Three</v-tab>
    </v-tabs>

    <v-card-text>
      <v-window v-model="tab">
        <v-window-item value="one"> One </v-window-item>

        <v-window-item value="two"> Two </v-window-item>

        <v-window-item value="three"> Three </v-window-item>

        <v-window-item value="four"> Three </v-window-item>

        <v-window-item value="five"> Three </v-window-item>
      </v-window>
    </v-card-text>
  </v-card>
</template>

<script setup lang="ts">
const tab = ref(null);

let currentDate = ref(new Date().toISOString().slice(0, 10));
</script>
