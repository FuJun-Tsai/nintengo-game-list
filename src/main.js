import { createApp } from 'vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faBars, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import router from './router';
import App from './App.vue';

library.add(faBars, faArrowUp, faArrowDown);

// import store from './store';
// createApp(App).use(store).use(router).mount('#app');

const app = createApp(App);

app.component('font-awesome-icon', FontAwesomeIcon);
app.use(VueAxios, axios);
app.use(router);
app.config.productionTip = false;

app.mount('#app');
