<template>
  <div>
    <default-header></default-header>
    <Nuxt />
    <!-- Modal -->
    <v-modal v-slot="payload" name="DeckFormModal">
      <div class="modal_body">
        <h2>
          {{ payload && payload.payload ? 'Edit a Deck' : 'Create a new Deck' }}
        </h2>
        <deck-form :deck="payload.payload" @submit="onSubmit" />
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
      if (deckData && !deckData.id) {
        this.$store.dispatch('addDeck', deckData)
      } else {
        const deckId = deckData.id
        delete deckData.id
        axios
          .put(
            'https://nuxt-lerning-english.firebaseio.com/decks/' +
              deckId +
              '.json',
            deckData
          )
          .then((data) => {
            console.log(data)
          })
          .catch((e) => {
            console.log(e)
          })
      }
    },
  },
}
</script>
