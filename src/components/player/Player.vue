<template>
  <div class="player">
    <div class="player__wrapper">
      <player-info-panel :trackInfo="getTrackInfo" />
      <player-controls-bars
        :loop="loop"
        :shuffle="shuffle"
        :progress="progress"
        @playtrack="play"
        @pausetrack="pause"
        @stoptrack="stop"
        @skiptrack="skip"
        @toggleloop="toggleLoop"
        @toggleshuffle="toggleShuffle"
        @updateseek="setSeek">
      </player-controls-bars>
      <player-playlist-panel
        :playlist="playlist"
        :selectedTrack="selectedTrack"
        @selecttrack="selectTrack"
        @playtrack="play">
      </player-playlist-panel>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

import PlayerPlaylistPanel from '@/components/player/PlayerPlaylistPanel.vue'
import PlayerControlsBars from '@/components/player/PlayerControlsBars.vue'
import PlayerInfoPanel from '@/components/player/PlayerInfoPanel.vue'

export default {
  components: {
    PlayerPlaylistPanel,
    PlayerControlsBars,
    PlayerInfoPanel
  },
  data() {
    return {
      playlist: [
        {
          title: "Inauguração BeeFM",
          description: "Vem! Venha ser feliz connosco!",
          path: "/podcasts/WhatsApp Ptt 2019-01-23 at 20.12.16.ogg",
          howl: null,
          display: true
        }
      ],
      selectedTrack: null,
      index: 0,
      playing: false,
      loop: false,
      shuffle: false,
      seek: 0
    }
  },
  computed: {
    /* ...mapGetters({
      playlist: 'podcast/playlist',
    }), */
    currentTrack() {
      return this.playlist[this.index];
    },
    progress() {
      if (this.currentTrack.howl.duration() === 0) {
        return 0;
      }
      return this.seek / this.currentTrack.howl.duration();
    },
    getTrackInfo() {
      let description = this.currentTrack.description,
          title = this.currentTrack.title,
          seek = this.seek,
          duration = this.currentTrack.howl.duration();
      return {
        description,
        title,
        seek,
        duration,
      }
    }
  },

  watch: {
    playing(playing) {
      this.seek = this.currentTrack.howl.seek();
      let updateSeek;
      if (playing) {
        updateSeek = setInterval(() => {
          this.seek = this.currentTrack.howl.seek();
        }, 250)
      } else {
        clearInterval(updateSeek);
      }
    },
  },

  created() {
    //this.podcast();

    this.playlist.forEach(track => {
      track.howl = new Howl({
        src: [`https://bpc.bee-eng.pt${track.path}`],
        onend: () => {
          if (this.loop) {
            this.play(this.index);
          } else {
            this.skip("next");
          }
        }
      });
    })
  },
  /* created() {
    this.playList();
  }, */
  methods: {
    /* ...mapActions({
      podcast: "podcast/getAll"
    }), */
    selectTrack(track) {;
      this.selectedTrack = track;
    },
    play(index) {
      let selectedTrackIndex = this.playlist.findIndex(track => track === this.selectedTrack);

      if (typeof index === "number") {
        index = index;
      } else if (this.selectedTrack) {
        if (this.selectedTrack != this.currentTrack) {
          this.stop();
        }
        index = selectedTrackIndex;
      } else {
        index = this.index;
      }

      let track = this.playlist[index].howl;

      if (track.playing()) {
        return;
      } else {
        track.play();
      }

      this.selectedTrack = this.playlist[index];
      this.playing = true;
      this.index = index;
    },
    pause() {
      this.currentTrack.howl.pause();
      this.playing = false;
    },
    stop() {
      this.currentTrack.howl.stop();
      this.playing = false;
    },
    skip(direction) {
      let index = 0,
          lastIndex = this.playlist.length - 1;

      if (this.shuffle) {
        index = Math.round(Math.random() * lastIndex);
        while (index === this.index) {
          index = Math.round(Math.random() * lastIndex);
        }
      } else if (direction === "next") {
        index = this.index + 1;
        if (index >= this.playlist.length) {
          index = 0;
        }
      } else {
        index = this.index - 1;
        if (index < 0) {
          index = this.playlist.length - 1;
        }
      }

      this.skipTo(index);
    },
    skipTo(index) {
      if (this.currentTrack) {
        this.currentTrack.howl.stop();
      }

      this.play(index);
    },
    toggleLoop(value) {
      this.loop = value;
    },
    toggleShuffle(value) {
      this.shuffle = value;
    },
    setSeek(percents) {
      let track = this.currentTrack.howl;

      if (track.playing()) {
        track.seek((track.duration() / 100) * percents);
      }
    }
  }
};
</script>
