<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h3>List of your decks:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :id="deck.id"
          :key="deck.id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
  </div>
</template>

<script>
import DeckList from '@/components/Decks/DeckList'
export default {
  components: {
    DeckList,
  },

  // context: da thuc thi khi ket noi voi api
  // vd: context.asynch
  // sau khi xong se goi den callback
  // callback: set du lieu cho asyncData va template cua view co the truy cap vao va do ra DOM
  // asyncData(context) {
  //   // eslint-disable-next-line no-console
  //   // nuxt hoat dong khi lan dau tien trang web duoc refresh
  //   // luc do nuxt se su dung server de render ra DOM de cac search engine co the doc duoc
  //   // nen khi refresh lan dau tien thi asyncData dang hoat dong voi nuxt o tren server
  //   // nen console se xuat hien o terminal tren server
  //   // Tu lan thu 2 tro di, moi thu se tro ve Single Page Application -> do view xu ly
  //   // -> console se duoc thuc thi tren client
  //   console.log('asyncData is excuted!')
  //   return new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         decks: [
  //           {
  //             _id: 1,
  //             name: 'Learn English',
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //             thumbnail:
  //               'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
  //           },
  //           {
  //             _id: 2,
  //             name: 'Learn Japan',
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //             thumbnail:
  //               'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
  //           },
  //           {
  //             _id: 3,
  //             name: 'Learn China',
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //             thumbnail:
  //               'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
  //           },
  //         ],
  //       })
  //     }, 1500)
  //   })
  //     .then((data) => {
  //       return data
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // },
  // created() {
  //   this.$store.dispatch('setDecks', this.decks)
  //   console.log(this.$store.getters.decks)
  // },

  // fetch(context) {
  //   return new Promise((resolve, reject) => {
  //     // eslint-disable-next-line nuxt/no-timing-in-fetch-data
  //     setTimeout(() => {
  //       resolve({
  //         decks: [
  //           {
  //             _id: 1,
  //             name: 'Learn English',
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //             thumbnail:
  //               'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
  //           },
  //           {
  //             _id: 2,
  //             name: 'Learn Japan',
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //             thumbnail:
  //               'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
  //           },
  //           {
  //             _id: 3,
  //             name: 'Learn China',
  //             description:
  //               "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
  //             thumbnail:
  //               'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
  //           },
  //         ],
  //       })
  //     }, 1500)
  //   })
  //     .then((data) => {
  //       context.store.dispatch('setDecks', data.decks)
  //     })
  //     .catch((e) => {
  //       console.log(e)
  //     })
  // },
  computed: {
    decks() {
      return this.$store.getters.decks
    },
  },

  methods: {
    openModal() {
      this.$modal.open({ name: 'DeckFormModal' })
    },
  },
}
</script>

<style lang="scss">
.decks-list {
  li {
    margin-bottom: 1rem;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .deck {
    display: block;
  }
  .deck-card {
    display: flex;
    flex-direction: row;
    height: 250px;
    img {
      width: 250px;
      height: auto;
    }
  }
}
.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
