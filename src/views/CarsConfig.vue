<template>
  <main class="container-fluid">
    <article class="article">
      <div class="article__header">
        <h1 class="article__title">Cars List</h1>
        <button class="ml-auto button">Create New</button>
      </div>

      <div class="main-content">
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
                <b-form-input v-model="filter" placeholder="Search" />>
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
          <template slot="status" slot-scope="row">
            {{ row.value.status }}
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
      </div>
    </article>
  </main>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
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
      items: "cars/carsList",
      fields: "cars/tableHeader"
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
      getAll: "cars/getAll"
    })
  },

  created() {
    this.getAll();
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
