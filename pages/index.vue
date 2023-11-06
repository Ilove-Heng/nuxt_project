<template>
  <v-no-ssr>
    <v-app id="inspire">
      <v-navigation-drawer v-model="drawer" :width="100" color="#1A2E47">
        <div class="flex justify-center items-center my-4">
          <Icon name="mdi-menu" size="50" />
        </div>
        <v-divider></v-divider>

        <v-list lines="two">
          <v-list-item v-for="[icon, text] in links" :key="icon" link>
            <template v-slot:prepend>
              <Icon :name="icon" />
            </template>
            <v-list-item-title v-text="text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>

      <v-app-bar prominent :height="80">
        <v-app-bar-nav-icon class="xl:!hidden" @click.stop="drawer = !drawer">
          <template #default>
            <Icon name="mdi-menu" size="32" />
          </template>
        </v-app-bar-nav-icon>
        <v-app-bar-title>
          <div class="flex gap-2">
            <v-avatar size="50">
              <v-img
                src="https://cdn.vuetifyjs.com/images/john.jpg"
                alt="John"
              ></v-img>
            </v-avatar>
            <div class="">
              <p class="text-md">Jaila Malyka</p>
              <p class="text-sm text-red-500 font-bold">$10000</p>
            </div>
          </div>
        </v-app-bar-title>
        <v-spacer></v-spacer>

        <v-list class="!flex !p-0 h-full" lines="two">
          <v-list-item
            v-for="[icon, text] in links"
            :key="icon"
            link
            width="100"
          >
            <template v-slot:prepend>
              <Icon :name="icon" size="1.5rem" />
            </template>
            <v-list-item-title v-text="text"></v-list-item-title>
          </v-list-item>
        </v-list>
      </v-app-bar>

      <v-main class="!bg-neutral-100">
        <v-container class="py-2 px-2" fluid>
          <div
            class="grid grid-cols-1 gap-2 lg:grid-cols-3 lg:gap-2 h-[calc(100vh-100px)]"
          >
            <div class="h-full rounded-lg">
              <div
                class="grid gap-2 grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 h-full"
              >
                <div class="h-1/3">
                  <div
                    class="h-14 rounded-t-lg bg-[#02774B] mb-2 items-center flex pl-1"
                  >
                    <div class="flex items-center gap-2 w-[45%]">
                      <p class="bg-white w-20 h-10 rounded-md p-1">
                        <v-img
                          src="/images/lottery/hoso-lottery.png"
                          alt=""
                          aspect-ratio="4/3"
                        />
                      </p>
                      <p class="text-white">( ព្រឹក )</p>
                    </div>
                    <p class="text-white">ចាក់ថ្ងៃនេះ</p>
                  </div>

                  <table class="w-full">
                    <thead class="w-full h-full bg-[#DBECDD] rounded-md">
                      <tr class="h-12 flex justify-between items-center">
                        <th class="text-center w-1/4">#វិក្កយបត្រ</th>
                        <th class="text-center w-1/4">ទឹក</th>
                        <th class="text-center w-1/4">លុយ</th>
                        <th class="text-center w-1/4">ឈ្នះ/ចាញ់</th>
                      </tr>
                    </thead>
                    <!-- Remove the nasty inline CSS fixed height on production and replace it with a CSS class — this is just for demonstration purposes! -->
                    <tbody
                      class="mt-2 bg-[#FBFBFB] flex flex-col items-center justify-between overflow-y-scroll w-full"
                      style="height: 18vh"
                    >
                      <tr
                        class="flex w-full mb-4 mt-2 items-center justify-center text-sm"
                        v-for="i in 15"
                      >
                        <td class="text-center w-1/4">#121221</td>
                        <td class="text-center w-1/4">ABC</td>
                        <td class="text-center w-1/4">123</td>
                        <td class="text-center w-1/4">1000</td>
                      </tr>
                    </tbody>
                  </table>

                  <div
                    class="h-14 bg-white rounded-b-lg flex items-center justify-around"
                  >
                    <p>សរុបទឹកប្រាក់</p>
                    <p></p>
                    <p>00.00 ៛</p>
                    <p>00.00 ៛</p>
                  </div>
                  <div class="rounded-lg h-full mt-2 w-full">
                    <HeadlessTabsUI />
                    <!-- <VuetifyVTabsGroup /> -->
                  </div>
                </div>
                <!-- <div class="rounded-lg bg-pink-200">bubu</div> -->
              </div>
            </div>
            <div class="h-full rounded-lg lg:col-span-2">
              <div
                class="grid grid-cols-1 gap-1 lg:grid-cols-2 lg:gap-2 form-data"
              >
                <div
                  class="h-16 rounded-lg w-full flex items-center justify-between gap-1"
                >
                  <HeadlessSelectUI class="w-1/2" />
                  <HeadlessListBoxUI class="w-1/2" />
                </div>
                <div class="h-16 rounded-lg">
                  <VuetifyVSlideGroup />
                </div>
                <div id="postSery" class="flex items-center !justify-start">
                  <v-app-bar-title>
                    <v-btn-toggle
                      id="bet-post"
                      v-model="toggle_multiple"
                      color="#e5f1ed"
                      selected-class="!text-[#02774B]"
                      class="!h-12 flex items-center justify-center"
                      multiple
                      mandatory
                    >
                      <v-btn
                        v-for="bet in betPost"
                        rounded="lg"
                        :value="bet"
                        elevation="2"
                        class="ml-2 my-2"
                      >
                        <p class="font-battambang">
                          {{ bet }}
                        </p>
                      </v-btn>
                    </v-btn-toggle>
                  </v-app-bar-title>
                </div>

                <div
                  id="betSery"
                  class="h-16 rounded-lg flex items-center gap-1 justify-center"
                >
                  <v-app-bar-title>
                    <v-sheet class="mx-auto" max-width="600" color="#f5f5f5">
                      <v-slide-group class="" selected-class="bg-success">
                        <v-slide-group-item
                          v-slot="{ isSelected, toggle, selectedClass }"
                        >
                          <v-btn-toggle
                            :color="isSelected ? '#e5f1ed' : undefined"
                            selected-class="!text-[#02774B]"
                            v-model="toggleBetType"
                            mandatory
                            @click="toggle"
                          >
                            <v-btn
                              v-for="types in betType"
                              rounded="lg"
                              :value="types.id"
                              elevation="2"
                              class="ml-1 my-1"
                            >
                              <p class="text-[14px] font-battambang">
                                {{ types.bet }}
                              </p>
                            </v-btn>
                          </v-btn-toggle>
                        </v-slide-group-item>
                      </v-slide-group>
                    </v-sheet>
                  </v-app-bar-title>
                  <!-- {{ toggleBetType }} bubu -->
                </div>
                <div
                  class="h-16 rounded-lg flex items-center lg:justify-start justify-center"
                >
                  <input
                    @keypress="filterInput($event, 3)"
                    placeholder="លេខ"
                    type="text"
                    ref="numberElement"
                    class="w-[25%] rounded-lg text-center focus:ring-green-500 border border-[#CBD5E1]"
                  />

                  <!-- <Icon name="pajamas:long-arrow" class="mx-1" />

                  <input
                    @keypress="filterInput($event, 3)"
                    placeholder="លេខ"
                    type="text"
                    ref="moneyElement"
                    class="w-[25%] rounded-lg text-center focus:ring-green-500 border border-[#CBD5E1]"
                  /> -->

                  <Icon name="entypo:dots-two-vertical" />
                  <input
                    @keypress="filterInput($event, 15)"
                    placeholder="លុយ"
                    type="text"
                    class="w-[25%] rounded-lg text-center focus:ring-green-500 border border-[#CBD5E1]"
                  />

                  <div
                    class="inline-flex rounded-md shadow-sm ml-2"
                    role="group"
                  >
                    <button
                      type="button"
                      class="!border-[#AED9CB] px-4 py-2 text-sm font-medium text-gray-900 border rounded-l-md hover:text-black"
                      :class="{ '!bg-[#E5F1ED]': activeCurrency === 'khr' }"
                      @click="toggleCurrency('khr')"
                    >
                      KHR
                    </button>
                    <button
                      type="button"
                      class="border-[#AED9CB] px-4 py-2 text-sm font-medium text-gray-900 border rounded-r-md hover:text-black"
                      :class="{ '!bg-[#E5F1ED]': activeCurrency === 'usd' }"
                      @click="toggleCurrency('usd')"
                    >
                      USD
                    </button>
                  </div>

                  <v-btn
                    variant="tonal"
                    class="ml-1 !border-[#83C3AE] !border font-battambang"
                    color="#02774B"
                    ref="btnEnterElement"
                  >
                    បញ្ចូល
                  </v-btn>
                </div>
                <div
                  class="h-16 rounded-lg bg-green-200 flex justify-center items-center"
                >
                  <v-sheet
                    class="!bg-neutral-100 !h-16 !flex !justify-center !items-center"
                    width="100%"
                  >
                    <v-slide-group
                      selected-class="bg-success"
                      v-model="valueCurrencyData"
                    >
                      <v-slide-group-item
                        v-for="(currency, idx) in toggleCurrencyData[
                          activeCurrency.toLowerCase()
                        ]"
                        :key="currency.value"
                        v-slot="{ isSelected, toggle, selectedClass }"
                      >
                        <v-btn
                          icon
                          color="#E1E1E1"
                          :value="currency"
                          selected-class="!text-[#02774B]"
                          class="ma-1 border text-sm"
                          size="40"
                          mandatory
                          @click="toggle"
                        >
                          {{ currency.price }}
                        </v-btn>
                      </v-slide-group-item>
                    </v-slide-group>
                  </v-sheet>
                  <!-- {{ valueCurrencyData }} lala -->
                </div>
              </div>
              <div class="h-[70%] mt-2 table-data">
                <div>
                  <div class="bet-table overflow-x-auto">
                    <table class="min-w-full">
                      <thead class="font-battambang">
                        <tr>
                          <th
                            class="flex items-center border-none justify-center gap-2"
                          >
                            <!-- <div class="p-3 bg-blue-400 rounded-full"></div> -->

                            <img
                              src="images/lottery/thai-lottery.png"
                              alt=""
                              class=""
                            />
                            ព្រឹក 09:30am
                          </th>
                          <th class="">ប៉ុស្តិ៍</th>
                          <th class="">លេខ</th>
                          <th class="">លុយ</th>
                          <th class="">សរុប</th>
                          <th class="">សកម្មភាព</th>
                        </tr>
                      </thead>

                      <tbody>
                        <tr>
                          <td></td>
                          <td>AB</td>
                          <td class="">123</td>
                          <td class="">100</td>
                          <td class="">200</td>
                          <td>
                            <v-btn variant="plain" icon size="32">
                              <Icon name="iconamoon:edit-thin" size="24" />
                            </v-btn>
                            <v-btn variant="plain" icon size="32" color="error">
                              <Icon name="iconoir:cancel" size="24" />
                            </v-btn>
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td
                            colspan="3"
                            class="text-right pr-12 font-battambang"
                          >
                            សរុប
                          </td>
                          <td>0</td>
                          <td>0</td>
                          <td class="font-battambang">
                            <button
                              class="px-2 py-1 bg-[#ECECEC] shadow-inner rounded-lg mr-1 text-[#A5A5A5] border border-gray-400"
                            >
                              លុប
                              <Icon name="typcn:delete" size="24" />
                            </button>
                            <button
                              class="px-2 py-1 bg-[#02774B] shadow-inner rounded-lg text-white border border-[#83C3AE]"
                            >
                              ចាក់
                              <Icon name="material-symbols:done" size="24" />
                            </button>
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>

                  <div class="rounded-b-lg border-t border-gray-200 px-4 py-2">
                    <ol class="flex justify-end gap-1 text-xs font-medium">
                      <li>
                        <a
                          href="#"
                          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                          <span class="sr-only">Prev Page</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                          1
                        </a>
                      </li>

                      <li
                        class="block h-8 w-8 rounded border-blue-600 bg-blue-600 text-center leading-8 text-white"
                      >
                        2
                      </li>

                      <li>
                        <a
                          href="#"
                          class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                          3
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          class="block h-8 w-8 rounded border border-gray-100 bg-white text-center leading-8 text-gray-900"
                        >
                          4
                        </a>
                      </li>

                      <li>
                        <a
                          href="#"
                          class="inline-flex h-8 w-8 items-center justify-center rounded border border-gray-100 bg-white text-gray-900 rtl:rotate-180"
                        >
                          <span class="sr-only">Next Page</span>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-3 w-3"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clip-rule="evenodd"
                            />
                          </svg>
                        </a>
                      </li>
                    </ol>
                  </div>
                </div>
                <!-- <div class="mt-12">
                  {{ filtersList }}
                  <input v-model="inputVal" class="border" />

                  <button @click="addValueToFilterList(inputVal)">+</button>
                </div> -->
              </div>
            </div>
          </div>
        </v-container>
      </v-main>
    </v-app>
  </v-no-ssr>
