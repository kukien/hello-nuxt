import axios from 'axios'
import Vuex from 'vuex'

const createStpre = () => {
  return new Vuex.Store({
    state: {
      decks: [],
    },
    mutations: {
      setDecks(state, decks) {
        state.decks = decks
      },
    },
    actions: {
      nuxtServerInit(vuexContext, context) {
        return axios
          .get('https://nuxt-lerning-english.firebaseio.com/decks.json')
          .then((response) => {
            const decksArr = []
            for (const key in response.data) {
              decksArr.push({ ...response.data[key], id: key })
            }
            vuexContext.commit('setDecks', decksArr)
          })
        // return new Promise((resolve, reject) => {
        //   // eslint-disable-next-line nuxt/no-timing-in-fetch-data
        //   setTimeout(() => {
        //     vuexContext.commit('setDecks', [
        //       {
        //         _id: 1,
        //         name: 'Learn English',
        //         description:
        //           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        //         thumbnail:
        //           'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
        //       },
        //       {
        //         _id: 2,
        //         name: 'Learn Japan',
        //         description:
        //           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        //         thumbnail:
        //           'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
        //       },
        //       {
        //         _id: 3,
        //         name: 'Learn China',
        //         description:
        //           "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        //         thumbnail:
        //           'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
        //       },
        //     ])
        //     resolve()
        //   }, 1500)
        // })
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
