<template>
  <section class="page">
    <div class="card card-form">
      <div class="card_body">
        <h3 class="text_center">Register</h3>
        <form @submit.prevent="onSubmit">
          <div class="form_group">
            <label for="email">Email</label>
            <input
              id="email"
              v-model="email"
              class="form_control"
              type="text"
              placeholder="example@gmail.com"
            />
          </div>
          <div class="form_group">
            <label for="password">Password</label>
            <input
              id="password"
              v-model="password"
              class="form_control"
              type="password"
              placeholder="Please enter password"
            />
          </div>
          <div class="form_group">
            <label for="re-password">Re-Password</label>
            <input
              id="re-password"
              v-model="rePassword"
              class="form_control"
              type="password"
              placeholder="Please enter re-password"
            />
          </div>
          <div class="form_group">
            <button type="submit" class="btn btn_success btn-submit">
              Register
            </button>
          </div>
        </form>
        <div class="other text_center">
          <span>
            Have your account?
            <nuxt-link to="/login" tag="a">Login here</nuxt-link>
          </span>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  layout: 'auth',
  data() {
    return {
      email: '',
      password: '',
      rePassword: '',
    }
  },
  methods: {
    checkValidPassword() {
      return this.password === this.rePassword
    },
    onSubmit() {
      if (this.checkValidPassword()) {
        this.$axios
          .$post(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${process.env.fbApiKey}`,
            {
              email: this.email,
              password: this.password,
              returnSecureToken: true,
            }
          )
          .then((result) => console.log(result))
          .catch((e) => console.log(e))
      } else {
        console.log('Password is not valid!')
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  .card-form {
    width: 500px;
  }
  .btn-submit {
    width: 100%;
  }
}
</style>