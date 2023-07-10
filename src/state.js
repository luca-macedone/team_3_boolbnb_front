import { reactive } from "vue";
import axios from 'axios';
export const state = reactive({

    loading: true,
    researchedApartments: null,
    apartments: null,
    apartment: null,
    search_text: '',
    base_url: 'http://127.0.0.1:8000/',
    apartments_endpoint: 'api/apartments',
    services_endpoint: 'api/services',
    services: null,
    suggestions: null,
    loading: true,
    loadings: true,
    error: null,
    btmRightPointLat: null,
    btmRightPointLong: null,
    topLeftPointLat: null,
    topLeftPointLong: null,
    tomTom_API: 'https://api.tomtom.com/search/2/search/',
    tomTom_autocomplete_API: 'https://api.tomtom.com/search/2/autocomplete/',
    key: '.json?key=gS8mw4nOWKsFSgJLqBsDJopb3q9ql31M',
    range_attribute: '&radius=',
    limit_attribute: '&limit=',
    language_attribute: '&language=',
    constrainedApartmentsAPI: 'http://127.0.0.1:8000/api/apartments',

    getImageFromPath(path) {
        return `${this.base_url}storage/${path}`;
    },

    getApartament(apartmentUrl) {
        axios
            .get(apartmentUrl)
            .then(response => {
                this.apartment = response.data.results
                // console.log(this.apartment);
                this.loading = false
            })
            .catch(error => {
                console.log(error);
                this.error = error.message
            })
    },

    getApartments(topLeftPointLat, topLeftPointlong, btmRightPointLat, btmRightPointLong, rooms, beds, selected_services) {
        axios.get(`${this.constrainedApartmentsAPI}`, {
            params: {
                left_lat: topLeftPointLat,
                left_lon: topLeftPointlong,
                right_lat: btmRightPointLat,
                right_lon: btmRightPointLong,
                rooms: rooms,
                beds: beds,
                services: selected_services,
            }
        })
            .then(response => {
                // console.log(response.data.result);
                this.researchedApartments = response.data.apartments;
                // console.log(this.researchedApartments)
            })
            .catch(error => {
                // Gestisci l'errore della chiamata API
                console.error(error);
            });
    },

    getGps(fullAddress, range, rooms, beds, selected_services) {
        // console.log(range);
        axios.get(this.tomTom_API + fullAddress + this.key + this.range_attribute + range + '000' + this.limit_attribute + '1')

            .then(response => {
                /* console.log(response.data.results[0].viewport); */
                this.btmRightPointLat = response.data.results[0].boundingBox.btmRightPoint.lat
                this.btmRightPointLong = response.data.results[0].boundingBox.btmRightPoint.lon
                this.topLeftPointLat = response.data.results[0].boundingBox.topLeftPoint.lat
                this.topLeftPointlong = response.data.results[0].boundingBox.topLeftPoint.lon
                this.getApartments(this.topLeftPointLat, this.topLeftPointlong, this.btmRightPointLat, this.btmRightPointLong, rooms, beds, selected_services)
            })
            .catch(error => {
                // Gestisci l'errore della chiamata API
                console.error(error);
            });

    },

    getSuggestions(query) {
        if (query) {
            axios
                .get(this.tomTom_autocomplete_API + query + this.key + this.language_attribute + 'en-US' + this.limit_attribute + '10')
                .then(response => {
                    // console.log(response);
                    this.suggestions = response.data.results;
                })
                .catch(error => {
                    console.error(error);
                })
        }
    },

    getServices() {
        axios
            .get(this.base_url + this.services_endpoint)
            .then(response => {
                // console.log(response)
                this.services = response.data.services;
            })
            .catch(error => {
                console.error(error);
            })
    }
})

