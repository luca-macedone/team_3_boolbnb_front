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
      message: { required, minLength: minLength(5), maxLength: maxLength(400) }
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
  <div class="col-12 col-xl-4 pe-0 ps-xl-1 ps-0 col_message">
    <div class="card mb-3 card_message">
      <div class="p-3">
        <div v-if="success" class="alert alert-success text-start" role="alert">
          Messaggio inviato con successo!
        </div>
        <form>
          <h3 class="text-center"><strong>Message to the owner</strong></h3>
          <div class="my-3">
            <label for="email" class="form-label">Email</label>
            <input type="email" class="form-control " id="floatingInput" placeholder="Insert your email here"
              v-model="email">
            <div class="text-danger" v-if="v$.email.required.$invalid && v$.email.$error">
              This field is required
            </div>
            <div class="text-danger" v-if="v$.email.email.$invalid && v$.email.$error">
              invalid email, email.boolbnb.com
            </div>
          </div>

          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="message" class="w-100 border-0" name="message" id="message" rows="3"
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
          </div>

          <div class="d-flex justify-content-end">
            <!-- <button class="btn btn-secondary" type="button" id="my-btn-close" data-bs-dismiss="offcanvas">Cancel</button> -->
            <button type="submit" class="btn btn-primary" id="my_btn_send_message" :disabled="loading"
              @click.prevent="submitForm()">{{
                loading ?
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