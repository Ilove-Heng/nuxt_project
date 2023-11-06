<template>
  <v-sheet class="!bg-neutral-100 !h-16 !flex !justify-center !items-center">
    <v-slide-group v-model="model" selected-class="bg-grey" show-arrows>
      <v-slide-group-item
        v-for="type in typePost"
        :key="type"
        v-slot="{ isSelected, toggle, selectedClass }"
      >
        <v-card
          :class="['ma-2', selectedClass]"
          height="50"
          width="100"
          @click="toggle"
        >
          <div class="d-flex fill-height align-center justify-center p-2">
            <v-scale-transition>
              <v-img :src="'/images/lottery/' + type" />
              <Icon name="mdi-close-circle-outline" v-if="isSelected" />
            </v-scale-transition>
          </div>
        </v-card>
      </v-slide-group-item>
    </v-slide-group>
  </v-sheet>
</template>
<script setup lang="ts">
const model = ref(null);

// const props = defineProps<{
//   typePost: string[];
// }>();

const typePost = [
  "hoso-lottery.png",
  "lmhsb-lottery.png",
  "khmer_logo.png",
  "thinhnam-lottery.png",
  "lucky-dragon-lotto.png",
];
</script>