</template>

<script setup lang="ts">
import { Icon } from "#components";
import { useFiltersStore } from "~/stores/filters";
import { storeToRefs } from "pinia";

const toggle_multiple = ref(["a", "b", "c"]);
const toggleBetType = ref([0]);

const inputVal = ref("");
const btnEnterElement = ref<HTMLElement | null>(null);
const numberElement = ref<HTMLElement | null>(null);
const moneyElement = ref<HTMLElement | null>(null);

const filtersStore = useFiltersStore();
const { addValueToFilterList } = filtersStore;
const { filtersList } = storeToRefs(filtersStore);

const activeCurrency = ref<string>("usd");
const valueCurrencyData = ref([]);

const myIcon = h(Icon, { name: "uil:twitter" });

const toggleCurrencyData = ref<any>({
  usd: [
    {
      id: 1,
      price: "1$",
      value: 1000,
    },
    {
      id: 2,
      price: "2$",
      value: 1000,
    },
    {
      id: 3,
      price: "3$",
      value: 1000,
    },
    {
      id: 4,
      price: "4$",
      value: 1000,
    },
    {
      id: 5,
      price: "5$",
      value: 1000,
    },
    {
      id: 6,
      price: "6$",
      value: 1000,
    },
    {
      id: 7,
      price: "7$",
      value: 1000,
    },
    {
      id: 8,
      price: "8$",
      value: 1000,
    },
    {
      id: 9,
      price: "9$",
      value: 1000,
    },
    {
      id: 10,
      price: "10$",
      value: 1000,
    },
    {
      id: 15,
      price: "15$",
      value: 1000,
    },
  ],
  khr: [
    {
      id: 1,
      price: "១រយ",
      value: 1000,
    },
    {
      id: 2,
      price: "៥រយ",
      value: 1000,
    },
    {
      id: 3,
      price: "១ពាន់",
      value: 1000,
    },
    {
      id: 4,
      price: "២ពាន់",
      value: 1000,
    },
    {
      id: 5,
      price: "៥ពាន់",
      value: 1000,
    },
    {
      id: 6,
      price: "១ម៉ឺន",
      value: 1000,
    },
    {
      id: 7,
      price: "២ម៉ឺន",
      value: 1000,
    },
    {
      id: 8,
      price: "៥ម៉ឺន",
      value: 1000,
    },
    {
      id: 9,
      price: "៥ម៉ឺន",
      value: 1000,
    },
    {
      id: 10,
      price: "១០ម៉ឺន",
      value: 1000,
    },
    {
      id: 11,
      price: "១៥ម៉ឺន",
      value: 1000,
    },
  ],
});

