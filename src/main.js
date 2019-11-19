import axios from "axios";
import Vue from "vue";
import App from "./App.vue";
import { router } from "./router";
import store from "./store/index";
import { Howl, Howler } from "howler";
import NProgress from "nprogress";
import * as VueGoogleMaps from "vue2-google-maps";
import SwalVue from 'swal-vue';

import BootstrapVue from "bootstrap-vue";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "nprogress/nprogress.css";
import "./assets/scss/app.scss";
import i18n from "./i18n";

// Filter to format date
Vue.filter("numbers", value => {
  let number = value + 1;
  if (number < 10) {
    return "0" + number + ".";
  }
  return number + ".";
});

Vue.filter("minutes", value => {
  if (!value || typeof value !== "number") return "00:00";
  let min = parseInt(value / 60),
      sec = parseInt(value % 60);
  min = min < 10 ? "0" + min : min;
  sec = sec < 10 ? "0" + sec : sec;
  value = min + ":" + sec;
  return value;
});

Vue.use(VueGoogleMaps, {
  load: {
    key: "YOUR_GOOGLE_MAPS_KEY",
    libraries: "places" // This is required if you use the Autocomplete plugin
    // OR: libraries: 'places,drawing'
    // OR: libraries: 'places,drawing,visualization'
    // (as you require)

    //// If you want to set the version, you can do so:
    // v: '3.26',
  }

  //// If you intend to programmatically custom event listener code
  //// (e.g. `this.$refs.gmap.$on('zoom_changed', someFunc)`)
  //// instead of going through Vue templates (e.g. `<GmapMap @zoom_changed="someFunc">`)
  //// you might need to turn this on.
  // autobindAllEvents: false,

  //// If you want to manually install components, e.g.
  //// import {GmapMarker} from 'vue2-google-maps/src/components/marker'
  //// Vue.component('GmapMarker', GmapMarker)
  //// then disable the following:
  // installComponents: true,
});

// Axios instance for BPC Api
store.$http = axios.create({
  baseURL: "http://url/api",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8"
  }
});

// Axios instance for BCR Api
store.$httpBCR = axios.create({
  baseURL: "/bcr",
  timeout: 10000,
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers":
      "Origin, X-Requested-With, Content-Type, Accept, Authorization",
    "Access-Control-Allow-Methods": "GET, POST, OPTIONS, PUT, PATCH, DELETE",
    "Content-Type": "application/json;charset=UTF-8"
  }
});

// Axios instance for RSS Feed
store.$httpFeed = axios.create({
  timeout: 10000
});

// BPC Api URL
store.$apiUrl = "http://url/api/";

// BCR Api URL
store.$bcrApiUrl = "https://url/";

// before a request is made start the nprogress
store.$http.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
store.$http.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

// before a request is made start the nprogress
store.$httpBCR.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
store.$httpBCR.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

// before a request is made start the nprogress
store.$httpFeed.interceptors.request.use(config => {
  NProgress.start();
  return config;
});

// before a response is returned stop nprogress
store.$httpFeed.interceptors.response.use(response => {
  NProgress.done();
  return response;
});

// nprogress spinner
NProgress.configure({
  showSpinner: true
});

Vue.use(SwalVue);

Vue.use(BootstrapVue);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  i18n,
  data: () => ({
    isCollapsed: false
  }),
  render: h => h(App)
}).$mount("#app");
