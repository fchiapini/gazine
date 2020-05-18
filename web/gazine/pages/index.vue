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
  computed: mapState({
    defaultPodcasts: (state) => state.podcasts.defaultPodcasts
  })
}
</script>
