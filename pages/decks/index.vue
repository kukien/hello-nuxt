<template>
  <div>
    <div class="ct">
      <div class="d_flex justify_content_between my_3">
        <h2>Sua eo j ma sua</h2>
        <h3>List of your decks:</h3>
        <button class="btn btn_success" @click.prevent="openModal">
          Create a Deck
        </button>
      </div>
      <ul class="decks-list">
        <deck-list
          v-for="deck in decks"
          :key="deck._id"
          :name="deck.name"
          :description="deck.description"
          :thumbnail="deck.thumbnail"
        />
      </ul>
    </div>
    <!-- Modal -->
    <v-modal name="CreateDeckModal">
      <div class="modal_body">
        <h2>Create a new Deck</h2>
        <form action="">
          <div class="form_group">
            <label for="">Name:</label>
            <input
              class="form_control"
              type="text"
              placeholder="Please enter name deck"
            />
          </div>
          <div class="form_group">
            <label for="">Description:</label>
            <textarea
              class="form_control"
              placeholder="Please enter description"
            ></textarea>
          </div>
          <div class="form_group">
            <label for="">Thumbnail:</label>
            <input type="file" />
            <div class="preview"></div>
          </div>
          <div class="form_group d_flex justify_content_end">
            <button class="btn btn_success" @click.prevent="closeModal">
              Create
            </button>
            <button class="btn btn_danger ml_3" @click.prevent="closeModal">
              Close
            </button>
          </div>
        </form>
      </div>
    </v-modal>
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
  asyncData(context, callback) {
    // eslint-disable-next-line no-console
    // nuxt hoat dong khi lan dau tien trang web duoc refresh
    // luc do nuxt se su dung server de render ra DOM de cac search engine co the doc duoc
    // nen khi refresh lan dau tien thi asyncData dang hoat dong voi nuxt o tren server
    // nen console se xuat hien o terminal tren server
    // Tu lan thu 2 tro di, moi thu se tro ve Single Page Application -> do view xu ly
    // -> console se duoc thuc thi tren client
    console.log('asyncData is excuted!')
    // eslint-disable-next-line nuxt/no-timing-in-fetch-data
    setTimeout(() => {
      callback(null, {
        decks: [
          {
            _id: 1,
            name: 'Learn English',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            thumbnail:
              'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
          },
          {
            _id: 2,
            name: 'Learn Japan',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            thumbnail:
              'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
          },
          {
            _id: 3,
            name: 'Learn China',
            description:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
            thumbnail:
              'https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png',
          },
        ],
      })
    }, 1500)
  },
  // created de goi du lieu
  created() {},
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateDeckModal' })
    },
    closeModal() {
      this.$modal.close({ name: 'CreateDeckModal' })
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
