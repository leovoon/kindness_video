import { createApp } from "vue";
import App from "./App.vue";
import 'equal-vue/dist/style.css'
import "./index.css";
import { Alert, Icon } from 'equal-vue'


const app = createApp(App)
app.mount("#app")
app.use(Alert)
app.use(Icon)
