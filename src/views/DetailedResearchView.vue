<script>
import axios from 'axios';
import MessageSingleApartment from '../components/MessageSingleApartment.vue'
import MapSingleApartment from '../components/MapSingleApartment.vue'
import DetailsSingleApartment from '../components/DetailsSingleApartment.vue';
export default {
    name: "DetailedResearchView",
    components: {
        MessageSingleApartment,
        MapSingleApartment,
        DetailsSingleApartment
    },
    data() {
        return {
            apartment: null,
            loading: true,
            base_API: 'http://127.0.0.1:8000/',
            store: 'storage/',
            showFullscreen: false,
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
                    zoom: 15,
                });

                map.on('load', () => {
                    new tt.Marker().setLngLat(center).addTo(map)
                })

                var scale = new tt.ScaleControl({
                    maxWidth: 80,
                    unit: 'imperial'
                });
                map.addControl(scale);
                scale.setUnit('metric')
                var nav = new tt.NavigationControl({});
                map.addControl(nav, 'top-right');

                var attributions = ['<a href="https://www.tomtom.com/mapshare/tools/">Report map issue</a>'];
                map.getAttributionControl().addAttribution(attributions);

                map.addControl(new tt.FullscreenControl({
                    container: document.querySelector('fullscreen-overlay')
                }));
            }
        },
        toggleFullscreen() {
            this.showFullscreen = !this.showFullscreen;
            if (this.showFullscreen) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = '';
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
    <div class="container text-white mt-5 p-0">
        <div class="row mt-5 align-items-center">
            <div class="col-12 p-0 title_apartment">
                <div v-if="apartment">
                    <h1>{{ apartment.title }}</h1>
                    <p>
                        {{ apartment.full_address }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center ps-0 pb-4 img_apartment">
                <div v-if="apartment" class="w-100">
                    <div>
                        <img class="img-fluid card_shadow" :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt=""
                            @click="toggleFullscreen()">
                    </div>
                    <div class="fullscreen-overlay" v-if="showFullscreen" @click="toggleFullscreen">
                        <div class="fullscreen-image-container">
                            <img class="fullscreen-image" :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="row h-100">
            <DetailsSingleApartment :apartment="apartment"></DetailsSingleApartment>
            <MessageSingleApartment></MessageSingleApartment>
        </div>
        <MapSingleApartment :apartment="apartment"></MapSingleApartment>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>