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
                let size = 50
                let center = [this.apartment.longitude, this.apartment.latitude]
                const map = tt.map({
                    key: "7tj6HpFmzIL9ehuGRFCkdCQ9dRTvgWkk",
                    container: "map",
                    center: center,
                    zoom: 15,
                });

                map.on('load', () => {

                    let div = document.createElement('div')
                    div.innerHTML = `<strong>${this.apartment.title}</strong><br>${this.apartment.full_address}`;

                    let popup = new tt.Popup({
                        closeButton: false,
                        offset: size,
                        anchor: 'bottom'
                    }).setDOMContent(div)

                    let border = document.createElement('div')
                    border.className = 'marker-border'
                    let icon = document.createElement('div')
                    icon.className = 'marker-icon'
                    icon.style.backgroundImage = `url('http://127.0.0.1:8000/storage/${this.apartment.image}')`
                    border.appendChild(icon)


                    let marker = new tt.Marker({
                        element: border
                    }).setLngLat(center).setPopup(popup)
                    marker.addTo(map)
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
                <div class="pb-3 d-flex justify-content-between align-items-center">
                    <router-link to="/search" class="btn back_btn d-flex align-items-center gap-2 shadow">
                        <i class="fa-solid fa-arrow-left-long"></i>
                        Back
                    </router-link>
                </div>
                <div v-if="apartment">
                    <h1>{{ apartment.title }}</h1>
                    <p>
                        {{ apartment.full_address }}
                    </p>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12 d-flex justify-content-center px-0 pb-4 img_apartment">
                <div v-if="apartment" class="w-100">
                    <div>
                        <img class="img-fluid card border-0 card_shadow"
                            :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt="" @click="toggleFullscreen()">
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
            <MessageSingleApartment :apartment="apartment"></MessageSingleApartment>
        </div>
        <MapSingleApartment :apartment="apartment"></MapSingleApartment>
    </div>
</template>

<style lang="scss">
@use '../styles/partials/apartmentView.scss';

.marker-border {
    background-color: #303030;
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.marker-icon {
    background-position: center;
    background-size: 49px 49px;
    border-radius: 50%;
    position: absolute;
    left: 0.5px;
    top: 0.5px;
    height: 49px;
    width: 49px;
}
</style>
