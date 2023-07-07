<script>
import axios from 'axios';
import MessageApartment from '../components/MessageApartment.vue'
import MapSingleApartment from '../components/MapSingleApartment.vue'
//import tt from "@tomtom-international/web-sdk-services"
export default {
    name: "DetailedView",
    components: {
        MessageApartment,
        MapSingleApartment
    },
    data() {
        return {
            apartment: null,
            loading: true,
            base_API: 'http://127.0.0.1:8000/',
            store: 'storage/',
        }
    },
    methods: {
        initializeMap() {
            if (this.apartment) {
                let center = [this.apartment.longitude, this.apartment.latitude]
                const map = tt.map({
                    key: "7tj6HpFmzIL9ehuGRFCkdCQ9dRTvgWkk",
                    container: "map",
                    center: center,
                    zoom: 10,
                });

                map.on('load', () => {
                    new tt.Marker().setLngLat(center).addTo(map)
                })
            }
        },
    },
    mounted() {
        const url = this.base_API + 'api/apartments/' + this.$route.params.slug;
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.apartment = response.data.result[0];
                    this.loading = true;
                    this.initializeMap();
                } else {
                    this.$router.push({ name: 'NotFound' })
                }
            })
            .catch(error => {
                console.log(error);
                this.loading = false;
            });
    },
    computed() {
        this.initializeMap();
    }
}

</script>


<template>
    <div class="container text-white mt-5">
        <div class="row mt-5 align-items-center">
            <div class="col-12 title_apartment">
                <div v-if="apartment">
                    <h1>{{ apartment.title }}</h1>
                    <p>
                        {{ apartment.full_address }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 col-xl-8 d-flex justify-content-center pb-4 img_apartment">
                <div v-if="apartment">
                    <div>
                        <img class="img-fluid card_shadow" :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt="">
                    </div>
                </div>
                <div v-else>
                    <strong>No Apartments available</strong>
                </div>
            </div>
            <div class="col-12 col-xl-4 d-flex card_show gap-3 details py-3 card h-100" v-if="apartment">
                <h3 class="text-center pt-3"><strong>DETAILS:</strong></h3>
                <ul class="col-6 gap-2 list-unstyled">
                    <li><strong>Rooms: </strong>{{ apartment.rooms }}</li>
                    <li><strong>Beds: </strong>{{ apartment.beds }}</li>
                    <li><strong>Square meters: </strong>{{ apartment.square_meters }}</li>
                    <li><strong>Bathrooms: </strong>{{ apartment.bathrooms }}</li>
                </ul>
                <hr class="hr_margin justify-content-center">
                <h6><strong>Service:</strong></h6>
                <div v-if="apartment.services.length >= 1">
                    <ul class="d-flex list-unstyled col-12 bottom flex-wrap">
                        <li class="badge bg-success me-1 mb-1 d-flex align-items-center justify-content-center  p-2"
                            v-for=" service  in  apartment.services ">
                            {{ service.name }}
                        </li>
                    </ul>
                </div>
                <div v-else>
                    <li>
                        <strong>No services available</strong>
                    </li>
                </div>
            </div>
        </div>

        <MapSingleApartment></MapSingleApartment>
        <MessageApartment></MessageApartment>





































    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>