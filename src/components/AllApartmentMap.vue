<script>
import axios from 'axios';
export default {
  name: 'AllApartmentMap',
  data() {
    return {
      apartments: [],
      loading: true,
      base_API: 'http://127.0.0.1:8000/',
      store: 'storage/',
      showFullscreen: false,
      copyStatus: '',
      data: null,
    }
  },
  mounted() {
    this.getApartments();
  },
  methods: {
    async getApartments() {
      try {
        const response = await axios.get(`http://127.0.0.1:8000/api/apartments/all`);
        this.data = response.data.result;
        //console.log(this.data);
        this.initializeMap()
        //console.log(response.data.result);
      } catch (error) {
        console.log(error);
      }
    },
    initializeMap() {
      const center = [12.56738, 41.87194]; // Coordinate di Roma
      const zoom = 4.9;

      const map = tt.map({
        key: '7tj6HpFmzIL9ehuGRFCkdCQ9dRTvgWkk',
        container: 'map',
        center: center,
        zoom: zoom,
      });

      this.data.forEach((apartment) => {
        console.log(apartment);

        const { longitude, latitude, title, full_address, image, slug } = apartment;
        const size = 50;
        const markerCenter = [longitude, latitude];

        const div = document.createElement('div');
        const anchor = document.createElement('a');
        anchor.href = `/search/${slug}`;
        anchor.innerHTML = `<strong>${title}</strong><br>${full_address}`;
        div.appendChild(anchor);

        const popup = new tt.Popup({
          closeButton: false,
          offset: size,
          anchor: 'bottom',
        }).setDOMContent(div);

        const border = document.createElement('div');
        border.className = 'marker-border';
        const icon = document.createElement('div');
        icon.className = 'marker-icon';
        icon.style.backgroundImage = `url('http://127.0.0.1:8000/storage/${image}')`;
        border.appendChild(icon);

        const marker = new tt.Marker({
          element: border,
        }).setLngLat(markerCenter).setPopup(popup);
        marker.addTo(map);
      });

      const scale = new tt.ScaleControl({
        maxWidth: 80,
        unit: 'imperial',
      });
      map.addControl(scale);
      scale.setUnit('metric');
      const nav = new tt.NavigationControl({});
      map.addControl(nav, 'top-right');

      const attributions = ['<a href="https://www.tomtom.com/mapshare/tools/">Report map issue</a>'];
      map.getAttributionControl().addAttribution(attributions);

      map.addControl(new tt.FullscreenControl({
        container: document.querySelector('fullscreen-overlay'),
      }));
    }
  }
}
</script>

<template>
  <div class="row mt-3 w-100 pb-5">
    <div class="col-12 p-0">
      <h3 class="map_text text-center pb-2"><strong>Find your ideal apartment</strong></h3>
      <div class="card card_maps">
        <div id="map" class="map" style="width: 100%; height: 600px;"></div>
      </div>
    </div>
  </div>
</template>


<style lang="scss">
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
  width: 49px;
}
</style>