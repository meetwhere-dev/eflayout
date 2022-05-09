import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import componentLayout from './custom-components/EF-Layout.vue'
import bury from './bury'


const instance = createApp(App);

instance.use(bury);
instance.component('ef-layout', componentLayout);
instance.mount('#app');
