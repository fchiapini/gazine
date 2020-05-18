<template>
  <div class="search-container">
    <div v-if="searchedPodcasts.length === 0" class="search-initial-box">
      <svg class="search-initial-box__icon">
        <use xlink:href="~/assets/img/sprite.svg#icon-search"></use>
      </svg>
      <div class="search-initial-box__title">Search Podcast</div>
      <div class="search-initial-box__text">Find your favorite podcasts.</div>
    </div>
    <PodcastList v-else :podcasts="searchedPodcasts" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PodcastList from '@/components/PodcastList.vue'

export default {
  components: {
    PodcastList
  },

  computed: mapState({
    searchedPodcasts: (state) => state.podcasts.searchedPodcasts
  })
}
</script>
