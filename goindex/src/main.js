import "element-ui/lib/theme-chalk/icon.css";
import "element-ui/lib/theme-chalk/loading.css";
import "element-ui/lib/theme-chalk/notification.css";
import App from "./App.vue";
import ElementUI from "element-ui";
import Vue from "vue";
import VueAxios from "vue-axios";
import axios from "@utils/axios";
import i18n from "./i18n";
import router from "./router";
// store
import "@/assets/style/theme/register.scss";
import "viewerjs/dist/viewer.css";
import Viewer from "v-viewer";
import VueClipboard from "vue-clipboard2";
import VueLazyload from "vue-lazyload";
import cdnpath from "./libs/util.cdn";
import infiniteScroll from "vue-infinite-scroll";
import store from "@/store/index";

document.write(
  `<script>var _hmt=_hmt||[];(function(){var hm=document.createElement("script");hm.src="https://hm.baidu.com/hm.js?6be1011f95a1bfcdb2179fe2ae6e58fe";var s=document.getElementsByTagName("script")[0];s.parentNode.insertBefore(hm,s)})();</script>`
);

Vue.config.productionTip = false;
Vue.use(ElementUI);
Vue.use(VueAxios, axios);
Vue.use(cdnpath);
Vue.use(VueClipboard);
Vue.use(infiniteScroll);
Vue.use(VueLazyload, {
  loading: cdnpath("/images/airplane.gif"),
});
Vue.use(Viewer);

new Vue({
  router,
  store,
  i18n,
  render: (h) => h(App),
  mounted() {
    this.$store.dispatch("acrou/view/load");
  },
}).$mount("#app");
