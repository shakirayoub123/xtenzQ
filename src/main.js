import { createApp } from "vue";
import App from "./App.vue";

// router
import router from "./router";

// bootstrap bundle
import bootstrap from "bootstrap/dist/js/bootstrap.bundle";

// font aswesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faFileLines } from "@fortawesome/free-regular-svg-icons";
import { faLinkedinIn, faGithub } from "@fortawesome/free-brands-svg-icons";
library.add(faLinkedinIn, faGithub, faFileLines);

createApp(App)
  .use(bootstrap)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
