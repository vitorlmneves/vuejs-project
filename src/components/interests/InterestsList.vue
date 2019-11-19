<template>
  <div class="interests-list">
    <section v-for="item in interestsList" :key="item.title" class="section">
      <h1 class="mb-8 mt-4 section__title">
        {{ item.title }}
      </h1>
      <div class="d-flex flex-wrap">
        <div
          v-for="(item, index) in item.interests"
          :key="index"
          class="col-12 col-md-4 col-lg-3 interests-list__items"
        >
          <div class="interests-list__item">
            <input
              class="interests-list__input"
              type="checkbox"
              :id="`${item.id}`"
              :checked="selected.includes(item.id)"
              @change="submitUserInterest($event)"
            >
            <label :for="`${item.id}`">{{ item.name }}</label>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "InterestsList",

  props: {
    interestsList: Array
  },

  computed: {
    ...mapGetters({
      selected: "interests/interestIdByUsersId"
    })
  },

  methods: {
    ...mapActions({
      getInterestsByUserId: "interests/getInterestsByUserId"
    }),
    submitUserInterest(e) {
      let _data = {
        "userId": this.$store.state.auth.currentUser.id,
        "interestId": Number(e.target.id),
        "selected": e.target.checked
      }
      this.$store.dispatch("user/updateUserInterest", _data);
    }
  },

  created() {
    this.getInterestsByUserId(this.$store.state.auth.currentUser.id);
  }
};
</script>
