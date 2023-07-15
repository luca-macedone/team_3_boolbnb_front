<script>
import { state } from '../state.js';
import ApartmentCard from '../components/ApartmentCard.vue';
import AllApartmentMap from '../components/AllApartmentMap.vue';

export default {
    name: "SearchView",
    components: {
        ApartmentCard,
        AllApartmentMap
    },
    data() {
        return {
            state,
            // apartments: null,
            loading: true,
            base_API: 'http://127.0.0.1:8000/',
            store: 'storage/',
            tomTom_API: 'https://api.tomtom.com/search/2/search/',
            key: '.json?key=gS8mw4nOWKsFSgJLqBsDJopb3q9ql31M&limit=1',
            search: '',
            range: 20,
            rooms: null,
            beds: null,
            services: null,
            selected_services: [],
        }
    },
    methods: {
        add_service(service_id) {
            // if (this.selected_services.length > 0) {
            // console.log('add_service')
            if (!this.selected_services.includes(service_id)) {
                this.selected_services.push(service_id);
            } else {
                this.selected_services.splice(this.selected_services.indexOf(service_id), 1)
            }
            // }
        },
        markBox(service_id) {
            // console.log('marked')
            if (this.selected_services.length > 0) {
                if (this.selected_services.includes(service_id)) {
                    return 'marked';
                }
            }
        }
    },
    mounted() {
        

         this.state.getApartments(); // Aspetta che apartments non sia più null
         this.state.getServices();

        // console.log(state.apartments);
    },

}
</script>

<template>
    <div class="container-fluid body_container p-0" id="advanced_research">
        <nav class="p-3 p-lg-5 research_banner">
            <div class="container ">
                <h1 class="display-5 fw-semibold m-0">Advanced Research</h1>
                <div class="d-flex align-items-center gap-3">
                    <!-- ! da inserire @keyup="state.getSuggestions(search)" una volta che il datalist dei suggerimenti funzionera' -->
                    <input type="text" class="form-control searchbar_input" v-model="search" list="suggestions"
                        id="location_input" placeholder="Where you want to go?">

                    <!-- <datalist id="suggestions">
                        <option :label="suggestion.segmentents" v-for="suggestion in state.suggestions">{{
                            suggestion.segmentents }}</option>
                    </datalist> -->

                    <div class="">
                        <label for="distance_range_input" class="form-label">Range of research (Km)</label>
                        <input list="range_markers" type="range" class="form-range" v-model="range" min="10" max="50"
                            step="10" id="distance_range_input">
                        <datalist id="range_markers">
                            <option value="10" label="10"></option>
                            <option value="20" label="20"></option>
                            <option value="30" label="30"></option>
                            <option value="40" label="40"></option>
                            <option value="50" label="50"></option>
                        </datalist>
                    </div>
                </div>
                <div class="d-flex justify-content-between align-items-end flex-wrap w-100 gap-5">
                    <div class="d-flex align-items-end gap-3">
                        <div>
                            <button type="button" class="btn searchbar_btn px-5" data-bs-toggle="modal"
                                data-bs-target="#services_modal">Services</button>
                        </div>
                        <div class="">
                            <label for="beds" class="form-label">Beds</label>
                            <input type="number" class="form-control searchbar_input" name="beds" min="1" step="1" id="beds"
                                aria-describedby="helpId" placeholder="Everything" v-model="beds">
                        </div>
                        <div class="">
                            <label for="rooms" class="form-label">Rooms</label>
                            <input type="number" class="form-control searchbar_input" name="rooms" min="1" step="1"
                                v-model="rooms" id="rooms" aria-describedby="helpId" placeholder="Everything">
                        </div>
                    </div>

                    <button type="button" class="btn searchbar_btn search px-5"
                        @click="state.getGps(search, range, rooms, beds, selected_services)">Search</button>

                    <div class="modal fade" id="services_modal" data-bs-backdrop="static" data-bs-keyboard="false"
                        tabindex="-1" aria-labelledby="services_modal_label" aria-hidden="true">
                        <div class="modal-dialog">
                            <div class="modal-content">

                                <div class="modal-header">
                                    <h1 class="modal-title fs-5" id="services_modal_label">Services</h1>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                                </div>
                                <div class="modal-body d-flex justify-content-center align-items-center gap-3 flex-wrap">
                                    <div class="service_check d-flex align-items-center gap-2 border rounded px-3 py-2"
                                        @click="add_service(service.id)" v-for="service in state.services"
                                        :class="markBox(service.id)">
                                        {{ service.name }}
                                    </div>
                                </div>

                                <!-- <div class="modal-footer"></div> -->
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </nav>
        <div class="container">
            <div class="row g-3 m-5">
                <ApartmentCard v-for="apartment in state.researchedApartments" :title="apartment.title"
                    :beds="apartment.beds" :rooms="apartment.rooms" :full_address="apartment.full_address"
                    :image="apartment.image" :slug="apartment.slug" />
            </div>
            <section class="hidden maps">
                <AllApartmentMap></AllApartmentMap>
            </section>
        </div>
    </div>
</template>

<style lang="scss">
section {
    display: grid;
    place-items: center;
    align-content: center;
    min-height: 50vh;
    width: 100%;
}

.hidden {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(-100%);
    transition: all 0.6s;
}

.hidden .maps {
    opacity: 0;
    filter: blur(5px);
    transform: translateX(+100%);
    transition: all 0.6s;
    width: 100%;
}
</style>