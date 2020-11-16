<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck: {{ deck.name }}</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button
            class="btn btn_primary"
            @click.prevent="openModal('CreateCardModal')"
          >
            Create a card
          </button>
          <button
            class="btn btn_warning"
            @click.prevent="openModal('DeckFormModal')"
          >
            Edit deck
          </button>
        </div>
        <hr class="divide" />
        <div class="r">
          <card-list
            v-for="card in cards"
            :key="card._id"
            :keyword="card.keyword"
            :picture="card.picture"
          />
        </div>
      </div>
    </div>
    <!-- Modal -->
    <v-modal name="CreateCardModal">
      <div class="modal_body">
        <h2>Create a new Card</h2>
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
            <button class="btn btn_danger" @click.prevent="closeModal">
              Close
            </button>
            <button class="btn btn_success ml_3" @click.prevent="closeModal">
              Create
            </button>
          </div>
        </form>
      </div>
    </v-modal>
  </section>
</template>

<script>
import axios from 'axios'

import CardList from '@/components/Cards/CardList'
export default {
  components: {
    CardList,
  },
  asyncData(context) {
    return axios
      .get(
        `https://nuxt-lerning-english.firebaseio.com/decks/${context.params.id}.json`
      )
      .then((response) => {
        return {
          deck: response.data,
        }
      })
      .catch((e) => {
        context.error(e)
      })
  },
  data() {
    return {
      cards: [
        {
          _id: 1,
          picture:
            'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
          keyword: 'Room',
        },
        {
          _id: 2,
          picture:
            'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
          keyword: 'Room',
        },
        {
          _id: 3,
          picture:
            'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
          keyword: 'Room',
        },
        {
          _id: 4,
          picture:
            'https://www.kare-design.com/wp-content/uploads/2015/08/2.jpg',
          keyword: 'Room',
        },
      ],
    }
  },
  methods: {
    openModal(name) {
      if (name === 'CreateCardModal') {
        this.$modal.open({ name: 'CreateCardModal' })
      } else if (name === 'DeckFormModal') {
        this.$modal.open({ name: 'DeckFormModal' })
      }
    },
    closeModal() {
      this.$modal.close({ name: 'CreateCardModal' })
    },
  },
}
</script>

<style lang="scss">
section {
  padding-top: 3rem;
  .card {
    padding: 1rem;
    img {
      width: 60%;
    }
  }
  .divide {
    margin: 3rem 0;
  }
}

.modal_body {
  background-color: #fff;
  padding: 1rem;
}
</style>
