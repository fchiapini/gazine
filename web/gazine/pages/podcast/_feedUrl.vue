<template>
  <section class="podcast">
    <div class="podcast__info">
      <img
        :src="currentPodcast.image"
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
          :class="{
            'podcast__episodes__item--active': currentItemPlaying === index
          }"
          @mouseover="setCurrentItemHovered(index)"
          @mouseleave="setCurrentItemHovered(Number.MIN_SAFE_INTEGER)"
          @click="loadEpisode(episode, index)"
        >
          <div class="podcast__episodes__item__info">
            <svg
              v-if="
                currentItemHovered !== index && currentItemPlaying !== index
              "
              class="podcast__episodes__item__icon"
            >
              <use xlink:href="~/assets/img/sprite.svg#icon-podcast"></use>
            </svg>
            <svg
              v-if="
                currentItemHovered === index || currentItemPlaying === index
              "
              class="podcast__episodes__item__icon"
            >
              <use xlink:href="~/assets/img/sprite.svg#icon-play_arrow"></use>
            </svg>
            <div class="div podcast__episodes__item__info__box">
              <p class="podcast__episodes__item__title">
                {{ episode.title }}
              </p>
              <p class="podcast__episodes__item__date">
                {{ episode.isoDate | date }}
              </p>
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
    currentItemHovered: Number.MIN_SAFE_INTEGER,
    currentItemPlaying: Number.MIN_SAFE_INTEGER
  }),

  computed: mapState({
    currentPodcast: (state) => state.podcasts.currentPodcast
  }),

  methods: {
    loadEpisode(episode, index) {
      this.$store.dispatch('podcasts/loadEpisode', episode)
      this.setCurrentItemPlaying(index)
    },

    setCurrentItemHovered(indexItem) {
      this.currentItemHovered = indexItem
    },

    setCurrentItemPlaying(indexItem) {
      this.currentItemPlaying = indexItem
    }
  }
}
</script>
