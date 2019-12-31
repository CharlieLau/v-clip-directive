> 看看源码就行 简单的一批
```html
    <script type="module">
        import Vue from 'https://unpkg.com/vue@2.6.0/dist/vue.esm.browser.min.js';
        import VClip  from '../index.js'
        Vue.use(VClip)

        const APP = Vue.component('APP',{
            template:`
                <div>
                    <div v-clip="()=>console.log(\'copy success!!\')" >hello world</div>
                    <div v-clip="()=>console.log(\'copy success!!\')" >hello world</div>
                    <input v-clip></input>
                </div>
            `
        })
        new Vue({
            render:h=>h(APP)
        }).$mount('#app')
    </script>
```
