<script>

import { RouterLink } from 'vue-router';
import { state } from '../state';
export default {
	name: "HomeView",
	components: { RouterLink },
	data() {
		return {
			state,
		}
	},
	mounted() {
		this.state.getApartments(true);
	}
}
</script>

<template>

  <div class="d-flex flex-column">
    <div class="col-12 img-wrapper-jumbo">
      <img src="/jumbotron-home.png" alt="jumbotron house image" class="">

    </div>

    <!-- search ------------------>
    <div class="d-flex justify-content-center">
      <div class="d-flex align-items-center justify-content-between rounded-3 shadow gap-3 search_box_home ">
        <img class="" height="30" src="/pin_only.svg" alt="">
        <input class="input rounded-3 shadow w-100 " type="search" name="search" id="search" placeholder="Where we go?">
        
         
        <div class="d-flex justify-content-between py-3">
          <a type="button" class="btn back_btn d-flex align-items-center gap-2 shadow"
            href="http://localhost:5174/search">
            <i class="fa-solid fa-magnifying-glass"></i>
            Search
          </a>
        </div>
      </div>
    </div>
  </div>


  <div class="container-fluid  ">
    <div class=" rounded-3 mt-3 shadow dashboard_jumbotron mx-5">
      <div class="bg_text rounded-3 p-5 mb-4">
      <div class="container py-3 text_bnb_light">
        <h1 class="display-5 fw-semibold mb-5">
          Welcome to our platform for renting houses and apartments!
        </h1>
        <p class="col-md-8 fs-5">
          Here you can rent out your properties, update your account information, and manage all your listings in a simple and intuitive way.
          Furthermore, if you want to increase the visibility of your listings, you can purchase a sponsorship that will make them visible to a wider audience.

        </p>

        <div class="d-flex justify-content-between py-3">
          <a type="button" class="btn back_btn d-flex align-items-center gap-2 shadow" href="#">
            <i class="fa-solid fa-magnifying-glass"></i>
            Search
          </a>
        </div>
      </div>
    </div>
    </div>
  </div>

  <div class="container">
    


    
      <div class="text-center  my-2 ">
        <div class="d-flex justify-content-center">
          <img src="/logo_horizontal.svg" class="margin_negative" alt="bool bnb logo"> 
            
              <img src="/most_wanted_logo.svg" class="most_wanted" alt="most wanted apartments">
           
        </div>
            
          <hr class="hr_margin">
          <p class="ms-5 paragraph mt-5">See some of the best place for your special trip around the world! </p>
        </div>
         

      <!-- card display ---------------------->

      
      <div class="container-fluid">
        <div class="row">
          
        </div>
      </div>

      
      <div class="row g-3 mt-3 mb-5 flex-wrap">
        
        <div class="col-12 w-100 jumbo_card">
            <div  class="card my_card m-auto p-0 border-0 card_bottom">
              <h5 class="card-title text-white pl-3 pb-3">Card title</h5>
              <div class="card-img-overlay d-flex align-items-end m-3">

              </div>
              <img src="/pin_only.svg" class="card-img" alt="...">
              <div class="card-body w-100">
                <p class="card-text text-center">Some quick example text to build on the card title and make up the
                  bulk of
                  the
                  card's content.
                </p>
                <div class="col d-flex justify-content-center py-3 w-100">
                  <a type="button"
                    class="btn back_btn_card d-flex align-items-center gap-2 shadow w-50 justify-content-center" href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                      viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                      <path
                        d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                    </svg>
                    View Apartment
                  </a>

                  </div>

                </div>
            </div>

          </div>

        <div class="col-12 col-lg-4">
          <div  class="card my_card m-auto p-0 w-100 border-0">
            <h5 class="card-title text-white pl-3 pb-3">Card title</h5>
            <div class="card-img-overlay d-flex align-items-end m-3">
              
            </div>
            <img src="/pin_only.svg" class="card-img" alt="...">
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the
                bulk of
                the
                card's content.
              </p>
              <div class="col d-flex justify-content-center py-3 w-100">
                <a type="button"
                  class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                  </svg>
                  View Apartment
                </a>

              </div>

            </div>
          </div>

        </div>
        <div class="col-12 col-lg-4">
          <div class="card my_card m-auto p-0 w-100 border-0">
            <h5 class="card-title text-white pl-3 pb-3">Card title</h5>
            <div class="card-img-overlay d-flex align-items-end m-3">
              
            </div>
            <img src="/pin_only.svg" class="card-img" alt="...">
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the
                bulk of
                the
                card's content.
              </p>
              <div class="col d-flex justify-content-center py-3 w-100">
                <a type="button"
                  class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                  </svg>
                  View Apartment
                </a>

              </div>

            </div>
          </div>

        </div>
        <div class="col-12 col-lg-4">
          <div class="card my_card m-auto p-0 w-100 border-0">
            <h5 class="card-title text-white ">Card title</h5>
            <div class="card-img-overlay d-flex align-items-end m-3">
              
            </div>
            <img src="/pin_only.svg" class="card-img" alt="...">
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the
                bulk of
                the
                card's content.
              </p>
              <div class="col d-flex justify-content-center py-3">
                <a type="button"
                  class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center" href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" height="1em"
                    viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
                    <path
                      d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
                  </svg>
                  View Apartment
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    
  </div>

	<div class="d-flex flex-column">
		<div class="col-12 img-wrapper-jumbo">
			<img src="/jumbotron-home.jpg" alt="jumbotron house image" class="">
		</div>

		<!-- search ------------------>
		<div class="d-flex justify-content-center">
			<div class="d-flex align-items-center justify-content-between rounded-3 shadow gap-3 search_box_home ">
				<img class="" height="30" src="/pin_only.svg" alt="">
				<input class="input rounded-3 shadow w-50 " type="search" name="search" id="search"
					placeholder="Where we go?">
				<span>
					<label class="" for="birthday"></label>
					<input class="input rounded-3 shadow" type="date" id="in" name="in">
				</span>
				<span>
					<label class=" " for="birthday"></label>
					<input class="input rounded-3 shadow" type="date" id="out" name="out">
				</span>
				<div class="d-flex justify-content-between py-3">
					<RouterLink type="button" class="btn back_btn d-flex align-items-center gap-2 shadow"
						:to="{ name: 'search' }">
						<i class="fa-solid fa-magnifying-glass"></i>
						Search
					</RouterLink>
				</div>
			</div>
		</div>
	</div>


	<div class="container-fluid  ">
		<div class=" rounded-3 mt-3 shadow dashboard_jumbotron mx-5">
			<div class="bg_text rounded-3 p-5 mb-4">
				<div class="container py-3 text_bnb_light">
					<h1 class="display-5 fw-semibold mb-5">
						Benvenut* nella nostra piattaforma di affitto case e appartamenti!
					</h1>
					<p class="col-md-8 fs-5">
						Qui potrai
						mettere in affitto le tue
						proprietà, modificare i dati del tuo account e gestire tutti i tuoi annunzi in modo semplice e
						intuitivo.
					</p>

					<div class="d-flex justify-content-between py-3">
						<RouterLink :to="{ name: 'search' }" class="btn back_btn d-flex align-items-center gap-2 shadow">
							<i class="fa-solid fa-magnifying-glass"></i>
							Search
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</div>

	<div class="container">

		<div class="container">
			<div class="text-center  my-2 ">
				<img src="/logo_horizontal.svg" class="margin_negative" alt="">
				<span class="most_header">most wanted</span>
				<hr class="hr_margin">
				<p class="ms-5 paragraph mt-5">See some of the best place for your special trip around the world! </p>
			</div>

			<!-- card display ---------------------->
			<div class="row g-3 mt-3 mb-5" v-if="state.apartments">

				<div class="col-12 col-lg-4" v-for="apartment in state.apartments.slice(0, 6)">
					<div class="card my_card m-auto p-0 w-100 border-0">
						<div class="card-img-overlay d-flex align-items-end">
							<h5 class="card-title text-white pl-3 pb-3">{{ apartment.title }}</h5>
						</div>
						<img :src="state.getImageFromPath(apartment.image)" class="card-img" alt="...">
						<div class="card-body">
							<!-- <p class="card-text text-center">
								{{ apartment.name }}
							</p> -->
							<div class="col d-flex justify-content-center py-3">
								<RouterLink
									class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center"
									:to="{ name: 'apartment', params: { slug: apartment.slug } }">
									<svg xmlns="http://www.w3.org/2000/svg" height="1em"
										viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. -->
										<path
											d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z" />
									</svg>
									View Apartment
								</RouterLink>
							</div>

						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss">
@use '../styles/app.scss';
</style>