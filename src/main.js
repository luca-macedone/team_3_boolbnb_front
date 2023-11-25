import { createApp } from 'vue';
import App from '/src/App.vue';
import { router } from './router';

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'

createApp(App)
    .use(router)
    .mount('#app')
