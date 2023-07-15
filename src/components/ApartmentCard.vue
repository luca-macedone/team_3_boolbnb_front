<script>
import { state } from '../state.js';
import { RouterLink } from 'vue-router';
export default {
    name: "ApartmentCard",
    props: ["title", "beds", "rooms", "full_address", "image", "slug"],
    data() {
        return {
            state,
        };
    },
    components: { RouterLink }
}
</script>

<template>
    <div class="col-12 col-md-6 col-lg-4 text-decoration-none">
        <RouterLink :to="{ name: 'apartment', params: { slug: slug } }" class="h-100">
            <div class="dashboard_card apartment_card shadow p-4">
                <img :src="state.getImageFromPath(image)" onerror="this.onerror=null; this.src='/missing_img_v2.svg'"
                    class="card-img" :alt="title + ' img'">
                <div class="card_img_overlay">
                    <div class="apartment_info d-flex flex-column align-items-center justify-content-between">
                        <h5 class="text-center fs-4 m-0 p-0">{{ title }}</h5>
                        <div class="d-flex align-items-center gap-2 w-100">
                            <div class="d-flex align-items-end gap-3">
                                <span>
                                    <span class="fw-semibold fs-3">{{ rooms }}</span>
                                    <span> rooms</span>
                                </span>
                                <span>
                                    <span class="fw-semibold fs-3">{{ beds }}</span>
                                    <span> beds</span>
                                </span>
                                <span>
                                    <span class="address fs-6">{{ full_address }}</span>
                                    <span> mq</span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </RouterLink>
    </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/ApartmentCard.scss' as *;
</style>