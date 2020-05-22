<template>
  <PodcastList :podcasts="topPodcasts" />
</template>

<script>
import { mapState, mapGetters } from 'vuex'
import PodcastList from '@/components/PodcastList.vue'
export default {
  components: {
    PodcastList
  },

  computed: {
    ...mapState({
      topPodcasts: (state) => state.podcasts.topPodcasts
    }),
    ...mapGetters('user', ['isLoggedIn'])
  },

  /**  Bind Vuexfire on client-side: */
  async mounted() {
    try {
      if (this.isLoggedIn) {
        await this.$store.dispatch('podcasts/bindFollowingPodcastDocument')
      }
    } catch (e) {
      console.error(e)
    }
  }
}
</script>
