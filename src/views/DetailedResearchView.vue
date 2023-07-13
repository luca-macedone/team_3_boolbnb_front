<script>
import axios from 'axios';
import MessageSingleApartment from '../components/MessageSingleApartment.vue'
import MapSingleApartment from '../components/MapSingleApartment.vue'
import DetailsSingleApartment from '../components/DetailsSingleApartment.vue';
export default {
    name: "DetailedResearchView",
    components: {
        MessageSingleApartment,
        MapSingleApartment,
        DetailsSingleApartment
    },
    data() {
        return {
            apartment: null,
            loading: true,
            base_API: 'http://127.0.0.1:8000/',
            store: 'storage/',
            showFullscreen: false,
            copyStatus: '',
        }
    },
    methods: {
         copyLink() {
            const currentLink = window.location.href;
            navigator.clipboard.writeText(currentLink)
              .then(() => {
                this.copyStatus = 'success'; // Set success status
                this.hideAlertAfterDelay(3000); // Hide alert after 2 seconds
              })
              .catch((error) => {
                this.copyStatus = 'error'; // Set error status
                console.error('Failed to copy link:', error);
                this.hideAlertAfterDelay(2000); // Hide alert after 2 seconds
              });
          },
          hideAlertAfterDelay(delay) {
            setTimeout(() => {
              this.copyStatus = ''; // Reset copy status to hide the alert
            }, delay);
          },
       
        initializeMap() {
            if (this.apartment) {
                let size = 50
                let center = [this.apartment.longitude, this.apartment.latitude]
                const map = tt.map({
                    key: "7tj6HpFmzIL9ehuGRFCkdCQ9dRTvgWkk",
                    container: "map",
                    center: center,
                    zoom: 15,
                });

                map.on('load', () => {

                    let div = document.createElement('div')
                    div.innerHTML = `<strong>${this.apartment.title}</strong><br>${this.apartment.full_address}`;

                    let popup = new tt.Popup({
                        closeButton: false,
                        offset: size,
                        anchor: 'bottom'
                    }).setDOMContent(div)

                    let border = document.createElement('div')
                    border.className = 'marker-border'
                    let icon = document.createElement('div')
                    icon.className = 'marker-icon'
                    icon.style.backgroundImage = `url('http://127.0.0.1:8000/storage/${this.apartment.image}')`
                    border.appendChild(icon)


                    let marker = new tt.Marker({
                        element: border
                    }).setLngLat(center).setPopup(popup)
                    marker.addTo(map)
                })

                var scale = new tt.ScaleControl({
                    maxWidth: 80,
                    unit: 'imperial'
                });
                map.addControl(scale);
                scale.setUnit('metric')
                var nav = new tt.NavigationControl({});
                map.addControl(nav, 'top-right');

                var attributions = ['<a href="https://www.tomtom.com/mapshare/tools/">Report map issue</a>'];
                map.getAttributionControl().addAttribution(attributions);

                map.addControl(new tt.FullscreenControl({
                    container: document.querySelector('fullscreen-overlay')
                }));

                //console.log(map);
            }
        },
        toggleFullscreen() {
            this.showFullscreen = !this.showFullscreen;
            if (this.showFullscreen) {
                document.documentElement.style.overflow = 'hidden';
            } else {
                document.documentElement.style.overflow = '';
            }
        },
        sendViewData() {
            axios.get('https://api.ipify.org/?format=json')
                .then(response => {
                    const apartmentId = this.apartment.id;
                    console.log(response);
                    const data = {
                        apartment_id: apartmentId,
                        ip: response.data.ip,
                    };
                    console.log(data, 'sto prendendo i dati');

                    axios.post(this.base_API + 'api/views', data)
                        .then(response => {
                            if (!response.data.success) {
                                this.errors = response.data.errors;
                                console.log(this.errors);
                            } else {
                                console.log(data, 'sto passando i dati al db');
                            }
                        })
                        .catch(error => {
                            console.error(error);
                        });
                })
                .catch(error => {
                    console.error(error);
                });
        }
    },
    mounted() {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            console.log(entry)
            if (entry.isIntersecting) {
              entry.target.classList.add('show');
            } else {
              entry.target.classList.remove('show');
            }
          });
        })
        const hidden_elements = document.querySelectorAll('.hidden');
        hidden_elements.forEach((el) => observer.observe(el));
  
        const url = this.base_API + 'api/apartments/' + this.$route.params.slug;
        axios.get(url)
            .then(response => {
                if (response.data.success) {
                    this.apartment = response.data.result[0];
                    //console.log(response);
                    this.loading = true;
                    this.initializeMap();
                } else {
                    this.$router.push({ name: 'NotFound' })
                }
            })
            .catch(error => {
                console.log(error);
                this.loading = false;
            });
        this.sendViewData();
        console.log(this.sendViewData);
    },
    computed() {
        this.initializeMap();
        this.sendViewData()
    }
}

