import axios from 'axios'
import Vuex from 'vuex'

const createStpre = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      addDeck(state, newDeck) {
        state.decks.push(newDeck)
      },
      editDeck(state, editDeck) {
        const deckIndex = state.decks.findIndex((d) => d.id === editDeck.id)
        state.decks[deckIndex] = editDeck
      },
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return context.app.$axios
          .$get(process.env.baseApiUrl + '/decks.json')
          .then((data) => {
            const decksArr = []
            for (const key in data) {
              decksArr.push({ ...data[key], id: key })
            }
            vuexContext.commit('setDecks', decksArr)
          })
      },
      addDeck(vuexContext, deckData) {
        return this.$axios
          .$post(
            process.env.baseApiUrl + '/decks.json',
            deckData
          )
          .then((data) => {
            vuexContext.commit('addDeck', { ...deckData, id: data.name })
          })
          .catch((e) => {
            console.log(e)
          })
      },
      editDeck(vuexContext, deckData) {
        const deckId = deckData.id
        delete deckData.id
        return this.$axios
          .$put(
            process.env.baseApiUrl + '/decks/' +
            deckId +
            '.json',
            deckData
          )
          .then((data) => {
            vuexContext.commit('editDeck', { ...data, id: deckId })
          })
          .catch((e) => {
            console.log(e)
          })
      },
      setDecks(vuexContext, decks) {
        vuexContext.commit('setDecks', decks)
      },
    },
    getters: {
      decks(state) {
        return state.decks
      },
    },
  })
}

export default createStpre
