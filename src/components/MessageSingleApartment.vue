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
      email: { required, email, maxLength: maxLength(50) },
      message: { required, minLength: minLength(5), maxLength: maxLength(400) },
      name: { minLength: minLength(1), maxLength: maxLength(100) },
      lastname: { minLength: minLength(1), maxLength: maxLength(100) }

    };
  },
  methods: {

    async submitForm() {
      //console.log('1');
      const isFormCorrect = await this.v$.$validate()
      if (!isFormCorrect) {
        return;
      }

      //const btn = document.getElementById('my_btn_send_message');
      //btn.click();
      this.sendForm();
    },

    sendForm() {
      //console.log('2')
      this.loading = true;
      const data = {
        email: this.email,
        message: this.message,
        name: this.name,
        lastname: this.lastname,
        apartment_id: this.apartment.id,
      };
      //console.log('Send form');
      //console.log('Email:', this.email);
      //console.log('Message:', this.message);
      axios.post('http://127.0.0.1:8000/api/messages', data)
        .then((response) => {
          if (!response.data.success) {
            this.errors = response.data.errors;
          } else {
            this.email = '';
            this.message = '';
            this.name = '';
            this.lastname = '';
            this.success = false;
          }
          this.success = response.data.success;

          this.loading = false;
          this.v$.$reset();
          setTimeout(() => {
            this.success = false;
          }, 3000);
        })
        .catch(error => {
          console.error(error);
          this.loading = false;
        });

    },
  }
}
</script>
<template>
  <div class="col-12 detail_card mb-0 col_message message_card h-100">
    <div class="card_message shadow p-3 h-100">

      <div v-if="success" class="alert alert-success text-start" role="alert">
        Messaggio inviato con successo!
      </div>
      <form>
        <h2 class="text_color fw-normal">Write a Message</h2>
        <div class="my-3">
          <label for="email" class="text_color form-label">Email</label>
          <input type="email" class="form-control " id="floatingInput" placeholder="Insert your email here"
            v-model="email">
          <div class="text-danger" v-if="v$.email.required.$invalid && v$.email.$error">
            This field is required
          </div>
          <div class="text-danger" v-if="v$.email.email.$invalid && v$.email.$error">
            invalid email, ex.email.boolbnb.com
          </div>
        </div>

        <div class="my-3">
          <label for="name" class="text_color form-label">name</label>
          <input type="name" class="form-control" id="floatingInput" placeholder="Insert your name here" v-model="name">
          <div class="text-danger" v-if="v$.name.$error">
            invalid name, it must be less than 100 characters ex.John
          </div>
        </div>

        <div class="my-3">
          <label for="lastname" class="text_color form-label">lastname</label>
          <input type="lastname" class="form-control" id="floatingInput" placeholder="Insert your lastname here"
            v-model="lastname">
          <div class="text-danger" v-if="v$.lastname.$error">
            invalid lastname, it must be less than 100 characters ex.Doe
          </div>
        </div>

        <div class="mb-3">
          <label for="message" class="form-label text_color">Message</label>
          <textarea v-model="message" class="w-100 border-0 rounded-2 p-2" name="message" id="message" rows="3"
            placeholder="Insert your message here"></textarea>
          <div class="text-danger" v-if="v$.message.required.$invalid && v$.message.$error">
            This field is required
          </div>
          <div class="text-danger" v-if="v$.message.minLength.$invalid && v$.message.$error">
            This field must have a minimum of 5 characters
          </div>
          <div class="text-danger" v-if="v$.message.maxLength.$invalid && v$.message.$error">
            This field must have a maximum of 400 characters
          </div>
        </div>

        <div class="d-flex justify-content-end">
          <!-- <button class="btn btn-secondary" type="button" id="my-btn-close" data-bs-dismiss="offcanvas">Cancel</button> -->
          <button type="submit" class="btn back_btn d-flex align-items-center gap-2" id="my_btn_send_message"
            :disabled="loading" @click.prevent="submitForm()">{{
              loading ?
              'Sending...' : 'Send' }}</button>
        </div>
      </form>

    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>