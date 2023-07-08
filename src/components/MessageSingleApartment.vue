<script>
import axios from 'axios';
export default {
  name: 'MessageSingleApartment',
  props:
    [
      'apartment',
    ],

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
  methods: {
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
          }
          this.success = response.data.success;
          console.log(this.success);
          console.log(response);
          this.loading = false;
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

          <label for="message" class="form-label">Message</label>
          <textarea v-model="message" class="w-100 border-0" name="message" id="message" rows="5"
            placeholder="insert your message here"></textarea>
          <div class="d-flex justify-content-end">
            <button type="submit" class="btn btn-primary" :disabled="loading" @click="sendForm">{{ loading ?
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