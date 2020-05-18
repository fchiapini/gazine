<template>
  <div>{{ podcast.title }}</div>
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
