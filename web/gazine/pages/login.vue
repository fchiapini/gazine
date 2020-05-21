<template>
  <div class="login">
    <div class="login__brand">
      <img src="@/assets/img/logo.png" alt="" class="login__logo" />
      <div class="brand__name">Gazine</div>
    </div>

    <p class="login__title">To continue, log in to Gazine.</p>
    <form class="login__form" @submit.prevent>
      <input
        v-model="email"
        type="email"
        placeholder="Email address"
        class="login__email"
        required
      />
      <input
        v-model="password"
        type="password"
        placeholder="Password"
        class="login__password"
        required
      />
      <button type="submit" class="login__submit" @click="login">Log in</button>
    </form>
    <p class="login__signup__text">Don't have an account?</p>
    <nuxt-link to="/signup" class="login__signup__link"
      >Signup for Gazine</nuxt-link
    >
  </div>
</template>

<script>
export default {
  data: () => ({
    email: '',
    password: ''
  }),

  methods: {
    async login() {
      try {
        await this.$fireAuth.signInWithEmailAndPassword(
          this.email,
          this.password
        )
        this.$router.push('/podcast/search')
      } catch (error) {
        alert(error)
      }
    }
  }
}
</script>
