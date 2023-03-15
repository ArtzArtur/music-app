import { createStore } from "vuex";

const store = createStore({
  state: {
    results: [],
    loading: false,
    entityType: 'album',
    cart: [],
  },
  getters: {
  },
  mutations: {
    fetchData(state, payload) {
      payload.forEach(result=>result.quantity=1)
      state.results = payload
    },
    addToCart(state, payload) {
      let found = state.cart.find(item=>item.collectionId===payload.collectionId)
      if(found){
        found.quantity++
      }
      else{
        state.cart.push(payload)
      }

    }
  },
  actions: {
    async fetchData(context, payload) {
      context.state.results = []
      context.state.loading = true
      try {
        let data = await fetch(`https://itunes.apple.com/search?term=${payload}&entity=album&media=music`)
        let resp = await data.json()
        console.log(resp)
        context.commit('fetchData', resp.results)
      }
      catch (err) {
        context.commit('fetchData', err)
      }
      context.state.loading = false
    }
  }
}
)

export default store