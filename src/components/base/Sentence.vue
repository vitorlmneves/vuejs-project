<template>
  <div v-if="!slider" class="sentence" :class="{ 'sentence--slider' : slider }">
    <span class="sentence__text" data-in="fadeInDown" data-out="fadeOutDown">
      {{ sentence.quote }} ~ {{ sentence.author }}
    </span>
  </div>
  <div v-else class="sentence" :class="{ 'sentence--slider' : slider }">
    <span class="sentence__text" data-in="fadeInDown" data-out="fadeOutDown">
      {{ sentence.quote }} ~ {{ sentence.author }}
    </span>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Sentence",

  props: {
    slider: {
      required: false,
      type: Boolean,
      default: false
    }
  },

  computed: {
    ...mapGetters({
      sentence: "sentences/sentence"
    })
  },

  methods: {
    ...mapActions({
      quoteOfDay: "sentences/getQuoteOfDay"
    })
  },

  created() {
    this.quoteOfDay()
  }
};
</script>
