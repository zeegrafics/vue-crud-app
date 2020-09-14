<template>
  <b-container>
      <b-row class="mt-4">
          <b-col cols="3"></b-col>
          <b-col class="mt-4" cols="6">
            <b-form>
            <b-form-group
                id="input-group-1"
                label="Email address:"
                label-for="input-1"
                description="We'll never share your email with anyone else."
            >
                <b-form-input
                id="input-1"
                v-model.trim="loginForm.email"
                type="email"
                required
                placeholder="Enter email"
                ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                <b-form-input
                id="input-2"
                v-model.trim="loginForm.password"
                type="password"
                required
                placeholder="Password"
                ></b-form-input>
            </b-form-group>

            <b-button @click="loginUser" variant="primary">Submit</b-button>
            </b-form>
          </b-col>
          <b-col cols="3"></b-col>
      </b-row>
  </b-container>
</template>

<script>
import { mapActions } from 'vuex'
const fb = require('../../firebase')
    export default {
        data() {
            return {
                loginForm: {
                    email: '',
                    password: ''
                }
            }
        },
        methods:{
        ...mapActions([
            'login'
        ]),
          loginUser() {
              fb.auth.signInWithEmailAndPassword(this.loginForm.email, this.loginForm.password).then(data => {
                  console.log(data);
                  this.login({data: data});
                  this.$router.push('/');
              }).catch(err => {
                  console.log(err)
              })
          }
        }
    }
</script>