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
        this.$store
          .dispatch('addDeck', deckData)
          .then(() => this.$modal.close({ name: 'DeckFormModal' }))
      } else {
        this.$store
          .dispatch('editDeck', deckData)
          .then(() => {
            this.$modal.close({ name: 'DeckFormModal' })
            this.$router.push('/decks')
          })
      }
    },
  },
}
</script>
