<template>
  <div class="login">
    <div class="login__brand">
      <img src="@/assets/img/logo.png" alt="" class="login__logo" />
      <div class="login__brand-name">Gazine</div>
    </div>

    <p class="login__title">To continue, log in to Gazine.</p>
    <form class="login__form" @submit.prevent>
      <input
        v-model="email"
        type="email"
        placeholder="Email address"
        class="login__email"
        required
        @blur="$v.email.$touch()"
      />
      <div v-if="$v.email.$error" class="error__notification">
        <p v-if="!$v.email.email" class="errorMessage">
          Please enter a valid email.
        </p>
        <p v-if="!$v.email.required" class="errorMessage">
          Email is required.
        </p>
      </div>

      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="login__password"
        required
        @blur="$v.password.$touch()"
      />

      <div v-if="$v.password.$error" class="error__notification">
        <p v-if="!$v.password.required" class="errorMessage">
          Password is required.
        </p>
      </div>
      <button
        :disabled="$v.$invalid"
        type="submit"
        class="btn login__btn-submit"
        @click="login"
      >
        Log in
      </button>
      <p class="login__signup__text">Don't have an account?</p>
      <nuxt-link to="/signup" class="btn login__signup__link"
        >Signup for Gazine</nuxt-link
      >
    </form>
    <Footer />
  </div>
</template>

<script>
import { required, email } from 'vuelidate/lib/validators'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },

  data: () => ({
    email: null,
    password: null
  }),

  validations: {
    email: {
      required,
      email
    },
    password: {
      required
    }
  },

  methods: {
    async login() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          this.$nuxt.$loading.start()
          await this.$fireAuth.signInWithEmailAndPassword(
            this.email,
            this.password
          )
          await this.$store.dispatch('podcasts/bindFollowingPodcastDocument')
          this.$nuxt.$loading.finish()
          this.$router.push('/podcast/search')
        } catch (error) {
          this.$nuxt.$loading.finish()
          alert(error)
        }
      }
    }
  }
}
</script>
