<script>
import { RouterLink } from 'vue-router';
export default {
	name: 'AppHeader',
	components: ['RouterLink'],
}
</script>
<template>
	<header class="mb-5 shadow position-fixed w-100 z_index">
		<nav class="d-flex justify-content-center align-items-center" id="site_navbar">
			<a class="dashboard_link d-flex align-items-center gap-2" href="http://127.0.0.1:8000/user/dashboard">
				<i class="fa-solid fa-circle-user"></i>
				<span class="">User</span>
			</a>
			<RouterLink :to="{ name: 'home' }" class="logo_wrapper"></RouterLink>
		</nav>
	</header>
</template>

<style lang="sass" scoped>

</style>
