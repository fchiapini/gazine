<template>
  <PodcastList :podcasts="defaultPodcasts" />
</template>

<script>
import { mapState } from 'vuex'
import PodcastList from '@/components/PodcastList.vue'
export default {
  components: {
    PodcastList
  },

  /** Get data on Server Side: */
  async fetch({ app, store }) {
    if (process.browser) return
    try {
      // Binds it on server side then unbind again to avoid memory leaks on the server.
      await store.dispatch('podcasts/bindFollowingPodcastDocument')
      store.dispatch('podcasts/unbindPodcastDocument')
    } catch (e) {
      console.error(e)
    }
  },

  computed: mapState({
    defaultPodcasts: (state) => state.podcasts.defaultPodcasts
  }),

  /**  Bind Vuexfire on client-side: */
  async mounted() {
    try {
      await this.$store.dispatch('podcasts/bindFollowingPodcastDocument')
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
