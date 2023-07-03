<script>
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    components: {
        AppHeader,
        AppFooter
    }
}
</script>

<template>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</template>

<style lang="scss">
@use './styles/general.scss';


</style>
