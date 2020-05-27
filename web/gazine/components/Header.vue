<template>
  <header class="header">
    <nuxt-link to="/podcast/search" class="header__link">
      <form action="submit" class="search">
        <input
          v-model="term"
          type="text"
          class="search__input"
          placeholder="Search for Podcast title"
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
        <span v-if="user" class="user-nav__user-name">{{ user.email }} </span>
        <nuxt-link v-if="!user" to="/login" class="user-nav__user__link"
          >Login</nuxt-link
        >
        <ul v-if="user" class="dropdown-menu">
          <li class="dropdown-menu__option">
            <svg class="user-nav__logout__icon" @click.prevent="logout">
              <use xlink:href="~/assets/img/sprite.svg#icon-exit_to_app"></use>
            </svg>
            <button class="user-nav__logout__btn" @click.prevent="logout">
              Logout
            </button>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
import { mapState } from 'vuex'

export default {
  data: () => ({
    term: ''
  }),

  computed: {
    ...mapState({
      user: (state) => state.user.authUser
    })
  },

  watch: {
    term(newValue, oldValue) {
      if (newValue === null || newValue === '') {
        this.$store.dispatch('podcasts/clearSearchedPodcasts')
      }
    }
  },

  methods: {
    search() {
      if (this.user && this.term !== null && this.term !== '')
        this.$store.dispatch('podcasts/fetchSearchedPodcasts', this.term)
    },
    async logout() {
      await this.$fireAuth.signOut()
      this.$router.go('/login')
    }
  }
}
</script>
