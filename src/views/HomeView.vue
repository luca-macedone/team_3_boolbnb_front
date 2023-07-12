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
	}
}
</script>

<template>



  <Jumbotron></Jumbotron> 
  <BannerHome></BannerHome>


	<div class="container">

		<div class="row">
			<div class="d-flex justify-content-center  my-2 flex-column">
        <div class="d-flex justify-content-center flex-wrap">
          <img src="/logo_horizontal.svg" class=" img-fluid" alt="bool bnb logo"> 
              <img src="/most_wanted_logo.svg" class="most_wanted img-fluid" alt="most wanted apartments">
        </div>  
        <div class="text_area text-center">
          <hr class="hr_margin">
          <p class="ms-5 paragraph mt-5">See some of the best place for your special trip around the world! </p>
        </div>
          
        </div>

			<!-- card display ---------------------->

      <div class="row g-3 mt-3 mb-5" v-if="state.apartments">

          <HomeCardBig v-for="(apartment, index) in state.apartments.slice(0, 1)" :apartment="apartment" :index="index">
          </HomeCardBig>
       
          <HomeCard  v-for="(apartment, index) in state.apartments.slice(1, 7)" :apartment="apartment" :index="index">
          </HomeCard>
        
      </div>
      

    </div>


	</div>
	
</template>

<style lang="scss">
@use '../styles/app.scss';
</style>