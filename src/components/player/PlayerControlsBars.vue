<template>
  <div class="player-control">
    <div class="player-control__wrapper">
      <div class="player-control__left">
        <button class="player-control__icons" @click="toggleMute">
          <template v-if="!this.muted">
            <i class="icon icon__sound-on" v-if="this.volume >= 0.5"></i>
            <i class="icon icon__sound-on" v-else-if="this.volume > 0"></i>
            <i class="icon icon__sound-off" v-else></i>
          </template>
          <i class="icon icon__sound-off" v-show="this.muted"></i>
        </button>
      </div>

      <!-- <v-slider v-model="volume" @input="updateVolume(volume)" max="1" step="0.1"></v-slider> -->
      <!-- {{ this.volume * 100 + '%' }} -->

      <div class="player-control__middle">
        <button class="player-control__icons" @click="skipTrack('prev')">
          <svg
            class="w-8 h-8"
            style="height:1.4rem;"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M4 5h3v10H4V5zm12 0v10l-9-5 9-5z"></path>
          </svg>
        </button>
        <button class="player-control__icons" @click="stopTrack">
          <i class="icon icon__stop"></i>
        </button>
        <button class="player-control__icons" @click="playTrack()">
          <i class="icon icon__play"></i>
        </button>
        <button class="player-control__icons" @click="pauseTrack">
          <i class="icon icon__pause"></i>
        </button>
        <button class="player-control__icons" @click="skipTrack('next')">
          <svg
            style="height:1.4rem"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path d="M13 5h3v10h-3V5zM4 5l9 5-9 5V5z"></path>
          </svg>
        </button>
      </div>

      <div class="player-control__right">
        <button class="player-control__icons" @click="toggleLoop">
          <svg
            style="height:1.4rem"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            v-if="this.loop"
          >
            <path
              d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"
            >
            </path>
          </svg>
          <svg
            v-else
            style="color:#ccc; height:1.4rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M5 4a2 2 0 0 0-2 2v6H0l4 4 4-4H5V6h7l2-2H5zm10 4h-3l4-4 4 4h-3v6a2 2 0 0 1-2 2H6l2-2h7V8z"
            >
            </path>
          </svg>
        </button>
        <button class="player-control__icons" @click="toggleShuffle">
          <svg
            v-if="this.shuffle"
            style="height:1.4rem"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"
            >
            </path>
          </svg>
          <svg
            v-else
            style="color:#ccc; height:1.4rem"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
          >
            <path
              d="M6.59 12.83L4.4 15c-.58.58-1.59 1-2.4 1H0v-2h2c.29 0 .8-.2 1-.41l2.17-2.18 1.42 1.42zM16 4V1l4 4-4 4V6h-2c-.29 0-.8.2-1 .41l-2.17 2.18L9.4 7.17 11.6 5c.58-.58 1.59-1 2.41-1h2zm0 10v-3l4 4-4 4v-3h-2c-.82 0-1.83-.42-2.41-1l-8.6-8.59C2.8 6.21 2.3 6 2 6H0V4h2c.82 0 1.83.42 2.41 1l8.6 8.59c.2.2.7.41.99.41h2z"
            >
            </path>
          </svg>
        </button>
      </div>
    </div>
    <div class="player-control__progress">
      <div
        class="js-musicSeek player-control__progress-bar shadow w-full bg-grey-light"
        @click="updateSeek($event)"
      >
        <div
          class="js-musicSeek bg-blue player-control__progress-bar"
          :style="{ 'width': `${trackProgress}` }"
        ></div>
      </div>
    </div>
  </div>
</template>

<script>
import { log } from "util";

export default {
  props: {
    loop: Boolean,
    shuffle: Boolean,
    progress: Number
  },

  data() {
    return {
      volume: 0.5,
      muted: false
    };
  },

  computed: {
    trackProgress() {
      return this.progress * 100 + "%";
    }
  },

  created: function() {
    Howler.volume(this.volume);
  },

  methods: {
    playTrack(index) {
      this.$emit("playtrack", index);
    },
    pauseTrack() {
      this.$emit("pausetrack");
    },
    stopTrack() {
      this.$emit("stoptrack");
    },
    skipTrack(direction) {
      this.$emit("skiptrack", direction);
    },
    updateVolume(volume) {
      Howler.volume(volume);
    },
    toggleMute() {
      Howler.mute(!this.muted);
      this.muted = !this.muted;
    },
    toggleLoop() {
      this.$emit("toggleloop", !this.loop);
    },
    toggleShuffle() {
      this.$emit("toggleshuffle", !this.shuffle);
    },
    updateSeek(event) {
      let el = document.querySelector(".js-musicSeek"),
        mousePos = event.offsetX,
        elWidth = el.clientWidth,
        percents = (mousePos / elWidth) * 100;
      this.$emit("updateseek", percents);
    }
  }
};
</script>
