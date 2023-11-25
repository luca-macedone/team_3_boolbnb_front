<script>
import { state } from '../state';
import { RouterLink } from 'vue-router';
export default {
    name: 'HomeCardBig',
    props: ['apartment'],
    components: {
        RouterLink
    },
    data() {
        return {
            state
        }
    }
}
</script>

<template>
    <!-- bigger card -->

    <div class="col-12">
        <RouterLink class="d-flex" :to="{ name: 'apartment', params: { slug: apartment.slug } }">
            <div class="card my_card m-auto p-0 border-0 rounded-1 gap-5 w-100 max_height mb-3 g-3 card_box">
                <i class="fa-solid fa-star star"></i>
                <div class="card-img-overlay d-flex align-items-end">
                    <h5 class="card-title text-white pl-3 pb-3">{{ apartment.title }}</h5>
                </div>
                <img :src="state.getImageFromPath(apartment.image)" class="card-img object-fit-cover" alt="..."
                    onerror="this.onerror=null; this.src='/missing_img_v2.svg'">
                <div class="card-body">
                    <p class="card-text text-center">
                        {{ apartment.name }}
                    </p>
                    <p class="card-text text-center">{{ apartment.full_address }}</p>



                </div>
            </div>
        </RouterLink>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss';
</style>