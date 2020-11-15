<template>
  <section>
    <div class="r">
      <div class="ct text_center">
        <h3>Deck #{{ $route.params.id }}: Learn English By Sky Alberk</h3>
        <div class="tools">
          <button class="btn btn_success">Start now</button>
          <button class="btn btn_primary" @click.prevent="openModal">
            Create a card
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
  </section>
</template>

<script>
import CardList from '@/components/Cards/CardList'
export default {
  components: {
    CardList,
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
  validate({ params }) {
    // eslint-disable-next-line-no-console
    console.log(params)
    return /^[0-9]$/.test(params.id)
  },
  methods: {
    openModal() {
      this.$modal.open({ name: 'CreateCardModal' })
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
