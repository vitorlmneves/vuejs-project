<template>
  <div class="player-playlist">
    <div>
      <div 
        v-for="(track, index) in playlist" 
        :key="track.title"
        v-show="track.display"
        :class="[{selected: track === selectedTrack}, {even: index % 2 == 0}]">
        <div @click="selectTrack(track)" @dblclick="playTrack()">
          <div>{{ index | numbers }} {{ track.artist }} - {{ track.title }}</div>
        </div>
        <div></div>
        {{ track.howl.duration() | minutes }}
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      playlist: Array,
      selectedTrack: Object
    },
    methods: {
      selectTrack (track) {
        this.$emit('selecttrack', track)
      },
      playTrack(index) {
        this.$emit('playtrack', index)
      }
    } 
  }
</script>