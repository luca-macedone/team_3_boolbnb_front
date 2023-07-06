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
            <div class="d-flex align-items-center rounded-3 shadow gap-3 search_box ">
                <img class="pe-3" height="30" src="../../public/internal/pin_only.svg" alt="">
                <input class=" search_input rounded-3 shadow " type="search" name="search" id="search"
                    placeholder="  Where we go?">
                    <div class="col d-flex justify-content-between py-3">
                        <a type="button" class="btn back_btn d-flex align-items-center gap-2 shadow"
                            href="#">
                            <svg xmlns="http://www.w3.org/2000/svg" height="1em" class="search_icon" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
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
                    <img src="../../public/internal/pin_only.svg" class="card-img-top" alt="...">
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
                    <img src="../../public/internal/pin_only.svg" class="card-img-top" alt="...">
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