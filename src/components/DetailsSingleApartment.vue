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
    <div class="row">
      <ul class="col-6 gap-2 list-unstyled ul_details">
        <li><strong>Rooms: </strong>{{ apartment.rooms }}</li>
        <li><strong>Beds: </strong>{{ apartment.beds }}</li>
        <li><strong>Square meters: </strong>{{ apartment.square_meters }}</li>
        <li><strong>Bathrooms: </strong>{{ apartment.bathrooms }}</li>
      </ul>
      <div class="col-6 d-flex justify-content-end">
        <div v-if="apartment.visibility">
          <strong>Apartment Available</strong>
        </div>
        <div v-else>
          <strong>Apartment not available</strong>
        </div>

      </div>
    </div>
    <hr class="hr_margin justify-content-center">
    <h6><strong>Service:</strong></h6>
    <div v-if="apartment.services.length >= 1">
      <ul class="d-flex list-unstyled col-12 bottom flex-wrap">
        <li class="badge bg-success me-1 mb-1 d-flex align-items-center justify-content-center  p-2"
          v-for=" service  in  apartment.services ">
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