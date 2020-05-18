<template>
  <div class="podcasts-container">
    <div
      v-for="podcast in podcasts"
      :key="podcast.collectionId"
      class="podcast-card"
    >
      <img
        :src="podcast.artworkUrl600"
        alt="Podcast cover"
        class="podcast-card__cover"
      />
      <div class="podcast-card__info">
        <span class="podcast-card__info__title">{{
          podcast.collectionName
        }}</span>
        <span class="podcast-card__info__author">{{ podcast.artistName }}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    podcasts: {
      type: Array,
      required: true
    }
  }
}
</script>
