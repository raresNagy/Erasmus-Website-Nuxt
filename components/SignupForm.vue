<template>
  <form 
    id="sign-up-form"
    @submit.prevent="handleSubmit"
  >
    <div class="title">
      Sign up
    </div>
    <div class="input-container">
      <label>E-mail</label>
      <input
        v-model="email"
        type="email"
        placeholder="email"
        required
      >
    </div>
    <div class="input-container">
      <label>Password</label>
      <input
        type="password"
        placeholder="password"
        required
      >
      <div 
        v-if="passwordError"
        class="error"
      >
        {{ passwordError }}
      </div>
    </div>
    <select
      id="country"
      v-model="country"
      name="Country"
      placeholder="Select a country"
      form="sign-up-form"
      required
    >
      <option 
        value=""
        selected
      >
        Select a country
      </option>
      <option value="France">
        France
      </option>
      <option value="Poland">
        Poland
      </option>
      <option value="Portugal">
        Portugal
      </option>
      <option value="Romania">
        Romania
      </option>
    </select>
    <div class="submit">
      <button id="sign-up">
        Sign Up
      </button>
    </div>
  </form>
</template>

<script lang="ts">
import { insertUser } from '~/server/db/schema'
import { password } from "bun"


const minPasswdLength = 8


export default {
  data() {
    return {
      email: '',
      password: '',
      country: '',
      passwordError: ''
    }
  },
  methods: {

    handleSubmit() {

      if (!(this.password.length >= minPasswdLength)) {
        this.passwordError = `Password must be at least ${minPasswdLength} characters long`
      } else {
        this.passwordError = ''
      }
      if (this.passwordError === '') {
        insertUser({
          name: "test",
          email: this.email,
          country: this.country,
          passwordHash: password.hashSync(this.password)
        })
      }
    }
  }

}

</script>

<style>
.register {
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: center;
}

main {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
}

#sign-up-form {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding: 4%;
  font-size: 1.2em;
  background-color: var(--cloud-blue);
  border-radius: 20px;
  box-shadow: #aee4ffbf 0px 10px 30px;

}

.sign-up-form div {
  margin: 2% 0;
}

.sign-up-form .title {
  font-weight: 800;
  font-size: 140%;
}

.input-container {
  display: flex;
  flex-direction: column;
}

label,
input {
  margin: 3% 1%;
}

.error {
  font-size: .6em;
  color: red;
  font-weight: bold;
}
</style>