<template>
  <Listbox as="div" v-model="selectedPerson" class="h-full flex items-center">
    <div class="relative w-full">
      <ListboxButton
        class="relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="flex items-center">
          <img :src="selectedPerson.avatar" class="h-8 flex-shrink-0" />
          <span class="ml-3 block truncate">{{ selectedPerson.name }}</span>
        </span>
        <span
          class="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2"
        >
          <IconCSS name="carbon:chevron-sort" />
        </span>
      </ListboxButton>

      <Transition
        leave-active-class="transition ease-in duration-100"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <ListboxOptions
          class="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="person in people"
            :key="person.id"
            :value="person"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9',
              ]"
            >
              <div class="flex items-center">
                <img :src="person.avatar" alt="" class="w-8 flex-shrink-0" />
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate',
                  ]"
                >
                  {{ person.name }}
                </span>
              </div>

              <span
                v-if="selected"
                :class="[
                  active ? 'text-white' : 'text-indigo-600',
                  'absolute inset-y-0 right-0 flex items-center pr-4',
                ]"
              >
                <IconCSS name="ic:sharp-check" />
              </span>
            </li>
          </ListboxOption>
        </ListboxOptions>
      </Transition>
    </div>
  </Listbox>
</template>

<script setup lang="ts">
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/vue";

const people = [
  {
    id: 1,
    name: "ហូសូមីញង៉ុក",
    avatar: "images/lottery/hoso-lottery.png",
    hoso: [
      {
        id: 1,
        date: "ថ្ញៃ",
        value: "noon",
      },
      {
        id: 2,
        date: "រសៀល",
        value: "afternoon",
      },
      {
        id: 3,
        date: "ល្ញាច",
        value: "evening",
      },
      {
        id: 4,
        date: "យប់",
        value: "night",
      },
    ],
  },
  {
    id: 2,
    name: "ឆ្នោតថៃ",
    avatar: "images/lottery/thai-lottery.png",
    thai: [
      {
        id: 1,
        date: "ថ្ញៃ",
        value: "noon",
      },
      {
        id: 2,
        date: "រសៀល",
        value: "afternoon",
      },
      {
        id: 3,
        date: "ល្ញាច",
        value: "evening",
      },
    ],
  },
  {
    id: 3,
    name: "PRNG",
    avatar: "images/lottery/prng-lottery.png",
  },
  {
    id: 4,
    name: "Khmer",
    avatar: "images/lottery/khmer_logo.png",
  },
  {
    id: 5,
    name: "លាភមហាសម្បត្តិឡូតូ",
    avatar: "images/lottery/lmhsb-lottery.png",
  },
  {
    id: 6,
    name: "នាគនាំសំណាង",
    avatar: "images/lottery/lucky-dragon-lotto.png",
  },
  {
    id: 7,
    name: "Thinhnam",
    avatar: "images/lottery/thinhnam-lottery.png",
  },
];
const selectedPerson = ref(people[3]);

console.log("selected", selectedPerson.value);
</script>

<style scoped></style>
