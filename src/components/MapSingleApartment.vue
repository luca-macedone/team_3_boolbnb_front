<script>
export default {
  name: 'MapSingleApartment',
  props:
    [
      'apartment',
    ],
}
</script>
<template>
  <div class="row mt-3">
    <div class="col-12 p-0">
      <h3 class="map_text"><strong>Where you will be</strong></h3>
      <div class="card card_maps">
        <div id="map" class="map" style="width: 100%; height: 400px;"></div>
      </div>
      <div v-if="apartment" class="full_adress px-3 pt-1">
        <p>
          {{ apartment.full_address }}
        </p>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';
</style>
