<template>
  <section class="player">
    <audio
      ref="audio"
      :src="currentEpisode.enclosure.url"
      autoplay
      @canplay="loadPodcastCover"
      @play="togglePause"
      @pause="togglePause"
      @durationchange="setDuration"
      @timeupdate.prevent="seekTimeUpdate"
    ></audio>
    <div class="player__info">
      <img :src="imageSrc" alt="Podcast cover" class="player__info__cover" />
      <div class="player__info__box">
        <p class="player__info__box__title">{{ currentEpisode.title }}</p>
        <p class="player__info__box__author">{{ currentEpisode.creator }}</p>
      </div>
    </div>

    <div class="control">
      <ul class="player__control">
        <li class="player__control__btn" @click.prevent="replay10()">
          <svg class="player__control__icon player__control__icon--small">
            <use xlink:href="~/assets/img/sprite.svg#icon-replay_10"></use>
          </svg>
        </li>
        <li
          v-show="paused"
          class="player__control__btn"
          @click.prevent="play()"
        >
          <svg class="player__control__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-play_circle_outline"
            ></use>
          </svg>
        </li>
        <li
          v-show="!paused"
          class="player__control__btn"
          @click.prevent="pause()"
        >
          <svg class="player__control__icon">
            <use
              xlink:href="~/assets/img/sprite.svg#icon-pause_circle_outline"
            ></use>
          </svg>
        </li>
        <li class="player__control__btn" @click.prevent="forward30">
          <svg class="player__control__icon player__control__icon--small">
            <use xlink:href="~/assets/img/sprite.svg#icon-forward_30"></use>
          </svg>
        </li>
      </ul>

      <div class="player__timer">
        <div class="player__timer__elapsed">{{ currentTime | time }}</div>
        <div class="slider player__timer__progress-bar">
          <input
            ref="seekSlider"
            type="range"
            :value="currentTimePosition"
            min="0"
            max="100"
            step="1"
          />
        </div>
        <div class="player__timer__total">
          {{ duration | time }}
        </div>
      </div>
    </div>

    <div class="player__volume">
      <svg
        v-if="muted || volume === 0"
        class="player__volume__icon"
        @click="mute()"
      >
        <use xlink:href="~/assets/img/sprite.svg#icon-volume_off"></use>
      </svg>
      <svg
        v-if="!muted && volume > 0"
        class="player__volume__icon"
        @click="mute()"
      >
        <use xlink:href="~/assets/img/sprite.svg#icon-volume_up"></use>
      </svg>
      <div class="slider player__volume__slider">
        <input
          ref="volumeSlider"
          type="range"
          :value="volume"
          min="0"
          max="100"
          step="1"
          @mousedown="setVolume"
          @mousemove="setVolume"
        />
      </div>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    duration: 0,
    podcastCover: '',
    currentTime: 0,
    currentTimePosition: 0,
    paused: true,
    volume: 50,
    muted: false,
    seeking: false
  }),

  computed: {
    ...mapState({
      currentPodcast: (state) => state.podcasts.currentPodcast
    }),
    ...mapState({
      currentEpisode: (state) => state.podcasts.currentEpisode
    }),

    imageSrc() {
      return this.podcastCover === ''
        ? require('@/assets/img/logo.png')
        : this.podcastCover
    }
  },

  methods: {
    play() {
      this.$refs.audio.play()
    },
    pause() {
      this.$refs.audio.pause()
    },
    mute() {
      if (this.$refs.audio.muted) {
        this.$refs.audio.muted = false
        this.muted = false
      } else {
        this.$refs.audio.muted = true
        this.muted = true
      }
    },
    replay10() {
      this.$refs.audio.currentTime -= 10
    },
    forward30() {
      this.$refs.audio.currentTime += 30
    },
    seekTimeUpdate() {
      this.currentTimePosition =
        this.$refs.audio.currentTime * (100 / this.$refs.audio.duration)

      this.currentTime = this.$refs.audio.currentTime
    },
    togglePause() {
      this.paused = this.$refs.audio.paused
    },
    setVolume() {
      this.volume = parseInt(this.$refs.volumeSlider.value)
      this.$refs.audio.volume = this.volume / 100
    },
    setDuration() {
      this.duration = this.$refs.audio.duration
    },
    loadPodcastCover() {
      this.podcastCover = this.currentPodcast.image
    }
  }
}
</script>
