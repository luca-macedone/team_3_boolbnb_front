<script>
import { RouterLink } from 'vue-router';
import { state } from '../state';
export default{
    name: 'Jumbotron',
    components: {
        RouterLink
    },
    data(){
        return{
            state
        }
    },
    mounted() {
		this.state.getApartments(true);
    const placeholderPhrases = [
    "Search your next location...",
    "Find a place to relax...",
    "Explore and have fun...",
    "Start a trip and don't mind nothing else...",
    "Discover new adventures...",
    "Uncover hidden gems...",
    "Escape to your dream destination...",
    "Seek out new experiences...",
    "Plan your perfect getaway...",
    "Embark on a journey of discovery...",
    "Find your home away from home...",
    "Experience the world at your fingertips...",
    "Create memories that last a lifetime...",
    "Immerse yourself in culture and beauty...",
    "Indulge in the joy of travel...",
    "Let your wanderlust guide you..."
];
    const searchInput = document.querySelector(".search_input");

    function getRandomPhrase() {
      const randomIndex = Math.floor(Math.random() * placeholderPhrases.length);
      return placeholderPhrases[randomIndex];
    }

    function rotatePlaceholder() {
      searchInput.placeholder = getRandomPhrase();
    }

    // Cambia il placeholder ogni 2 secondi
    setInterval(rotatePlaceholder, 2000);


    //animazione

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        console.log(entry)
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    })
    const hidden_elements = document.querySelectorAll('.hidden');
    hidden_elements.forEach((el) => observer.observe(el));

	}
}

</script>

<template>
   <div class="d-flex flex-column">
		<div class="col-12 img-wrapper-jumbo">
			<img src="/jumbo_2.png" alt="jumbotron house image" class="">
		</div>

		<!-- search ------------------>
		<div id="section_search" class="d-flex justify-content-center hidden">
			<div class="d-flex align-items-center justify-content-between rounded-3 shadow gap-3 search_box_home ">
				<img class="" height="30" src="/pin_only.svg" alt="">
				<router-link :to="{ name: 'search'}" class="w-100"> <input class="input rounded-3 shadow w-100 search_input" type="search" name="search" id="search"
					placeholder="Where we go?" >
          </router-link>
				
				<div class="d-flex justify-content-between py-3 ">
					<RouterLink type="button" class="btn back_btn d-flex align-items-center gap-2 shadow "
						:to="{ name: 'search' }">
						<i class="fa-solid fa-magnifying-glass"></i>
						<span class="small_display ">Search</span> 
					</RouterLink>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss';
</style>