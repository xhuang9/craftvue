import Vue from "vue";
import Components from "./components"; //vue components
import "./scss/index.scss"; // css file


// Install BootstrapVue
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

//Install Axios
import Axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, Axios);

//Import vue-lazyload
import VueLazyload from 'vue-lazyload';
// or with options
Vue.use(VueLazyload, {
  preLoad: 1.3,
  error: 'assets/repoImg/error.jpg',
  loading: 'assets/repoImg/loading.gif',
  attempt: 1
});

//Install Vue Validate
import Vuelidate from "vuelidate";  //https://vuelidate.js.org/#sub-basic-form
Vue.use(Vuelidate);

//vue
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
    // console.log("mounted");
  },
  updated(){
    // console.log("updated");
  }
});