function toggleCurrency(currency: string) {
  if (activeCurrency.value !== currency) {
    activeCurrency.value = currency;
  }
}

function filterInput(evt: KeyboardEvent, max: number): boolean | void {
  evt = evt || window.event;
  let char = (evt as KeyboardEvent).key.toString();

  //todo  ...Check if the key pressed is a number
  if (!/^[0-9]$/.test(char)) {
    evt.preventDefault();

    //FIXME - need focus on to bet number
    // if ((type = "moneyState")) {
    //   numberElement.value?.focus();
    // } else if ((type = "numberState")) {
    //   moneyElement.value?.focus();
    // } else if ((type = "enterState")) {
    //   btnEnterElement.value?.focus();
    // }
  } else {
    let currentValue = (evt.target as HTMLInputElement).value;

    //todo  ...Check if the current value already has 3 digits
    if (currentValue.length >= max) {
      evt.preventDefault();
    } else {
      return true;
    }
  }
}

const links = [
  ["mdi-inbox-arrow-down", "Baccarat"],
  ["mdi-send", "Roulate"],
  ["mdi-delete", "Keno"],
  ["mdi-alert-octagon", "Cockfight"],
  ["fluent:lottery-20-regular", "Lottery"],
];

const betPost = [
  "a",
  "b",
  "c",
  "d",
  "h",
  "n",
  "o",
  "f",
  "k",
  "p",
  "Lo4P",
  "Lo5P",
  // "Lo5P",
  // "Lo6P",
  // "Lo7P",
];

