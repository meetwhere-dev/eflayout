import { createApp } from 'vue'
import App from './App.vue'
import './styles/main.css'
import componentLayout from './custom-components/EF-Layout.vue'

const instance = createApp(App);
instance.component('ef-layout', componentLayout);
instance.mount('#app');
