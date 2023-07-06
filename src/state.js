import { reactive } from "vue";
import axios from 'axios';
export const state = reactive({
    loading: true,
    apartment: null,
    search_text: '',
})