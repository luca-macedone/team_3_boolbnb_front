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
    }
}
</script>

<template>
    <div class="container-fluid text-white mt-5">
        <div class="row mt-5">
            <div class="col-6 mt-3">
                <div v-if="apartment">
                    <div class="img_project text-center py-3 position-relative">
                        <img class="img-fluid" height="600" :src="'http://127.0.0.1:8000/storage/' + apartment.image"
                            alt="">
                        <div class="eye">
                            <i class="fa-solid fa-eye fa-beat"></i>
                        </div>
                    </div>
                </div>
                <div v-else>
                    <strong>No Apartments image</strong>
                </div>
            </div>

            <div class="col-6 mt-4 text-bg-dark" v-if="apartment">
                <h1>{{ apartment.title }}</h1>
                <ul>
                    <li><strong>Rooms: </strong>{{ apartment.rooms }}</li>
                    <li><strong>Beds: </strong>{{ apartment.beds }}</li>
                    <li><strong>Square meters: </strong>{{ apartment.square_meters }}</li>
                    <li><strong>Bathrooms: </strong>{{ apartment.bathrooms }}</li>
                    <li><strong>Full address: </strong>{{ apartment.full_address }}</li>
                </ul>
                <ul class="d-flex list-unstyled gap-3 mt-2" v-if="apartment.services">
                    <li class="badge bg-success d-flex align-items-center justify-content-center p-2"
                        v-for="service in apartment.services">
                        {{ service.name }}
                    </li>
                </ul>
                <div v-else>
                    <strong>No services available</strong>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>