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
    let sections = document.querySelectorAll('section');
    window.onscroll = () => {
      sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop -600;
        let height = sec.offsetHeight;

        if (top >= offset && top < offset + height) {
          sec.classList.add('show_animate');
        } 
        
        else{
          sec.classList.remove('show_animate');
        }


      })
    }
  },
}
</script>

<template>



  <Jumbotron></Jumbotron> 
  
    <BannerHome></BannerHome>
  
  

	<div class="container ">
		<div class="row justify-content-center">
      <section id="section_home" class="sec_2  flex-column">
        <div class="d-flex justify-content-center animate  my-2 flex-column animate">
          <div class="d-flex justify-content-center flex-wrap">
            <img src="/logo_horizontal.svg" class=" img-fluid" alt="bool bnb logo"> 
                <img src="/most_wanted_logo.svg" class="most_wanted img-fluid" alt="most wanted apartments">
          </div>  
         
            <hr class="">
            
          

        </div>
      
			

			<!-- card display ---------------------->
      
        <div class="row g-3 mt-3 mb-5 animate" v-if="state.apartments">

        <HomeCardBig v-for="(apartment, index) in state.apartments.slice(0, 1)" :apartment="apartment" :index="index">
        </HomeCardBig>

        <HomeCard  v-for="(apartment, index) in state.apartments.slice(1, 7)" :apartment="apartment" :index="index">
        </HomeCard>

        </div>

      </section>

      

    </div>


	</div>
	
</template>

<style lang="scss">
@use '../styles/app.scss';


</style>