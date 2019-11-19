import agent from './agent'

const Auth = {
  namespaced: true,
  state: {
    isLoginCheck: false,
    isAuthenticated: false,
    user: {}
  },
  mutations: {
    SET_USER (state, payload) {
      state.user = payload.user
      state.isAuthenticated = !!payload.user
    },
    CHECK_LOGIN_STATUS (state, payload) {
      state.isLoginCheck = !!payload.isAuthenticated
    }
  },
  actions: {
    UserLogin ({ commit }, { token, id }) {
      agent.post('login/google', { access_token: token, user_id: id })
        .then(res => {
          commit('SET_USER', res)
        })
        .catch(err => {
          console.error(err)
        })
    },
    CheckLoginStatus ({ commit }, payload) {
      commit('CHECK_LOGIN_STATUS', payload)
    }
  },
  getters: {

  }
}

export default Auth
