<template>
  <div>
    <div class="flex justify-between mb-8 mt-4">
      <h1 class="lg:text-3xl font-semibold">Offers</h1>
      <NuxtLink to="/offers/create">
        <v-btn color="blue" prepend-icon="mdi-plus">Create</v-btn>
      </NuxtLink>
    </div>
    <div class="searchBar w-[70%] my-8 flex items-center">
      <v-text-field
        :loading="loading"
        v-model="offers"
        append-inner-icon="mdi-magnify"
        density="compact"
        label="Search templates"
        variant="solo"
        hide-details
        single-line
        @click:append-inner="onClick"
      ></v-text-field>
      <div class="mx-6">
        <v-btn color="success" variant="elevated">Search</v-btn>
      </div>
    </div>

    <div class="data-table-container border-2 border-black border-solid">
      <v-data-table-server
        style="box-shadow: grey 0px 0px 18px -8px; border-radius: 5px"
        v-model:items-per-page="itemsPerPage"
        :headers="headers"
        :items="serverItems"
        :items-length="totalItems"
        :loading="loading"
        item-value="id"
        v-model="selected"
        :search="search"
        return-object
        @update:options="loadItems"
        show-select
      >
        <template v-slot:header.offers="{ column }">
          <span class="font-bold">
            {{ column.title.toUpperCase() }}
          </span>
        </template>

        <template v-slot:item.image="{ item }">
          <v-img
            :src="item.image"
            :alt="item.name"
            style="width: 3vw; max-width: 3rem; padding: 1rem 0"
            contain
          ></v-img>
        </template>
      </v-data-table-server>
    </div>

    <div>
      {{ selected }}
    </div>
  </div>
</template>

<script>
const desserts = [
  // Updated with image URLs
  {
    id: "1",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
  // Updated with image URLs
  {
    id: "2",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
  {
    id: "3",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
  {
    id: "7",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
  {
    id: "4",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
  {
    id: "5",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
  {
    id: "6",
    offers: "Offer $7",
    enabled: "true",
    type: "Generic",
    operations: "3",
    image: "https://img.pikbest.com/origin/09/23/73/86XpIkbEsTVRE.png!w700wp",
  },
];

const FetchAPI = {
  async fetch({ page, itemsPerPage, sortBy, search }) {
    console.log("This is Search" + search);
    return new Promise((resolve) => {
      setTimeout(() => {
        const start = (page - 1) * itemsPerPage;
        const end = start + itemsPerPage;
        const items = desserts.slice().filter((item) => {
          if (
            search.offers &&
            !item.offers.toLowerCase().includes(search.offers.toLowerCase())
          ) {
            return false;
          }

          return true;
        });

        const paginated = items.slice(start, end);

        resolve({ items: paginated, total: items.length });
      }, 500);
    });
  },
};

export default {
  data: () => ({
    itemsPerPage: 5,
    headers: [
      {
        title: "",
        key: "select",
        align: "center",
        sortable: false,
      },
      {
        title: "ID",
        key: "id",
        align: "left",
        sortable: false,
      },
      {
        title: "Offers",
        align: "start",
        sortable: false,
        key: "offers",
      },
      {
        title: "Icon",
        key: "image",
        align: "center",
        sortable: false,
      },
      { title: "Enabled", key: "enabled", align: "end" },
      { title: "Type", key: "type", align: "end" },
      { title: "Operations", key: "oprations", align: "end" },
    ],
    offers: "",
    search: "",
    serverItems: [],
    loading: true,
    totalItems: 0,
    selectAll: false,
    selected: [],
  }),
  methods: {
    loadItems({ page, itemsPerPage, sortBy }) {
      this.loading = true;
      FetchAPI.fetch({
        page,
        itemsPerPage,
        sortBy,
        search: { offers: this.offers },
      }).then(({ items, total }) => {
        this.serverItems = items;
        this.totalItems = total;
        this.loading = false;
      });
    },

    toggleSelectAll() {
      if (this.selectAll) {
        this.selectedItems = [...this.serverItems];
      } else {
        this.selectedItems = [];
      }
    },
  },
  watch: {
    offers() {
      this.search = String(Date.now());
    },
  },
};
</script>
<style>
.offertable {
  /* Set a fixed height or max-height */
  max-height: 600px; /* Adjust based on your layout */
  overflow-y: auto; /* Enable vertical scrolling */
}

.data-table-container {
  overflow-x: auto; /* Enable horizontal scrolling if necessary */
}
</style>
