<script>
export default {
    name: "HomeView",
}
</script>

<template>
    <div class="row">
        <div class="col-12 img-wrapper-jumbo">
            <img src="../../public/jumbotron-home.jpg" alt="jumbotron house image" class="img-fluid">

        </div>

        <!-- search ------------------>
        <div class="d-flex justify-content-center">
            <div class="d-flex align-items-center justify-content-between rounded-3 shadow gap-3 search_box_home ">
                <img class="pe-3" height="30" src="/pin_only.svg" alt="">
                <input class="input rounded-3 shadow w-50 " type="search" name="search" id="search"
                    placeholder="Where we go?">
                    <span>
                    <label class="" for="birthday"></label>
                    <input class="input rounded-3 shadow" type="date" id="in" name="in">
                </span>
                <span>
                    <label class=" " for="birthday"></label>
                    <input class="input rounded-3 shadow" type="date" id="out" name="out">
                </span>
                <div class="d-flex justify-content-between py-3">
                    <a type="button" class="btn back_btn d-flex align-items-center gap-2 shadow" href="#">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        Search
                    </a>
                </div>
                
            </div>
        </div>
    </div>

    <div class="container">




        <!-- card display ---------------------->

        <div class="row g-3 mt-3">

            <div class="col-12 col-lg-6">
                <div class="card m-auto p-3 m-0 w-100">
                    <img src="/pin_only.svg" class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">Card title</h5>
                        <p class="card-text">Some quick example text to build on the card title and make up the bulk of the
                            card's content.</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-6">
                <div class="card m-auto p-3 m-0 w-100">
                    <img src="/pin_only.svg" class="card-img-top" alt="...">
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

<style lang="scss">
@use '../styles/app.scss';
</style>