</script>

<template>
    <div class="container text-white mt-5 p-0">
        <div class="row mt-5 align-items-center">
            <div class="col-12 p-0 title_apartment">
                <div class="pb-3 d-flex justify-content-between align-items-center">
                    <router-link to="/search" class="btn back_btn d-flex align-items-center gap-2 shadow">
                        <i class="fa-solid fa-arrow-left-long"></i>
                        Back
                    </router-link>

                    <div class="d-flex flex-column ">
                      
                      <button type="button" class="btn back_btn d-flex align-items-center gap-2 shadow" @click="copyLink">
                          <i class="fa-solid fa-share-nodes"></i>        
                          Share
                      </button>
                          

                  </div>
                </div>

                <div class="col-12 text-center">
                   
                        <h4 v-if="copyStatus" class="my_alert py-3 rounded-1 shadow"  :class="[copyStatus === 'success' ? 'success-message' : 'error-message']">
                            {{ copyStatus === 'success' ? 'Link copied to clipboard!' : 'Failed to copy link.' }}
                        </h4>
                    
                </div>
                <div class="col-12 d-flex justify-content-between">
                    <div v-if="apartment">
                        <h1 class=" fw-semibold text_bnb_dark">{{ apartment.title }}</h1>
                        <p class="text_bnb_dark">
                            {{ apartment.full_address }}
                        </p>
                    </div>
                    
                </div>
                
            </div>
        </div>
        <div class="row">
            <div v-if="apartment" class="col-12 d-flex justify-content-center px-0 pb-4 img_apartment">
                
                        <img class="img-fluid card border-0 card_shadow w-100"
                            :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt="" @click="toggleFullscreen()">
                    
                    <div class="fullscreen-overlay" v-if="showFullscreen" @click="toggleFullscreen">
                        <div class="fullscreen-image-container">
                            <img class="fullscreen-image" :src="'http://127.0.0.1:8000/storage/' + apartment.image" alt="">
                        </div>
                    </div>
                
            </div>
        </div>
        <section  class=" hidden row h-100">
            <DetailsSingleApartment :apartment="apartment"></DetailsSingleApartment>
            <MessageSingleApartment :apartment="apartment"></MessageSingleApartment>
        </section>
       <section class="hidden maps">
            <MapSingleApartment :apartment="apartment"></MapSingleApartment>
       </section>
    </div>
</template>

<style lang="scss" scoped>
@use '../styles/app.scss';


.marker-border {
    background-color: #303030;
    border-radius: 50%;
    height: 50px;
    width: 50px;
}

.marker-icon {
    background-position: center;
    background-size: 49px 49px;
    border-radius: 50%;
    position: absolute;
    left: 0.5px;
    top: 0.5px;
    height: 49px;
    width: 
    
    49px;
}

section{
  display: grid;
  place-items: center;
  align-content: center;
  min-height: 50vh;
  

}

.hidden{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(-100%);
  transition: all 0.6s;
}

.hidden  .maps{
  opacity: 0;
  filter: blur(5px);
  transform: translateX(+100%);
  transition: all 0.6s;
  width: 100%;
}

.show{

opacity: 1;
filter: blur(0);
transform: translateX(0);
}
  

  
</style>
