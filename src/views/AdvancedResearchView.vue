<script>
export default {
    name: "SearchView",
}
</script>

<template>
    <div class="container-fluid search_box_advanced rounded-3 my-5">
        <div class="d-flex align-items-center justify-content-between ">

            <div class="d-flex align-items-center ">

                <img class="pe-3" height="30" src="/pin_only.svg" alt="">

                <input class="input rounded-3 shadow me-2" type="search" name="search" id="search" placeholder="  Where we go?">

                <div class="col d-flex justify-content-between py-3">
                    <a type="button" class="btn back_btn d-flex align-items-center gap-2 shadow" href="#">
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
</template>

<style lang="scss" scoped></style>