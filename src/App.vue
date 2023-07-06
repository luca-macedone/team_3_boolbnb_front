<script>
import {state} from './state.js'
import AppHeader from './components/AppHeader.vue';
import AppFooter from './components/AppFooter.vue';
export default {
    components: {
        AppHeader,
        AppFooter
    },
    data(){
        return{
            state
        }
    },
    mounted(){
        //qui chiamata api
    }
}
</script>

<template>
    <app-header></app-header>
    <router-view></router-view>
    <app-footer></app-footer>
</template>

<style lang="scss">
@use './styles/app.scss';


</style>
