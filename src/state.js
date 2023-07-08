import { reactive } from "vue";
import axios from 'axios';
export const state = reactive({

    loading: true,
    researchedApartments: null,
    apartments: null,
    apartment: null,
    search_text: '',
    base_url: 'http://127.0.0.1:8000/',
    projects_API: 'api/apartments',
    loading: true,
    loadings: true,
    error: null,
    range: '&radius=20000',
    btmRightPointLat: null,
    btmRightPointLong: null,
    topLeftPointLat: null,
    topLeftPointLong: null,
    tomTom_API: 'https://api.tomtom.com/search/2/search/',
    key: '.json?key=gS8mw4nOWKsFSgJLqBsDJopb3q9ql31M&limit=1',
    constrainedApartmentsAPI: 'http://127.0.0.1:8000/api/apartments',

    getImageFromPath(path) {
        // console.log(this.base_API + 'storage/' + path);
        return this.base_url + 'storage/' + path;
    },

    getApartments(apartmentsUrl) {
        axios
            .get(apartmentsUrl)
            .then(response => {
                this.apartments = response.data.results
                console.log(this.apartments);
                this.loadings = false
            })
            .catch(error => {
                console.log(error);
                this.error = error.message
            })
    },

    getApartament(apartmentUrl) {
        axios
            .get(apartmentUrl)
            .then(response => {
                this.apartment = response.data.results
                console.log(this.apartment);
                this.loading = false
            })
            .catch(error => {
                console.log(error);
                this.error = error.message
            })
    },

    getApartments(topLeftPointLat, topLeftPointlong, btmRightPointLat, btmRightPointLong) {
        axios.get(`${this.constrainedApartmentsAPI}/${topLeftPointLat}/${topLeftPointlong}/${btmRightPointLat}/${btmRightPointLong}`)
            .then(response => {
                // console.log(response.data.result);
                this.researchedApartments = response.data.result
            })
            .catch(error => {
                // Gestisci l'errore della chiamata API
                console.error(error);
            });
    },

    getGps(fullAddress) {
        axios.get(this.tomTom_API + fullAddress + this.key)

            .then(response => {
                /* console.log(response.data.results[0].viewport); */
                this.btmRightPointLat = response.data.results[0].boundingBox.btmRightPoint.lat
                this.btmRightPointLong = response.data.results[0].boundingBox.btmRightPoint.lon
                this.topLeftPointLat = response.data.results[0].boundingBox.topLeftPoint.lat
                this.topLeftPointlong = response.data.results[0].boundingBox.topLeftPoint.lon
                this.getApartments(this.topLeftPointLat, this.topLeftPointlong, this.btmRightPointLat, this.btmRightPointLong)
            })
            .catch(error => {
                // Gestisci l'errore della chiamata API
                console.error(error);
            });

    },
})

