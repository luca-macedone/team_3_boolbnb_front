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
  <div class="col-12 col-xl-8 d-flex card_show gap-3 details p-3 card h-100 mb-3" v-if="apartment">
    <h3 class="text-center pt-3"><strong>DETAILS:</strong></h3>
    <div class="apartment_info flex-column justify-content-between align-items-start">
      <h5 class="m-0 p-0 py-3"><strong>{{ apartment.title }}</strong></h5>
      <div class="d-flex justify-content-between align-items-center gap-2 w-100">
        <div class="d-flex align-items-center gap-3 flex-wrap h-100">
          <span>
            <span class="fw-semibold fs-3">{{ apartment.rooms }}</span>
            <span> rooms</span>
          </span>
          <span>
            <span class="fw-semibold fs-3">{{ apartment.beds }}</span>
            <span> beds</span>
          </span>
          <span>
            <span class="fw-semibold fs-3">{{ apartment.bathrooms }}</span>
            <span> bathrooms </span>
          </span>
          <span>
            <span class="fw-semibold fs-3">{{ apartment.square_meters }}</span>
            <span> mq</span>
          </span>
        </div>
        <div class="col-6 d-flex justify-content-end flex-wrap h-100">
          <div v-if="apartment.visibility">
            <strong>Apartment Available</strong>
          </div>
          <div v-else>
            <strong>Apartment not available</strong>
          </div>
        </div>
      </div>
    </div>

    <hr class="hr_margin justify-content-center">

    <h6><strong>Service:</strong></h6>
    <div v-if="apartment.services.length >= 1">
      <ul class="d-flex list-unstyled col-12 bottom flex-wrap">
        <li class="badge bg-success me-1 mb-1 d-flex align-items-center justify-content-center p-2"
          v-for="service in apartment.services">
          {{ service.name }}
        </li>
      </ul>
    </div>
    <div v-else>
      <li>
        <strong>No services available</strong>
      </li>
    </div>
  </div>
</template>



<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>