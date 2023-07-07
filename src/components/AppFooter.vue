
<script>
export default {
  name: 'AppFooter'
}
</script>
<template>
  <!-- footerone -->

  <footer class="">
    
        <div class="container">
          <div class="row my-5 pt-5">
            <div class="col-3">
              <h2>BOOL BNB</h2>

              <ul class="d-flex flex-column gap-3 mt-4">
                <li><a href="#">Advanced search</a> </li>
                <li><a href="#">Rent an apartment</a> </li>
                <li><a href="#">Sponsorship</a> </li>
                <li><a href="#">Home page</a> </li>


              </ul>


            </div>
            <div class="col-3">
              <h2>CONTACTS</h2>

              <ul class="d-flex flex-column gap-3 mt-4">
                <li><a href="#"> Terms of Use</a></li>
                <li><a href="#"> Privacy policy</a></li>
                <li><a href="#"> BoolBnb maps</a></li>
                <li><a href="#"> Who we are</a></li>
                <li><a href="#">Contact Us</a> </li>

              </ul>


            </div>
            <div class="col-3">
              <h2>MADE BY</h2>

              <ul class="d-flex flex-column gap-3 mt-4">
                <li><a href="#">Luca Macedone</a></li>
                <li><a href="#">Luca Ruboni</a></li>
                <li><a href="#">Roberto Nesta</a></li>
                <li><a href="#">Fabio Delli</a></li>
                <li><a href="#">Daniel Oddo</a></li>


              </ul>
            </div>

            <div class="col-3">
              <div class="d-flex flex-wrap gap-3">
                <div class="img-wrapper rounded_img">
                <img class="object-fit" src="/ruboni.jpeg" alt="luca ruboni">
                </div>
                <div class="img-wrapper rounded_img">
                <img class="object-fit" src="/macedone.jpeg" alt="luca macedone">
                </div>
                <div class="img-wrapper rounded_img">
                <img class="object-fit" src="/nesta.jpeg" alt="roberto nesta">
                </div>
                <div class="img-wrapper rounded_img">
                <img class="object-fit" src="/delli.jpeg" alt="fabio delli">
                </div>
                <div class="img-wrapper rounded_img">
                <img class="object-fit" src="/oddo.jpeg" alt="daniel oddo">
                </div>
              </div>


            </div>



          </div>
       
      <div class="col down_col d-flex justify-content-between">

        <div class="container">
          <div class="row">


            <nav class="navbar my-3 d-flex align-items-center">

              <a class="navbar-brand d-flex text-light" href="#">
                &copy; 2023 Boolbnb, Inc.
              </a>

              <div class="col d-flex justify-content-center py-3 w-100">
                <a type="button"
                  class="btn back_btn_card d-flex align-items-center gap-2 shadow w-75 justify-content-center" href="http://127.0.0.1:8000">
                  Sign up Now!
                </a>
              </div>

              <div class="d-flex align-items-center gap-4">


                <span class="align-self-center"><i class="fa-solid fa-globe"></i> Italiano (IT)</span>
                <span class="align-self-center">€ EUR</span>
                <span class="align-self-center">Supporto e Risorse</span>


               
              </div>

            </nav>


          </div>
        </div>

      </div>
    </div>
  </footer>
</template>
<style lang="scss" scoped>

</style>


