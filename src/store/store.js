import { createStore } from "vuex";

const store = createStore({
  state: {
    results: [],
    loading:false,
    entityType:'album'
  },
  getters: {},
  mutations: {
    fetchData(state, payload) {
      state.results = payload
    }
  },
  actions: {
    async fetchData(context, payload) {
      context.state.loading=true
      try {
        let data = await fetch(`https://itunes.apple.com/search?term=${payload}&entity=album&media=music`)
        let resp = await data.json()
        console.log(resp)
        context.commit('fetchData', resp.results)
      }
      catch (err) {
        context.commit('fetchData', err)
      }
      context.state.loading=false
    }
  }
})

export default store

//
// `https://itunes.apple.com/search?term=nas&entity=album`