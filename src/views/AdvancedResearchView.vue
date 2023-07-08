<script>
import axios from 'axios';
export default {
    name: "SearchView",
    data() {
        return {
            apartments: null,
            loading: true,
            base_API: 'http://127.0.0.1:8000/',
            store: 'storage/',
            tomTom_API: 'https://api.tomtom.com/search/2/search/',
            key: '.json?key=gS8mw4nOWKsFSgJLqBsDJopb3q9ql31M&limit=1',
            search: '',
            range:'&radius=20000',
            btmRightPointLat:'',
            btmRightPointLong:'',
            topLeftPointLat:'',
            topLeftPointLong:'',
            constrainedApartmentsAPI:'http://127.0.0.1:8000/api/apartments',

        }
    },
    methods: {
        getImageFromPath(path) {
            console.log(this.base_API + 'storage/' + path);
            return this.base_API + 'storage/' + path;
        },
        getGps(fullAddress) {
            axios.get(this.tomTom_API + this.search + this.key )
            
                .then(response => {
                    /* console.log(response.data.results[0].viewport); */
                    this.btmRightPointLat=response.data.results[0].viewport.btmRightPoint.lat
                    this.btmRightPointLong=response.data.results[0].viewport.btmRightPoint.lon
                    this.topLeftPointLat=response.data.results[0].viewport.topLeftPoint.lat
                    this.topLeftPointlong=response.data.results[0].viewport.topLeftPoint.lon
                    this.getApartments()
                })
                .catch(error => {
                    // Gestisci l'errore della chiamata API
                    console.error(error);
                });

        },

        getApartments(){
            axios.get(`${this.constrainedApartmentsAPI}/${this.topLeftPointLat}/${this.topLeftPointlong}/${this.btmRightPointLat}/${this.btmRightPointLong}`)
            .then(response => {
                    console.log(response.data.result);
                    this.apartments=response.data.result
                })
                .catch(error => {
                    // Gestisci l'errore della chiamata API
                    console.error(error);
                });
        }
    },
    mounted() {
        const url = this.base_API + 'api/apartments/';
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    this.apartments = response.data.apartments.data;
                    console.log(this.apartments);
                    this.loading = true;
                } else {
                    this.$router.push({ name: 'NotFound' })
                }
            })
            .catch(error => {
                console.log(error);
                this.loading = false;
            });
    },
}
</script>

<template>
    <div class="container-fluid search_box_advanced rounded-3 my-5">
        <div class="d-flex align-items-center justify-content-between ">

            <div class="d-flex align-items-center ">

                <img class="pe-3" height="30" src="/pin_only.svg" alt="">

                <input class="input rounded-3 shadow me-2" type="search" name="search" id="search"
                    placeholder="  Where we go?" v-model="search">

                <div class="col d-flex justify-content-between py-3">
                    <a @click="getGps(query)" type="button" class="btn back_btn d-flex align-items-center gap-2 shadow"
                        href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Search
                    </a>
                </div>

            </div>

            <span>
                <label class="me-3" for="birthday">Check-in</label>
                <input class="input rounded-3 shadow" type="date" id="birthday" name="birthday">
            </span>


            <span>
                <label class="me-3 " for="birthday">Check-out</label>
                <input class="input rounded-3 shadow" type="date" id="birthday" name="birthday">
            </span>

        </div>

        <div class="d-flex align-items-center justify-content-between gap-4">

            <span class="">
                <label for="customRange2" class="form-label">Distance from center</label>
                <input type="range" class="form-range  " min="0" max="100" step="0.1" id="customRange2">
            </span>

            <input class="input rounded-3" type="number" name="guests" id="guests" placeholder="Guests">

            <input class="input rounded-3" type="number" name="guests" id="bathroom" placeholder="Bathroom">

            <!-- Button trigger modal -->
            <button type="button" class="btn back_btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                Services
            </button>

            <!-- Modal -->
            <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
                aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">

                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="staticBackdropLabel">Services</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>

                        <div class="modal-dialog modal-dialog-scrollable">
                            v-for
                            <span v-for="service in serveces" :key="index">
                                <label for="service">{{ services.service }}</label>
                                <input type="checkbox" name="service" id="service">
                            </span>
                        </div>

                        <div class="modal-footer">

                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>

    <div class="container mb-5">
        <div class="row m-0">
            <div v-for="apartment in apartments" class="col-12 col-lg-4">
                <div class="card h-100 mb-3 p-3 card_shadow">

                    <div class="h-100 w-100 d-flex flex-column">
                        <div class="d-flex flex-wrap flex-md-row justify-content-between gap-3 p-1 h-100">
                            <div class="list_img_wrapper">
                                <img class="w-100 " height="200" :src="getImageFromPath(apartment.image)"
                                    alt="{{ $apartment.title }}" />
                            </div>
                            <div>

                                <div class="fw-semibold">
                                    {{ apartment.title }}
                                </div>

                                <hr class="hr_margin_apartment justify-content-center">

                                <div class="fst-italic">
                                    {{ apartment.full_address }}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>