import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'


// import FIREBASE AUTH
import { projectAuth } from './firebase/config'



// import css 
import './assets/CSS/main.css'


// import the fontawesome core
import { library } from '@fortawesome/fontawesome-svg-core'
// import font awesome icon component
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
// import specific icon libraries 
import { fas } from '@fortawesome/free-solid-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

// add icons to the library 
library.add( fas, fab )


let app

projectAuth.onAuthStateChanged(()=>{
    if (!app) {
        app = createApp(App)
        
        app.use(createPinia())
        app.use(router)
        app.component('font-awesome-icon', FontAwesomeIcon)
        app.mount('#app')
    }
})


// const app = createApp(App)

// app.use(createPinia())
// app.use(router)
// app.component('font-awesome-icon', FontAwesomeIcon)
// app.mount('#app')