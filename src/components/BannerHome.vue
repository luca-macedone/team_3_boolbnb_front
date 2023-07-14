<script>
import { RouterLink } from 'vue-router';
export default {
	name: 'BannerHome',
	components: {
		RouterLink
	}
}

</script>

<template>
	<div class="container  ">
		<div class=" rounded-3 mt-3 shadow dashboard_jumbotron ">
			<div class="bg_text rounded-3 p-5 mb-4">
				<div class="container py-3 text_bnb_light">
					<h1 class="display-5 fw-semibold mb-5">
						Find the best places for your adventures!
					</h1>
					<p class="col-md-8">
						Here you can rent out your properties, update your account information, and manage all your listings
						in a simple and intuitive way.
						Furthermore, if you want to increase the visibility of your listings, you can purchase a sponsorship
						that will make them visible to a wider audience.

					</p>

					<div class="d-flex justify-content-between py-3">
						<RouterLink :to="{ name: 'search' }" class="btn back_btn d-flex align-items-center gap-2 shadow">
							<i class="fa-solid fa-magnifying-glass"></i>
							<span class="small_display">Search</span>
						</RouterLink>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss';
</style>