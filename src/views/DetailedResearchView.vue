<script>
import axios from 'axios';
export default {
    name: "DetailedView",
    data() {
        return {
            apartment: null,
            loading: true,
            base_API: 'http://127.0.0.1:8000/',
            store: 'storage/',
        }
    },
    mounted() {
        const url = this.base_API + 'api/apartments/' + this.$route.params.slug;
        console.log(url);
        axios.get(url)
            .then(response => {
                console.log(response);
                if (response.data.success) {
                    this.apartment = response.data.result[0];
                    console.log(response.data.result);
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
    computed: {
        googleMapsUrl() {
            if (this.apartment) {
                const address = encodeURIComponent(this.apartment.full_address);
                return `https://maps.google.com/maps?q=${address}&t=&z=5&ie=UTF8&iwloc=&output=embed`;
            } else {
                return '';
            }
        }
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
        <div class="row mt-3">
            <div class="col-12">
                <div class="card card_maps">
                    <div class="gmaps">
                        <iframe id="gmap" :src="googleMapsUrl" frameborder="0" scrolling="no" marginheight="0"
                            marginwidth="0">
                        </iframe>
                        <a href="https://www.whatismyip-address.com"></a><br>
                        <a href="https://www.embedgooglemap.net"></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>