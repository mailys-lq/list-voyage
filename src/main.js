import { createApp } from 'vue';

import App from './App.vue';
import store from '../src/store';
import router from '../src/router';

const app = createApp(App);
app.use(router);
app.use(store);

app.mount('#app');
