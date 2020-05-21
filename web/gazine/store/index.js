export const actions = {
  async nuxtServerInit({ dispatch }, ctx) {
    if (this.$fireAuth === null) {
      throw new Error(
        'nuxtServerInit Example not working - this.$fireAuth cannot be accessed.'
      )
    }

    if (ctx.$fireAuth === null) {
      throw new Error(
        'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
      )
    }

    if (ctx.app.$fireAuth === null) {
      throw new Error(
        'nuxtServerInit Example not working - ctx.$fireAuth cannot be accessed.'
      )
    }

    // INFO -> Nuxt-fire Objects can be accessed in nuxtServerInit action via this.$fire___, ctx.$fire___ and ctx.app.$fire___'
    /** Get the VERIFIED authUser from the server */
    if (ctx.res && ctx.res.locals && ctx.res.locals.user) {
      const { allClaims: claims, ...authUser } = ctx.res.locals.user

      await dispatch('user/onAuthStateChanged', {
        authUser,
        claims
      })
    }
  },

  checkVuexStore(ctx) {
    if (this.$fireAuth === null) {
      throw new Error(
        'Vuex Store example not working - this.$fireAuth cannot be accessed.'
      )
    }

    alert(
      'Success. Nuxt-fire Objects can be accessed in store actions via this.$fire___'
    )
  }
}
