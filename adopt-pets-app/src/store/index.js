import Vue from 'vue'
import Vuex from 'vuex'

import cats from '../data/cats'
import dogs from '@/data/dogs'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cats,
    dogs, 
    pets: [...cats, ...dogs]
  },
  mutations: {
    // mutations have 2 parame ters, the first is the state provided by vuex, and the second is whatever you're passing into the function 
    appendPet: (state, { species, pet }) => {
      state[species].push(pet)
    } 
  },
  actions: {
    // vue provides 'context' method, and allows you name a second custom argument to pass into the mutation method 
    // just use object destructuring to get commit from context
    addPet: (context, payload) => {
      // context.commit() calls a mutation 
      context.commit('appendPet', payload)
    }
  },
  modules: {
  }, 
  // getters are like computed properties, but for the vuex store. suppose you want to update what you're passing into a component from state, but you don't want to update the state 
  getters: {
    animalsCount: (state) => {
      return state.cats.length + state.dogs.length
    }, 
    // you can also pass in other getters as the second argument 
    getAllCats(state, getters) {
      return state.pets.filter(cur => cur.species === 'cat')
    }
  }
})
