<template>
  <Listbox as="div" v-model="selected" class="h-full flex items-center">
    <div class="relative w-full">
      <ListboxButton
        class="h-12 relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm"
      >
        <span class="flex items-center">
          <span class="ml-3 block truncate">{{ selected.name }}</span>
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
          class="font-battambang absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm"
        >
          <ListboxOption
            as="template"
            v-for="sery in seryDate"
            :key="sery.id"
            :value="sery"
            v-slot="{ active, selected }"
          >
            <li
              :class="[
                active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                'relative cursor-default select-none py-2 pl-3 pr-9 ',
              ]"
            >
              <div class="flex items-center">
                <span
                  :class="[
                    selected ? 'font-semibold' : 'font-normal',
                    'ml-3 block truncate font-battambang',
                  ]"
                >
                  {{ sery.name }}
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
const seryDate = [
  {
    id: 1,
    name: "ព្រលឹម",
  },
  {
    id: 2,
    name: "ថ្ញៃ",
  },
  {
    id: 3,
    name: "ល្ញាច",
  },
  {
    id: 4,
    name: "យប់",
  },
];
const selected = ref(seryDate[3]);
</script>

<style scoped></style>
