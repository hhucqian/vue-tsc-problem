import { createApp } from 'vue'
import App from './App.vue'

import { Plugin1 } from "./Plugin1"
import { Plugin2 } from "./Plugin2"

createApp(App).use(Plugin1).use(Plugin2).mount('#app')
