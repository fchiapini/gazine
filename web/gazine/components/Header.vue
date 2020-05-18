<template>
  <header class="header">
    <nuxt-link to="/podcast/search" class="header__link">
      <form action="submit" class="search">
        <input
          v-model="term"
          type="text"
          class="search__input"
          placeholder="Search for Podcasts"
          @keyup.enter="search"
        />
        <button class="search__button" @click="search">
          <svg class="search__icon">
            <use xlink:href="~/assets/img/sprite.svg#icon-search"></use>
          </svg>
        </button>
      </form>
    </nuxt-link>

    <nav class="user-nav">
      <div class="user-nav__user">
        <svg class="user-nav__user-photo">
          <use xlink:href="~/assets/img/sprite.svg#icon-person"></use>
        </svg>
        <span class="user-nav__user-name">Felipe</span>
      </div>
    </nav>
  </header>
</template>

<script>
export default {
  data: () => ({
    term: ''
  }),

  watch: {
    term(newValue, oldValue) {
      if (newValue === null || newValue === '') {
        this.$store.dispatch('podcasts/clearSearchedPodcasts')
      }
    }
  },

  methods: {
    search() {
      if ((this.term !== null) & (this.term !== '')) {
        this.$store.dispatch('podcasts/fetchSearchedPodcasts', this.term)
      }
    }
  }
}
</script>
