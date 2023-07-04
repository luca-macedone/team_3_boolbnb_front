<script>
export default {
  name: 'AppHeader'
}
</script>
<template>
  <header class="shadow">

    
    <div class="offcanvas_navbar p-2 shadow d-flex justify-content-start align-items-center gap-3">
      
      <img class="logo_wrapper" src="../../public/full_logo_horizontal.svg" alt="">

            <a class="d-xl-none btn offcanvas_button" data-bs-toggle="offcanvas" href="#offcanvas" role="button"
                aria-controls="offcanvasExample">
                <i class="fa-solid fa-bars fa-2x"></i>
            </a>
            <div class="logo_wrapper"></div>
        </div>
        <div class="offcanvas offcanvas-start d-xl-none" tabindex="-1" id="offcanvas" aria-labelledby="offcanvasLabel">
            <div class="offcanvas-header d-flex justify-content-end">
                <h5 class="offcanvas-title" id="offcanvasLabel">Boolbnb</h5>
                <button type="button" class="btn-close offcanvas_button" data-bs-dismiss="offcanvas" aria-label="Close">ciao</button>
            </div>
            <div class="offcanvas-body">
                <ul class="d-flex flex-column align-items-start justify-content-start gap-3 ps-0">
                   <div>ciao</div>
                </ul>
            </div>
        </div>
        
      </header>



</template>

<style lang="sass" scoped>

</style>
