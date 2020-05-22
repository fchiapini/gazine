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
    <button
      v-if="!isFollowingPodcast"
      :title="tooltip"
      :disabled="!isLoggedIn"
      class="podcast__btn__follow"
      @click.prevent="follow"
    >
      <span>Follow</span>
    </button>
    <button
      v-if="isFollowingPodcast"
      title="Unfollow podcast"
      :disabled="!isLoggedIn"
      class="podcast__btn__follow"
      @click.prevent="unFollow"
    >
      <span>unFollow</span>
    </button>
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
import { mapState, mapGetters } from 'vuex'

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
    currentItemPlaying: Number.MIN_SAFE_INTEGER,
    podcastFeedUrl: ''
  }),

  computed: {
    ...mapState({
      currentPodcast: (state) => state.podcasts.currentPodcast
    }),
    ...mapState({
      followingPodcasts: (state) => state.podcasts.followingPodcasts
    }),
    ...mapGetters('user', ['isLoggedIn']),
    tooltip() {
      return this.isLoggedIn
        ? 'Follow podcast'
        : 'Sig up before following podcast'
    },
    isFollowingPodcast() {
      return this.followingPodcasts.some(
        (followingPodcast) =>
          followingPodcast.title === this.currentPodcast.title
      )
    }
  },

  mounted() {
    this.podcastFeedUrl = this.$route.params.feedUrl
  },

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
    },

    follow() {
      const podcastToFollow = this.createPodcastObject(
        this.podcastFeedUrl,
        this.currentPodcast
      )
      this.$store.dispatch('podcasts/followPodcast', podcastToFollow)
    },

    unFollow() {
      this.$store.dispatch('podcasts/unFollowPodcast', this.currentPodcast)
    },

    createPodcastObject(feedUrl, { title, author, image }) {
      const podcastObject = {
        title,
        author,
        image,
        feedUrl
      }

      return podcastObject
    }
  }
}
</script>
