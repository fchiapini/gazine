<template>
  <div class="podcasts-container">
    <div v-for="(podcast, index) in podcasts" :key="index" class="podcast-card">
      <nuxt-link
        :to="`/podcast/'${encodeURLToBase64(podcast.feedUrl)}`"
        class="podcast-card__link"
      >
        <img
          :src="podcast.image"
          alt="Podcast cover"
          class="podcast-card__cover"
        />
        <div class="podcast-card__info">
          <span class="podcast-card__info__title">{{ podcast.title }}</span>
          <span class="podcast-card__info__author">{{ podcast.author }}</span>
        </div>
      </nuxt-link>
    </div>
  </div>
</template>

<script>
import { utils } from '@/mixins/utils.js'

export default {
  mixins: [utils],

  props: {
    podcasts: {
      type: Array,
      required: true
    }
  }
}
</script>
