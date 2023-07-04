<script>
export default {
  name: 'AppHeader'
}
</script>
<template>
  <header class="shadow">

    <nav class="nav justify-content-center">
      <router-link class="nav-link" :to="{ 'name': 'HomeView' }" aria-current="page">Home</router-link>
      <router-link class="nav-link" :to="{ 'name': 'SearchView' }">Advanced Search</router-link>
      
    </nav>
  </header>


</template>

<style lang="sass" scoped>

</style>
