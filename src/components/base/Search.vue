<template>
  <div class="d-inline-flex ml-auto search">
    <input
      type="search"
      class="search__input"
      placeholder="Search..."
      aria-label="Search"
      :value="searchTerm"
      @input="$emit('update:searchTerm', $event.target.value)"
    />
    <button class="search__button">
      <i class="fas fa-search"></i>
    </button>
  </div>
</template>

<script>
export default {
  name: "Search",
  props: {
    searchTerm: {
      required: true,
      type: String,
      default: null
    }
  }
};
</script>
