<template>
  <div>
    <default-header></default-header>
    <Nuxt />
    <!-- Modal -->
    <v-modal name="DeckFormModal">
      <div class="modal_body">
        <h2>Create a new Deck</h2>
        <deck-form @submit="onSubmit" />
      </div>
    </v-modal>
    <default-footer></default-footer>
  </div>
</template>

<script>
import axios from 'axios'

import DeckForm from '@/components/Decks/DeckForm'
import DefaultFooter from '@/components/Footer/DefaultFooter'
import DefaultHeader from '@/components/Header/DefaultHeader'
export default {
  components: {
    DeckForm,
    DefaultHeader,
    DefaultFooter,
  },
  methods: {
    onSubmit(deckData) {
      axios
        .post(
          'https://nuxt-lerning-english.firebaseio.com/decks.json',
          deckData
        )
        .then((data) => {
          console.log(data)
        })
        .catch((e) => {
          console.log(e)
        })
    },
  },
}
</script>
