import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'
import SvgIcon from "@/components/SvgIcon/index.vue"

// 引入注册脚本vite-plugin-svg-icons
import 'virtual:svg-icons-register'

const app = createApp(App)
app.component("SvgIcon", SvgIcon);
app.use(router).mount('#app')
