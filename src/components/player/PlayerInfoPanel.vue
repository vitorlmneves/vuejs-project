<template>
  <div class="player-info">
    <div class="player-info__wrapper">
      <h2 class="player-info__music-title">{{ trackInfo.title }}</h2>
    </div>
    <div class="player-info__wrapper">
      <h3 class="player-info__music-time">
        {{ trackInfo.seek | minutes }}/{{ trackInfo.duration | minutes }}
      </h3>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    trackInfo: Object
  },
}
</script>
