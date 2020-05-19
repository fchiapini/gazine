<template>
  <section class="podcast">
    <div class="podcast__info">
      <img
        :src="podcast.image.url"
        alt="Podcast cover"
        class="podcast__cover"
      />
      <div class="podcast__info__box">
        <p class="podcast__info__box__title">{{ podcast.title }}</p>
        <p class="podcast__info__box__author">{{ podcast.author }}</p>
      </div>
    </div>
    <p class="podcast__description">{{ podcast.description }}</p>
    <div class="podcast__episodes">
      <p class="podcast__episodes__heading">
        All Episodes
      </p>
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

  computed: mapState({
    podcast: (state) => state.podcasts.podcast
  })
}
</script>
