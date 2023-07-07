<script>
import axios from 'axios';

export default {
  name: 'AppHeader',
  data() {
    return {
      user: null,
      logged_in: false,
      // base_API: 'http://127.0.0.1:8000/',
      // user_endpoint: 'api/user/details',
      user_details_url: 'http://127.0.0.1:8000/api/user/details',
    }
  },
  methods: {
    get_user() {
      delete axios.defaults.headers.common['X-Requested-With'];
      axios({
        method: 'get',
        url: this.user_details_url,
        headers: {
          'X-Requested-With': 'XMLHttpRequest',
        }
      })
        .then(response => {
          console.log(response);
        })
    }
  },
  mounted() {
    this.get_user();
    //console.log(url);
    /*axios.get(url)
        .then(response => {
            console.log(response);
            if (response.data.success) {
                this.user = response.data.result[0];
                console.log(response.data.result);
                this.loading = true;
            } else {
                this.$router.push({ name: 'NotFound' })
            }
        })
        .catch(error => {
            console.log(error);
            this.loading = false;
        });*/
  },

}
</script>
<template>
  <header class="shadow">
    <div class="container-fluid">
      <div class="row">
      <div class="text-decoration-none d-flex justify-content-between align-items-center">
        <router-link :to="{ 'name': 'HomeView' }">
        <div v-if="this.user">
          <p>Ciccio</p>
        </div>
        <div v-else class="d-flex justify-content-between align-items-center text-dark">
          <i class="fa-solid fa-circle-user fa-2x"></i>
          <p class="mb-0 ms-3">Login/Register</p>
        </div>
      </router-link>
      </div>
        <div class="logo_wrapper"></div>
        <!--<img class="logo_wrapper" src="../../public/logo_horizontal.svg" alt="">-->
      </div>
      
    </div>
  </header>
</template>

<style lang="sass" scoped>

</style>
