import { reactive } from "vue";
import axios from 'axios';
export const state = reactive({
    
    loading: true,
    apartments: null,
    apartment: null,
    search_text: '',
    base_url: 'http://127.0.0.1:8000/',
    projects_API: 'api/apartments',
    loading: true,
    apartments: null,
    error: null,

    getApartments(apartmentsUrl) {
        axios
            .get(apartmentsUrl)
            .then(response => {
                this.apartments = response.data.results
                console.log(this.apartments);
                this.loading = false
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
            .catch(error =>{
                console.log(error);
                this.error = error.message
            })
    }
})

