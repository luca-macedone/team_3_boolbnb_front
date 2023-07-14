<script>
import HomeCard from '../components/HomeCard.vue';
import HomeCardBig from '../components/HomeCardBig.vue';
import BannerHome from '../components/BannerHome.vue';
import Jumbotron from '../components/Jumbotron.vue';
import { RouterLink } from 'vue-router';
import { state } from '../state';
export default {
  name: "HomeView",
  components: {
    RouterLink,
    Jumbotron,
    BannerHome,
    HomeCard,
    HomeCardBig
  },
  data() {
    return {
      state,
    }
  },
  mounted() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        //console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    })
    const hidden_elements = document.querySelectorAll('.hidden');
    hidden_elements.forEach((el) => observer.observe(el));
  },
}
</script>

<template>
  <div class="container">
    <Jumbotron></Jumbotron>
  </div>

  <BannerHome></BannerHome>



  <div class="container d-flex justify-content-center">
    <div class="row justify-content-center w-100" v-if="state.apartments && state.apartments.length > 0">
      <section id="section_home" class="sec_2 hidden d-flex flex-column w-100 align-items-center">
        <div class="d-flex justify-content-center  my-2 flex-column ">
          <div class="d-flex justify-content-center flex-wrap ">
            <img src="/logo_horizontal.svg" class=" img-fluid" alt="bool bnb logo">
            <img src="/most_wanted_logo.svg" class="most_wanted img-fluid" alt="most wanted apartments">
          </div>
          <hr class="">
        </div>



        <!-- card display ---------------------->

        <div class="row g-3 mt-3 mb-5 w-100 " v-if="state.apartments">

          <HomeCard v-for="(apartment, index) in state.apartments.slice(0, 6)" :apartment="apartment" :index="index">
          </HomeCard>

        </div>

      </section>



    </div>


  </div>
</template>

<style lang="scss">
@use '../styles/app.scss';
</style>