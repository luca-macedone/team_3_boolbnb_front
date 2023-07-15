<script>
export default {
	name: 'DetailsSingleApartment',
	props:
		[
			'apartment',
		],
}
</script>

<template>
	<!-- Apartment details -->
	<div class="col-12 d-flex flex-column gap-4" id="single_apartment_details">
		<div class="d-flex detail_card flex-wrap gap-4 details p-4 h-100 shadow" v-if="apartment">
			<h2 class="fs-3 w-100">Overview:</h2>
			<div class="d-flex flex-row flex-wrap align-items-start justify-content-start gap-5">
				<!-- Rooms -->
				<div class="d-flex gap-3 align-items-center" v-if="apartment.rooms">
					<i class="fa-solid fa-door-open"></i>
					<div class="d-flex align-items-center gap-2">
						<span class="">
							{{ apartment.rooms }}
						</span>
						<span v-if="parseInt(apartment.rooms) > 1">rooms</span>
						<span v-if="parseInt(apartment.rooms) == 1">room</span>
					</div>
				</div>
				<!-- Beds -->
				<div class="d-flex gap-3 align-items-center" v-if="apartment.beds">
					<i class="fa-solid fa-bed"></i>
					<div class="d-flex align-items-center gap-2">
						<span class="">
							{{ apartment.beds }}
						</span>
						<span v-if="parseInt(apartment.beds) > 1">beds</span>
						<span v-if="parseInt(apartment.beds) == 1">bed</span>
					</div>
				</div>
				<!-- Bathrooms -->
				<div class="d-flex gap-3 align-items-center" v-if="apartment.bathrooms">
					<i class="fa-solid fa-shower"></i>
					<div class="d-flex align-items-center gap-2">
						<span class="">
							{{ apartment.bathrooms }}
						</span>
						<span v-if="parseInt(apartment.bathrooms) > 1">bathrooms</span>
						<span v-if="parseInt(apartment.bathrooms) == 1">bathroom</span>
					</div>
				</div>
				<!-- Square meters -->
				<div class="d-flex gap-3 align-items-center" v-if="apartment.square_meters">
					<i class="fa-solid fa-up-right-and-down-left-from-center"></i>
					<div class="d-flex align-items-center gap-2">
						<span class="">
							{{ apartment.square_meters }}
						</span>
						<span>mq</span>
					</div>
				</div>
			</div>
			<!-- Avalability Check -->
			<div class="w-100 text-end mt-3">
				<div class="fs-4" v-if="apartment.visibility">
					Apartment Available
					<div class="fs-6 text_italic">
						Consider to send a message to the owner
						<i class="fa-solid fa-arrow-alt-circle-right ms-3"></i>
					</div>
				</div>

				<div class="fs-4" v-else>
					Apartment not available
				</div>
			</div>

		</div>

		<!-- Services -->
		<div class="detail_card p-4 shadow" v-if="apartment">


			<h2 class="fs-3 fw-normal mb-4">Services:</h2>

			<div class="d-flex gap-3 align-items-start justify-content-start flex-wrap"
				v-if="apartment.services.length >= 1">
				<div class="d-flex justify-content-end align-items-start flex-wrap g-3"
					v-for="service in apartment.services">
					<span class="d-inline-block my_badge py-1 px-3 text_bnb_light text-center">{{
						service.name }}</span>
				</div>
			</div>

			<div v-else>
				<li>
					<strong>No services available</strong>
				</li>
			</div>
		</div>

		<!-- Terms and conditions -->
		<div class="detail_card shadow d-flex flex-wrap gap-3 details p-4 h-100 " v-if="apartment">
			<h2 class="fs-3 fw-normal mb-2">Terms and conditions:</h2>
			<small>
				<span class="fw-semibold text-capitalize">100% refund</span> of the amount to be paid if you cancel at least
				30 days before
				check-in.
			</small>
			<small>
				<span class="fw-semibold text-capitalize">50% refund</span> of the amount to be paid (excluding service fee)
				if you cancel
				at least 14 days
				before check-in.
			</small>
			<small>
				<span class="fw-semibold text-capitalize">No refund</span> if you cancel during the 14 days before check-in.
			</small>
		</div>
	</div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';

li {
	font-size: 0.8rem;
}
</style>