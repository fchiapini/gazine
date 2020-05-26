<template>
  <PodcastList :podcasts="podcasts" />
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
    ...mapState({
      followingPodcasts: (state) => state.podcasts.followingPodcasts
    }),
    ...mapGetters('user', ['isLoggedIn']),
    podcasts() {
      return this.followingPodcasts.length === 0
        ? this.topPodcasts
        : this.followingPodcasts
    }
  },

  /**  Bind Vuexfire on client-side: */
  async mounted() {
    try {
      if (this.isLoggedIn) {
        await this.$store.dispatch('podcasts/bindFollowingPodcastDocument')
      }
    } catch (e) {
      alert(e)
    }
  }
}
</script>
