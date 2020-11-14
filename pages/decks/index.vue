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
        <li>
          <nuxt-link class="deck" to="/decks/1">
            <div class="card deck-card">
              <img
                src="https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/2">
            <div class="card deck-card">
              <img
                src="https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
        <li>
          <nuxt-link class="deck" to="/decks/3">
            <div class="card deck-card">
              <img
                src="https://img2.pngio.com/intl-word-v601-english-for-mac-english-class-wallpaper-png-1920_1080.png"
                alt="Thumbnail card"
              />
              <div class="card_body">
                <h3>Title card</h3>
                <p>Description card</p>
              </div>
            </div>
          </nuxt-link>
        </li>
      </ul>
      <!-- <input
        class="form_control"
        type="text"
        v-model="deckID"
        placeholder="Please enter deckID"
      />
      <button class="btn btn_success" @click="showDeck">Go to Deck</button> -->
    </div>
    <v-modal name="test">
      <div class="test_body">
        <h1>Hello test Modal</h1>
        <button class="btn btn_danger" @click.prevent="closeModal">
          Close Modal
        </button>
      </div>
    </v-modal>
  </div>
</template>

<script>
export default {
  methods: {
    openModal() {
      this.$modal.open({ name: 'test' })
    },
    closeModal() {
      this.$modal.close({ name: 'test' })
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
</style>

<style lang="scss" scoped>
.test_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
