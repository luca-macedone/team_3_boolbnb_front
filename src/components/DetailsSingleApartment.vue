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
  <div class="col-12 d-flex detail_card flex-wrap  gap-3 details p-4 rounded-3 h-100 mb-3 " v-if="apartment">
    <div class="col-12">
      <h2 class=" fw-normal mb-5">Details:</h2>
        <ul class=" list-unstyled d-flex gap-5">
          <div class="col-6">
            <li class="my-4 pb-4 row flex-sm-wrap">
              <div class="col-6">Rooms: </div>
              <div class="col-6">
                <i class="fa-solid fa-door-open me-5"></i>
                <span class=" ">{{ apartment.rooms }}
                </span>
              </div>             
            </li>
            <li class="my-4 row flex-sm-wrap">
              <div class="col">Beds: </div>
              <div class="col">
                <i class="fa-solid fa-bed me-5"></i>
                <span class=" ">{{ apartment.beds }}
                </span>
              </div>             
            </li>
          </div>
          <div class="col-6">
            <li class="my-4 pb-4 row flex-sm-wrap">
              <div class="col">Bathrooms: </div>
              <div class="col">
                <i class="fa-solid fa-toilet me-5"></i>
                <span class=" ">{{ apartment.bathrooms }}
                </span>
              </div>             
            </li>
            <li class="my- row flex-sm-wrap">
              <div class="col-6">Square meters: </div>
              <div class="col-6">
                <i class="fa-solid fa-up-right-and-down-left-from-center me-5 margin_negative"></i>
                <span class="">{{ apartment.square_meters }}
                </span>
              </div>             
            </li>
            
          </div>
        </ul>
        <hr class="hr_margin pb-3">

        <div class="col d-flex flex-wrap  justify-content-center">
          <div class=" fs-5 fw-medium" v-if="apartment.visibility">
              <h5>Apartment Available</h5>
          
            </div>
            <div class=" fs-5 fw-medium" v-else>
            Apartment not available
            </div>
          </div>

    </div>
  </div>
  <!-- Service -->
  <div class="col-12 d-flex detail_card flex-column  gap-3 details p-4 rounded-3 h-100 mb-3" v-if="apartment">
    

    <h2 class=" fw-normal mb-5">Service:</h2>
    <div v-if="apartment.services.length >= 1">
      <ul class="d-flex bottom flex-wrap flex-column list_size">
        <li class=" col d-flex flex-wrap p-2"
          v-for="service in apartment.services">
          <span class=" d-inline-block my_badge py-1 px-2 fs-6 rounded-2">{{ service.name }}</span>
        </li>
      </ul>
    </div>
    <div v-else>
      <li>
        <strong>No services available</strong>
      </li>
    </div>
  </div>
  <div class="col-12 d-flex detail_card flex-wrap  gap-3 details p-4 rounded-3 h-100 mb-3 " v-if="apartment">
    <h2 class=" fw-normal mb-2">Termini e condizioni</h2>
    <p>
      <strong class=" fw-bold">100% di rimborso dell'importo da pagare</strong>
       e se cancelli almeno 30 giorni prima del check-in.
    </p>
    <p>
      <strong>50% di rimborso dell'import da pagare</strong>
      (meno il costo del servizio) se cancelli almeno 14 giorni prima del check-in.
    </p>
    <p>
      <strong>Nessun rimborso</strong>
      se cancelli 14 giorni prima del check-in.
    </p>
  </div>

    
  
</template>



<style lang="scss" scoped>
@use '../styles/partials/apartmentView.scss';

li{
  font-size: 1.2rem;
}
</style>