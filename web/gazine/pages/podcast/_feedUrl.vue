<template>
  <section class="podcast">
    <div class="podcast__info">
      <img
        :src="currentPodcast.image.url"
        alt="Podcast cover"
        class="podcast__cover"
      />
      <div class="podcast__info__box">
        <p class="podcast__info__box__title">{{ currentPodcast.title }}</p>
        <p class="podcast__info__box__author">{{ currentPodcast.author }}</p>
      </div>
    </div>
    <button class="podcast__btn__follow"><span>Follow</span></button>
    <p class="podcast__description">{{ currentPodcast.description }}</p>
    <div class="podcast__episodes">
      <p class="podcast__episodes__heading">
        All Episodes
      </p>
      <ul class="podcast__episodes__list">
        <li
          v-for="(episode, index) in currentPodcast.episodes"
          :key="index"
          class="podcast__episodes__item"
          @mouseover="changeIcon"
          @mouseup="changeIcon"
          @click="loadEpisode(episode)"
        >
          <div class="podcast__episodes__item__info">
            <svg class="podcast__episodes__item__icon">
              <use
                xlink:href="~/assets/img/sprite.svg#icon-play_circle_outline"
              ></use>
            </svg>
            <div class="div podcast__episodes__item__info__box">
              <div class="podcast__episodes__item__title">
                {{ episode.title }}
              </div>
              <div class="podcast__episodes__item__date">
                {{ episode.isoDate | date }}
              </div>
            </div>
          </div>
          <div class="podcast__episodes__item__duration">
            {{ episode.itunes.duration }}
          </div>
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
import { mapState } from 'vuex'

export default {
  async fetch({ store, error, params }) {
    try {
      await store.dispatch('podcasts/fetchPodcastByFeedUrl', params.feedUrl)
    } catch (e) {
      error({
        statusCode: 503,
        message: `Unable to fetch podcast feed url # ${params.feedUrl}.`
      })
    }
  },

  data: () => ({
    isPlayIcon: false
  }),

  computed: mapState({
    currentPodcast: (state) => state.podcasts.currentPodcast
  }),

  methods: {
    changeIcon() {
      this.isPlayIcon = !this.isPlayIcon
    },

    loadEpisode(episode) {
      this.$store.dispatch('podcasts/loadEpisode', episode)
    }
  }
}
</script>
