<template>
  <article class="article">
    <div class="article__header article__header--configurations">
      <h1 class="article__title article__title--configurations">Podcasts List</h1>
      <button class="ml-auto button">Create New</button>
    </div>
    <!-- User Interface controls -->
    <b-row class="justify-content-between">
      <b-col md="3" class="mb-3">
        <b-form-group label-cols-sm="3" label="Show" class="mb-0">
          <b-form-select
            class="nr-results"
            v-model="perPage"
            :options="pageOptions"
          />
        </b-form-group>
      </b-col>

      <b-col md="3" class="mb-3">
        <b-form-group label-cols-sm="3" class="mb-0">
          <b-input-group>
            <b-form-input v-model="filter" placeholder="Search" />
            <b-input-group-append>
              <b-button :disabled="!filter" @click="filter = ''">
                Clear
              </b-button>
            </b-input-group-append>
          </b-input-group>
        </b-form-group>
      </b-col>
    </b-row>

    <!-- Main table element -->
    <b-table
      show-empty
      stacked="md"
      :items="items"
      :fields="fields"
      :current-page="currentPage"
      :per-page="perPage"
      :filter="filter"
      :sort-by.sync="sortBy"
      @filtered="onFiltered"
    >
      <template slot="name" slot-scope="row">
        {{ row.value }}
      </template>

      <template slot="path" slot-scope="row">
        <audio controls>
          <source
            :src="`https://bpc.bee-eng.pt${row.value}`"
            type="audio/ogg"
          />
          <source
            :src="`https://bpc.bee-eng.pt${row.value}`"
            type="audio/mpeg"
          />
          Your browser does not support the audio element.
        </audio>
      </template>

      <template slot="actions" slot-scope="row">
        <i class="fas fa-pen"></i>
        <i class="fas fa-trash"></i>
      </template>

      <template slot="row-details" slot-scope="row">
        <b-card>
          <ul>
            <li v-for="(value, key) in row.item" :key="key">
              {{ key }}: {{ value }}
            </li>
          </ul>
        </b-card>
      </template>
    </b-table>

    <b-row>
      <b-col md="6" class="my-1 offset-md-6">
        <b-pagination
          v-model="currentPage"
          :total-rows="totalRows"
          :per-page="perPage"
          class="my-0"
        />
      </b-col>
    </b-row>
  </article>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "ConfigPodcast",

  data() {
    return {
      totalRows: 1,
      currentPage: 1,
      perPage: 5,
      pageOptions: [5, 10, 15],
      sortBy: null,
      sortDesc: false,
      sortDirection: "asc",
      filter: null
    };
  },

  computed: {
    sortOptions() {
      // Create an options list from our fields
      return this.fields
        .filter(f => f.sortable)
        .map(f => {
          return {
            text: f.label,
            value: f.key
          };
        });
    },
    ...mapGetters({
      items: "podcast/audioList",
      fields: "podcast/tableHeader"
    })
  },

  mounted() {
    // Set the initial number of items
    this.totalRows = this.items.length;
  },

  methods: {
    onFiltered(filteredItems) {
      // Trigger pagination to update the number of buttons/pages due to filtering
      this.totalRows = filteredItems.length;
      this.currentPage = 1;
    },
    ...mapActions({
      getAllPodcasts: "podcast/getAll"
    })
  },

  created() {
    this.getAllPodcasts();
  }
};
</script>

<style lang="scss" scoped>
.main-content {
  padding: 0 15px;
}

.nr-results {
  width: 80px;
}

.pagination {
  justify-content: flex-end;
}
</style>
