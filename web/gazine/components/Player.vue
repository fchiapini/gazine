<template>
  <section class="player">
    <audio
      ref="audio"
      src="https://www.listennotes.com/e/p/4e7c59e10e4640b98f2f3cb1777dbb43/"
      @timeupdate.prevent="seekTimeUpdate"
    ></audio>
    <div class="player__info">
      <img
        src="~/assets/img/logo.png"
        alt="Podcast cover"
        class="player__info__cover"
      />
      <div class="player__info__box">
        <p class="player__info__box__title">Research and Innovation</p>
        <p class="player__info__box__author">Felipe podcast</p>
      </div>
    </div>

    <div class="control">
      <ul class="player__control">
        <li class="player__control__btn">
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
        <li class="player__control__btn">
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
            @click="seek($event)"
            @mousedown="setSeek(true)"
            @mouseup="setSeek(false)"
            @mousemove="seek($event)"
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
export default {
  data: () => ({
    duration: 0,
    currentTime: 0,
    currentTimePosition: 0,
    paused: true,
    volume: 50,
    muted: false,
    seeking: false
  }),

  methods: {
    play() {
      this.$refs.audio.play()
      this.duration = this.$refs.audio.duration
      this.paused = this.$refs.audio.paused
    },
    pause() {
      this.$refs.audio.pause()
      this.paused = this.$refs.audio.paused
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
    replay10() {},
    forward30() {},
    seekTimeUpdate() {
      this.currentTimePosition =
        this.$refs.audio.currentTime * (100 / this.$refs.audio.duration)

      this.currentTime = this.$refs.audio.currentTime
    },
    setVolume() {
      this.volume = parseInt(this.$refs.volumeSlider.value)
      this.$refs.audio.volume = this.volume / 100
    },
    seek(event) {
      if (this.seeking) {
        this.$refs.seekSlider.value =
          event.clientX - this.$refs.seekSlider.offsetLeft
        const seekTo =
          this.$refs.audio.duration * (this.$refs.seekSlider.value / 100)
        this.$refs.audio.currentTime = seekTo
      }
    },
    setSeek(seeking) {
      this.seeking = seeking
    }
  }
}
</script>
