export const state = () => ({
  authUser: null
})

export const mutations = {
  RESET_STORE: (state) => {
    Object.assign(state, { authUser: null })
  },

  SET_AUTH_USER: (state, { authUser }) => {
    state.authUser = {
      uid: authUser.uid,
      email: authUser.email
    }
  }
}

export const actions = {
  onAuthStateChanged({ commit }, { authUser }) {
    if (!authUser) {
      commit('RESET_STORE')
      return
    }
    commit('SET_AUTH_USER', { authUser })
  },

  async login({ commit }, loginInfo) {
    console.log('Login to firebase...')
    await this.$fireAuth.signInWithEmailAndPassword(
      loginInfo.email,
      loginInfo.password
    )
  }
}

export const getters = {
  isLoggedIn: (state) => {
    try {
      return state.authUser.id !== null
    } catch {
      return false
    }
  }
}
