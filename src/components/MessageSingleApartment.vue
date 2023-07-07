<script>
export default {
  name: 'MessageSingleApartment',

  data() {
    return {
      name: '',
      email: '',
      message: '',
      loading: false,
      success: false,
      errors: {},
      showErrorMessage: false,
      base_API: 'http://127.0.0.1:8000/',
    }
  },
  methods: {
    sendForm() {
      this.loading = true;
      const data = {
        name: this.name,
        email: this.email,
        message: this.message
      };

      //console.log(data);
      this.errors = {};
      axios.put('http://127.0.0.1:8000/api/messages', data).then((response) => {

        if (!response.data.success) {
          this.errors = response.data.errors;
        } else {
          this.name = '';
          this.lastname = '';
          this.email = '';
          this.message = '';
        }
        this.success = response.data.success;
        this.loading = false;
      });
    },
    submitForm() {
      this.loading = true;
      // ... invia il messaggio ...
      setTimeout(() => {
        this.loading = false;
        this.success = false;
        this.errors = {};
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 5000);
      }, 5000);
    }


  }
}
</script>
<template>
  <div class="col-12 col-xl-4 ps-1 col-xl-4 col_message">
    <div class="card mb-3 card_message">
      <div class="p-3">
        <div v-if="success" class="alert alert-success text-start" role="alert">
          Messaggio inviato con successo!
        </div>
        <form @submit.prevent="sendForm()">
          <h3 class="text-center"><strong>Message to the owner</strong></h3>
          <label for="name" class="form-label">Name</label>
          <input type="text" class="form-control mb-4" name="name" id="name" aria-describedby="nameHelpId"
            placeholder="Insert your name here">

          <label for="surname" class="form-label">Surname</label>
          <input type="text" class="form-control mb-4" name="surname" id="surname" aria-describedby="surnameHelpId"
            placeholder="Insert your surname here">

          <label for="email" class="form-label">Email</label>
          <input type="email" class="form-control" id="floatingInput" placeholder="Insert your email here"
            v-model="email">

          <label for="content" class="form-label">Message</label>
          <textarea class="w-100 border-0" name="content" id="content" rows="5"
            placeholder="insert your message here"></textarea>
          <div class="d-flex justify-content-end">
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