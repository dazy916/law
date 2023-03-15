import { createApp } from 'vue'
import App from './App.vue'
import {
    Tabbar,
    TabbarItem,
    Tab,
    Tabs,
    Image as VanImage,
    Icon
} from 'vant';
import routerIndex from './router/router'
import "./assets/style/base.scss";

createApp(App)
.use(routerIndex)
.use(Tabbar)
.use(TabbarItem)
.use(Tab)
.use(Tabs)
.use(VanImage).use(Icon)
.mount('#app')
