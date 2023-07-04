<script>
export default {
    name: "HomeView",
}
</script>

<template>
    <div class="container pt-5 ">

        <!-- carousel ----------------------->

        <div id="carouselExampleCaptions" class="carousel slide " data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">


                <!-- <div v-for="apartment in apartments" class="carousel-item active d-flex justify-content-center bg-white"> 
                    <img src="{{ apartment.image }}" class="d-block w-100" alt="...">
                    <div class="carousel-caption d-none d-md-block">
                        <h5>{{ apartment.title }}</h5>
                    </div>
                </div> -->

                <div class="carousel-item active d-flex justify-content-center bg-white rounded-3">
                    <img src="../../public/full_logo_horizontal.svg" class="d-block w-25" alt="...">
                    <div class="carousel-caption d-none d-md-block text-black">
                        <h2>First slide label</h2>
                    </div>
                </div>

            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="prev">
                <span class="carousel-control-prev-icon bg-black rounded-3 p-1" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                data-bs-slide="next">
                <span class="carousel-control-next-icon bg-black rounded-3 p-1" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>

        <!-- search ------------------>

        <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center rounded-3 shadow search_box ">
                <img class="pe-3" height="30" src="../../public/pin_only.svg" alt="">
                <input class=" search_input rounded-3 shadow " type="search" name="search" id="search"
                    placeholder="  Where we go?">
                <button class="btn_search rounded-3 shadow">SEARCH</button>
            </div>
        </div>

        <!-- card display ---------------------->

        <div class="row g-3 mt-3">

            <div class="col-12 col-lg-4">
                <div class="card m-auto p-3 m-0 w-100">
                    <img src="../../public/pin_only.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>         
            </div>
            <div class="col-12 col-lg-4">
                <div class="card m-auto p-3 m-0 w-100">
                    <img src="../../public/pin_only.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>         
            </div>
            <div class="col-12 col-lg-4">
                <div class="card m-auto p-3 m-0 w-100">
                    <img src="../../public/pin_only.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>         
            </div>
            

        </div>

    </div>
</template>

<style lang="scss" scoped>@use '../styles/app.scss';</style>