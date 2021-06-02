import { createApp } from "vue";
import mitt from 'mitt';
import App from "./App.vue";
import router from "./router";
import VueGeolocation from 'vue-browser-geolocation';

window.eventBus = mitt();

createApp(App).use(router, VueGeolocation).mount("#app");