const desserts = [
  {
    name: "#2121",
    calories: 159,
  },
  {
    name: "#2121",
    calories: 237,
  },
  {
    name: "#2121",
    calories: 262,
  },
  {
    name: "#2121",
    calories: 305,
  },
  {
    name: "#2121",
    calories: 356,
  },
  {
    name: "#2121",
    calories: 375,
  },
  {
    name: "#2121",
    calories: 392,
  },
  {
    name: "#2121",
    calories: 408,
  },
  {
    name: "#2121",
    calories: 452,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
  {
    name: "#2121",
    calories: 518,
  },
];

const betType = [
  {
    id: 1,
    bet: "ចាក់ធម្មតា",
  },
  {
    id: 2,
    bet: "ចាក់គុណ",
  },
  {
    id: 3,
    bet: "ចាក់អូស",
  },
  {
    id: 4,
    bet: "ចាក់អូសគូ",
  },
  {
    id: 5,
    bet: "ចាក់អូសសេស",
  },
  {
    id: 6,
    bet: "ចាក់ពិសេស",
  },
];

const drawer = ref<boolean | null>(null);

onMounted(() => {
  numberElement.value?.focus();
});
</script>

<style scoped>
.v-list-item.v-list-item--link.v-theme--light.v-list-item--density-default.v-list-item--two-line.v-list-item--variant-text {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
}
.v-input__details {
  visibility: hidden;
}

.active {
  background-color: #4fd1c5;
  color: white;
}

@media (min-width: 1024px) {
  #postSery {
    justify-content: flex-start !important;
  }
  #betSery {
    justify-content: flex-end;
  }
}

.bet-table table {
  color: black;
  background: white;
  border: 1px solid #e2e2e2;
  font-size: 12pt;
  border-collapse: collapse;
}

.bet-table table th,
.bet-table table td {
  padding: 0.4em;
  border: 1px solid #e2e2e2;
  text-align: center;
}
</style>

<style>
#bet-post .v-btn--size-default {
  min-width: 0;
  padding: 0.5rem !important;
  width: 2.5rem !important;
  height: 2.5rem !important;
  font-size: 11px !important;
}
</style>
