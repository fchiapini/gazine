<template>
  <div class="podcasts-container">
    <div
      v-for="podcast in podcasts"
      :key="podcast.collectionId"
      class="podcast-card"
    >
      <nuxt-link
        :to="'/podcast/' + encodeURLToBase64(podcast.feedUrl)"
        class="podcast-card__link"
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
          <span class="podcast-card__info__author">{{
            podcast.artistName
          }}</span>
        </div>
      </nuxt-link>
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
  },

  methods: {
    encodeURLToBase64(url) {
      const buffer = Buffer.from(url)
      const urlBase64 = buffer.toString('base64')
      return urlBase64
    }
  }
}
</script>
