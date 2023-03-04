import {createApp} from 'vue'
import App from './App.vue'

// 全局注册组件库
import sunnyUI from '@sunny/components'

const app = createApp(App)

app.use(sunnyUI)

app.mount('#app')

