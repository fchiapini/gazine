<template>
  <nav class="sidebar">
    <a href="#" class="brand"> </a>
    <div class="brand">
      <a href="#" class="brand__link">
        <img class="brand__logo" src="~/assets/img/logo.png" alt="Logo" />
        <span class="brand__name">gazine</span>
      </a>
    </div>

    <ul class="side-nav">
      <li class="side-nav__item">
        <nuxt-link to="/" class="side-nav__link"
          ><svg class="side-nav__icon">
            <use xlink:href="~/assets/img/sprite.svg#icon-home"></use>
          </svg>
          <span>Home</span>
        </nuxt-link>
      </li>
      <li class="side-nav__item">
        <nuxt-link to="/podcast/search" class="side-nav__link"
          ><svg class="side-nav__icon">
            <use xlink:href="~/assets/img/sprite.svg#icon-search"></use>
          </svg>
          <span>Search</span>
        </nuxt-link>
      </li>
    </ul>

    <div class="sidebar__heading">Top Podcasts</div>
    <ul class="podcast-nav">
      <li
        v-for="(podcast, index) in topPodcasts"
        :key="index"
        class="podcast-nav__item"
      >
        <nuxt-link
          :title="podcast.title"
          :to="`/podcast/'${encodeURLToBase64(podcast.feedUrl)}`"
          class="podcast-nav__link"
        >
          {{ podcast.title }}
        </nuxt-link>
      </li>
    </ul>

    <div class="sidebar__heading">Following</div>
    <ul class="podcast-nav">
      <li
        v-for="(podcast, index) in followingPodcasts"
        :key="index"
        class="podcast-nav__item"
      >
        <nuxt-link
          :title="podcast.title"
          :to="`/podcast/'${podcast.feedUrl}`"
          class="podcast-nav__link"
        >
          {{ podcast.title }}
        </nuxt-link>
      </li>
    </ul>
  </nav>
</template>

<script>
import { mapState } from 'vuex'
import { utils } from '@/mixins/utils.js'

export default {
  mixins: [utils],

  computed: {
    ...mapState({
      topPodcasts: (state) => state.podcasts.topPodcasts
    }),
    ...mapState({
      followingPodcasts: (state) => state.podcasts.followingPodcasts
    })
  }
}
</script>
