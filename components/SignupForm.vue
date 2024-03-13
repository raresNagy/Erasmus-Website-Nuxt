<template>
  <form 
    id="sign-up-form"
    @submit.prevent="handleSubmit"
  >
    <div class="title">
      Sign up
    </div>
    <div class="input-container">
      <label for="name">
        Full Name
      </label>
      <input
        v-model="name"
        type="text"
      >
    </div>
    <div class="input-container">
      <label for="email">E-mail</label>
      <input
        id="email"
        v-model="email"
        type="email"
        placeholder=""
        required
      >
    </div>
    <div class="input-container">
      <label>Password</label>
      <input
        id="password"
        v-model="password"
        type="password"
        placeholder=""
        required
      >
      <div
        v-if="passwordLengthError"
        class="error"
      >
        {{ passwordLengthError }}
      </div>
    </div>
    <div class="input-container">
      <label for="confirm-password"> Confirm password </label>
      <input 
        id="confirm-password"
        v-model="confirm_password"
        type="password"
        name="confirm-password"
      >
      <div 
        
        v-if="passwordConfirmationError" 
        class="error"
      >
        {{ passwordConfirmationError }}
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
      <button
        id="sign-up"
        @submit="handleSubmit"
      >
        Sign Up
      </button>
    </div>
  </form>
</template>

<script lang="ts">


const minPasswdLength = 8

export default {
  data() {
    return {
      name: '',
      email: '',
      password: '',
      confirm_password: '',
      country: '',
      passwordLengthError: '',
      passwordConfirmationError: ''
    }
  },
  methods: {

    handleSubmit() {

      if (this.password.length < minPasswdLength) {
        this.passwordLengthError = `Password must be at least ${minPasswdLength} characters long`
      } else if (this.password !== this.confirm_password) {
        this.passwordLengthError = '';
        this.passwordConfirmationError = `Passwords do not match`;
        console.log("no match, here's the error: ", this.passwordConfirmationError);
      } else {
        this.passwordLengthError = '';
        $fetch('/api/auth/register', {
          headers: {
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: {
            name: this.name,
            email: this.email,
            country: this.country,
            passwordHash: this.password
          }
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
  max-width: 500px;
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

input:valid {
  color: yellowgreen;
}

input:invalid {
  color: orangered;
}

.error {
  font-size: .6em;
  color: red;
  font-weight: bold;
}
</style>