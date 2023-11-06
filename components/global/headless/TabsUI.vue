<template>
  <!-- <div class="h-12 bg-green-500"></div> -->

  <div
    class="h-12 bg-[#02774B] rounded-t-lg flex justify-between items-center px-2"
  >
    <p class="text-white">លទ្ធផលឆ្នោត</p>
    <span class="text-white">
      <p></p>
      <p>នាទីបិទ</p>
    </span>
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

  <div class="w-full sm:px-0">
    <TabGroup>
      <TabList class="flex space-x-1 p-2 gap-3">
        <Tab
          v-for="category in Object.keys(categories)"
          as="template"
          :key="category"
          v-slot="{ selected }"
        >
          <button
            :class="[
              'w-10 h-10 rounded-full bg-center ',
              'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2',
              selected
                ? 'bg-white shadow'
                : 'text-blue-100 hover:bg-white hover:text-white backdrop-blur-sm',
            ]"
            style="background-image: url('/images/lottery/hoso-lottery.png')"
          >
            <!-- {{ category }} -->
          </button>
        </Tab>
      </TabList>

      <TabPanels>
        <div class="h-12 bg-[#DBECDD] flex justify-between items-center px-5">
          <span>
            <a href="#" class="underline text-[#ED1C25] font-bold">XSMN</a>
            »
            <a href="#" class="underline text-[#ED1C25] font-bold"
              >XSMN thứ 2</a
            >
            »
            <a href="#" class="underline text-[#ED1C25] font-bold"
              >XSMN 5-7-2022
            </a>
          </span>
          <v-btn
            variant="tonal"
            color="#54BF6F"
            style="background-color: white"
            rounded="lg"
          >
            Print
          </v-btn>
        </div>
        <TabPanel
          v-for="(posts, idx) in Object.values(categories)"
          :key="idx"
          :class="[' bg-white p-1']"
        >
          <table class="min-w-full bg-white text-sm overflow-y-auto h-full">
            <thead class="bg-white">
              <tr>
                <th></th>
                <th
                  class="cursor-pointer whitespace-nowrap px-4 py-2 text-[#0505A7] underline font-bold"
                >
                  TP Hồ Chí Minh
                </th>
                <th
                  class="cursor-pointer whitespace-nowrap px-4 py-2 text-[#0505A7] underline font-bold"
                >
                  Đồng Tháp
                </th>
                <th
                  class="cursor-pointer whitespace-nowrap px-4 py-2 text-[#0505A7] underline font-bold"
                >
                  Cà Mau
                </th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-bold text-center">
                  G8
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-bold text-center">
                  AB
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-center font-bold">
                  123
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-center font-bold">
                  100
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-bold text-center">
                  G7
                </td>
                <td
                  class="border-none whitespace-nowrap px-4 py-2 font-bold text-center flex flex-col gap-4"
                >
                  <p>9921</p>
                  <p>5205</p>
                  <p>5366</p>
                </td>

                <td class="text-center font-bold">
                  <p class="mb-4">3212</p>
                  <p class="mb-4">3221</p>
                  <p class="mb-4">3221</p>
                </td>

                <td
                  class="border-none whitespace-nowrap px-4 py-2 font-bold text-center flex flex-col gap-4"
                >
                  <p>9921</p>
                  <p>5205</p>
                  <p>5366</p>
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-bold text-center">
                  G6
                </td>
                <td class="whitespace-nowrap px-4 py-2 font-bold text-center">
                  AB
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-center font-bold">
                  123
                </td>
                <td class="whitespace-nowrap px-4 py-2 text-center font-bold">
                  100
                </td>
              </tr>

              <tr>
                <td class="whitespace-nowrap px-4 py-2 font-bold text-center">
                  G5
                </td>
                <td
                  class="border-none whitespace-nowrap px-4 py-2 font-bold text-center flex flex-col gap-4"
                >
                  <p>9921</p>
                  <p>5205</p>
                  <p>5366</p>
                </td>

                <td class="text-center font-bold">
                  <p class="mb-4">3212</p>
                  <p class="mb-4">3221</p>
                  <p class="mb-4">3221</p>
                </td>

                <td
                  class="border-none whitespace-nowrap px-4 py-2 font-bold text-center flex flex-col gap-4"
                >
                  <p>9921</p>
                  <p>5205</p>
                  <p>5366</p>
                </td>
              </tr>
            </tbody>
          </table>
        </TabPanel>
      </TabPanels>
    </TabGroup>
  </div>
</template>

<script setup lang="ts">
import { TabGroup, TabList, Tab, TabPanels, TabPanel } from "@headlessui/vue";
let currentDate = ref(new Date().toISOString().slice(0, 10));

const categories = ref({
  Recent: [
    {
      id: 1,
      title: "Does drinking coffee make you smarter?",
      date: "5h ago",
      commentCount: 5,
      shareCount: 2,
    },
    {
      id: 2,
      title: "So you've bought coffee... now what?",
      date: "2h ago",
      commentCount: 3,
      shareCount: 2,
    },
  ],
  Popular: [
    {
      id: 1,
      title: "Is tech making coffee better or worse?",
      date: "Jan 7",
      commentCount: 29,
      shareCount: 16,
    },
    {
      id: 2,
      title: "The most innovative things happening in coffee",
      date: "Mar 19",
      commentCount: 24,
      shareCount: 12,
    },
  ],
  Trending: [
    {
      id: 1,
      title: "Ask Me Anything: 10 answers to your questions about coffee",
      date: "2d ago",
      commentCount: 9,
      shareCount: 5,
    },
    {
      id: 2,
      title: "The worst advice we've ever heard about coffee",
      date: "4d ago",
      commentCount: 1,
      shareCount: 2,
    },
  ],
});
</script>

<style scoped>
table {
  color: black;
  background: white;
  border: 0.5px solid #c7eeef;
  font-size: 12pt;
  border-collapse: collapse;
}

table th,
table td {
  padding: 0.5em;
  border: 0.5px solid #c7eeef;
}
</style>
