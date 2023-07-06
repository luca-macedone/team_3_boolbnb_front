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

      
            <h2 class="text-center most_header my-2 margin_negative">I più cercati di <img src="../../public/internal/logo_horizontal.svg" class="margin_negative_start" alt=""></h2>

        <!-- card display ---------------------->

    <div class="row g-3 mt-3">
        <div class="col-12 col-lg-4">
            <div class="card my_card m-auto p-0 w-100 border-0">
                <div class="card-img-overlay d-flex align-items-end">
                  <h5 class="card-title text-white pl-3 pb-3">Card title</h5>
                </div>
                <img src="../../public/internal/pin_only.svg" class="card-img" alt="...">
                <div class="card-body">
                  <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                <div class="col d-flex justify-content-center py-3 w-100">
                <a type="button" class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center"
                    href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                    View Apartment
                </a>
             </div>
        
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
            <div class="card my_card m-auto p-0 w-100 border-0">
                <div class="card-img-overlay d-flex align-items-end">
                  <h5 class="card-title text-white pl-3 pb-3">Card title</h5>
                </div>
                <img src="../../public/internal/pin_only.svg" class="card-img" alt="...">
                <div class="card-body">
                  <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the
                    card's content.
                  </p>
                <div class="col d-flex justify-content-center py-3 w-100">
                <a type="button" class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center"
                    href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                    View Apartment
                </a>
             </div>
        
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-4">
          <div class="card my_card m-auto p-0 w-100 border-0">
            <div class="card-img-overlay d-flex align-items-end">
              <h5 class="card-title text-white pl-3 pb-3">Card title</h5>
            </div>
            <img src="../../public/internal/pin_only.svg" class="card-img" alt="...">
            <div class="card-body">
              <p class="card-text text-center">Some quick example text to build on the card title and make up the bulk of the
                card's content.
              </p>
        <div class="col d-flex justify-content-center py-3">
                <a type="button" class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center"
                    href="#">
                    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512"><!--! Font Awesome Free 6.4.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M48 0C21.5 0 0 21.5 0 48V464c0 26.5 21.5 48 48 48h96V432c0-26.5 21.5-48 48-48s48 21.5 48 48v80h96c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48H48zM64 240c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V240zm112-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V240c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V240zM80 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H80c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16zm80 16c0-8.8 7.2-16 16-16h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H176c-8.8 0-16-7.2-16-16V112zM272 96h32c8.8 0 16 7.2 16 16v32c0 8.8-7.2 16-16 16H272c-8.8 0-16-7.2-16-16V112c0-8.8 7.2-16 16-16z"/></svg>
                    View Apartment
                </a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
</template>

<style lang="scss">
@use '../styles/app.scss';






</style>