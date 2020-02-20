import Vue from "vue";
import Components from "./components";
import "./scss/index.scss";
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import axios from "axios";
import VueAxios from "vue-axios";
import Vuelidate from "vuelidate";  //https://vuelidate.js.org/#sub-basic-form

Vue.config.productionTip = false;

new Vue({
  el: "#app",
  delimiters: ["${", "}"],
  data: {
    showModal: false,
  },
  methods:{
  },
  mounted(){
    console.log("mounted");
  },
  updated(){
    console.log("updated");
  }
});

Vue.use(Vuelidate);

Vue.use(VueAxios, axios);

// Install BootstrapVue
Vue.use(BootstrapVue);
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin);
