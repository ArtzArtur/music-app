import { createStore } from "vuex";

const store = createStore({
  state: {
    results: [],
    loading: false,
    entityType:'album',
    cart:[],
    notFound:false
  },
  mutations: {
    fetchData(state, payload) {
      if(payload.length>0){
      state.notFound = false
      payload.forEach(result=>result.quantity=1)
      state.results = payload
    }
    else{
      state.notFound = true
    }
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
      context.state.notFound = false
      context.state.loading = true
      try {
        let data = await fetch(`https://itunes.apple.com/search?term=${payload}&entity=album&media=music`)
        let resp = await data.json()
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