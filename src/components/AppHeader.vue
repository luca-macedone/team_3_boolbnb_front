<script>
export default {
  name: 'AppHeader'
}
</script>
<template>
  <header class="shadow">
    <div class="container-fluid d-flex justify-content-between align-items-center">
      <div id="logo" class="img-wrapper">
        <img  class="logo_wrapper" src="../../public/logo_horizontal.svg" alt="">
      </div>
      <div class="dropdown">
        <a class="btn btn-secondary" href="#" role="button" data-bs-toggle="dropdown"
          aria-expanded="false">
          <i class="fa-solid fa-bars fa-2x"></i>
        </a>
        <ul class="dropdown-menu">
          <li><a href="http://127.0.0.1:8000/login" class="dropdown-item bg-transparent">Login</a></li>
          <li><a  href="http://127.0.0.1:8000/register" class="dropdown-item bg-transparent">Register</a></li>          
        </ul>
      </div>
    </div>
  </header>
</template>

<style lang="sass" scoped>

</style>
