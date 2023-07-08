<script>
import axios from 'axios';
import { useVuelidate } from '@vuelidate/core';
import { required, email, minLength, maxLength } from '@vuelidate/validators';
export default {
  name: 'MessageSingleApartment',
  props:
    [
      'apartment',
    ],
  setup: () => ({ v$: useVuelidate() }),

  data() {
    return {
      name: '',
      lastname: '',
      email: '',
      message: '',
      loading: false,
      success: false,
      errors: {},
      base_API: 'http://127.0.0.1:8000/',
    }
  },

  validations() {
    return {
      /*     name: { nullable, minLength: minLength(3), maxLength: maxLength(20) },
          lastname: { nullable, minLength: minLength(3), maxLength: maxLength(20) }, */
      email: { required, email, maxLength: maxLength(50) },
      message: { required, minLength: minLength(5), maxLength: maxLength(400) }
    }
  },
  methods: {

    async submitForm() {
      //console.log('1');
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) return;
      const btn = document.getElementById('my-btn-close');
      btn.click();
      this.sendForm();
    },

    sendForm() {
      //console.log('2')
      this.loading = true;
      const data = {
        email: this.email,
        message: this.message,
        apartment_id: this.apartment.id,
      };

      axios.post('http://127.0.0.1:8000/api/messages', data)
        .then((response) => {
          if (!response.data.success) {
            this.errors = response.data.errors;
          } else {
            this.email = '';
            this.message = '';
            this.success = false;
          }
          this.success = response.data.success;
          //console.log(this.success);
          //console.log(response);
          this.loading = false;
          //this.v$.$reset();
          setTimeout(() => {
            this.success = false;
          }, 3000);
        })
        .catch(error => {
          console.log(error);
          this.loading = false;
        });

    },
  }
}
</script>
<template>
  <div class="col-12 col-xl-4 pe-0 ps-xl-1 ps-0 col_message">
    <div class="card mb-3 card_message">
      <div class="p-3">
        <!--    <div v-if="success" class="alert alert-primary alert-dismissible fade show" role="alert">
          <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
          <strong>Alert Heading</strong> Alert Content
        </div>

        <script>
          var alertList = document.querySelectorAll('.alert');
            alertList.forEach(function (alert) {
              new bootstrap.Alert(alert)
            })
        </script> -->

        <div v-if="success" class="alert alert-success text-start" role="alert">
          Messaggio inviato con successo!
        </div>
        <form @submit.prevent="sendForm">
          <h3 class="text-center"><strong>Message to the owner</strong></h3>
          <label for="name" class="form-label">Name</label>
          <input v-model="name" type="text" class="form-control mb-4" name="name" id="name" aria-describedby="nameHelpId"
            placeholder="Insert your name here">

          <label for="surname" class="form-label">Surname</label>
          <input v-model="lastname" type="text" class="form-control mb-4" name="surname" id="surname"
            aria-describedby="surnameHelpId" placeholder="Insert your surname here">

          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="floatingInput" placeholder="Insert your email here"
            v-model="email">
          <div class="text-danger" v-if="v$.email.required.$invalid && v$.email.$error">
            This field is required
          </div>
          <div class="text-danger" v-if="v$.email.email.$invalid && v$.email.$error">
            Invalid email
          </div>

          <label for="message" class="form-label">Message</label>
          <textarea v-model="message" class="w-100 border-0" name="message" id="message" rows="5"
            placeholder="insert your message here"></textarea>
          <div class="text-danger" v-if="v$.message.required.$invalid && v$.message.$error">
            This field is required
          </div>
          <div class="text-danger" v-if="v$.message.minLength.$invalid && v$.message.$error">
            This field must have a minimum of 5 characters
          </div>
          <div class="text-danger" v-if="v$.message.maxLength.$invalid && v$.message.$error">
            This field must have a maximum of 400 characters
          </div>

          <div class="d-flex justify-content-end">
            <button class="btn btn-secondary" type="button" id="my-btn-close" data-bs-dismiss="offcanvas">Cancel</button>
            <button type="submit" class="btn btn-primary" :disabled="loading" @click="submitForm">{{ loading ?
              'Sending...' : 'Send' }}</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>