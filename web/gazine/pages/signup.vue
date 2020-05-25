<template>
  <div class="signup">
    <div class="signup__brand">
      <img src="@/assets/img/logo.png" alt="" class="signup__logo" />
      <div class="signup__brand-name">Gazine</div>
    </div>

    <p class="signup__title">Sign up</p>
    <form class="signup__form" @submit.prevent>
      <input
        v-model="email"
        type="email"
        placeholder="Email address"
        class="signup__email"
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
        class="signup__password"
        required
        @blur="$v.password.$touch()"
      />
      <div v-if="$v.password.$error" class="error__notification">
        <p v-if="!$v.password.required" class="errorMessage">
          Password is required.
        </p>
        <p v-if="!$v.password.minLength" class="errorMessage">
          Password must have at least
          {{ $v.password.$params.minLength.min }} characters.
        </p>
      </div>

      <input
        v-model="confirmPassword"
        type="password"
        placeholder="Confirm Password"
        class="signup__password"
        required
        @blur="$v.confirmPassword.$touch()"
      />
      <div v-if="$v.confirmPassword.$error" class="error__notification">
        <p v-if="!$v.confirmPassword.sameAsPassword" class="errorMessage">
          Passwords must be identical.
        </p>
      </div>

      <button
        :disabled="$v.$invalid"
        type="submit"
        class="btn signup__btn-submit"
        @click="signup"
      >
        Sign up
      </button>
    </form>
    <Footer />
  </div>
</template>

<script>
import { required, email, sameAs, minLength } from 'vuelidate/lib/validators'
import Footer from '@/components/Footer.vue'

export default {
  components: {
    Footer
  },

  data: () => ({
    email: '',
    password: '',
    confirmPassword: ''
  }),

  validations: {
    email: {
      required,
      email
    },
    password: {
      required,
      minLength: minLength(6)
    },
    confirmPassword: {
      sameAsPassword: sameAs('password')
    }
  },

  methods: {
    async signup() {
      this.$v.$touch()
      if (!this.$v.$invalid) {
        try {
          this.$nuxt.$loading.start()
          await this.$fireAuth.createUserWithEmailAndPassword(
            this.email,
            this.password
          )
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
