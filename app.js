let vm = Vue.createApp({
    data(){
        return {
            isPurple: false
        }
    },
    computed:{
        circle_classes(){
            {purple: isPurple}
        }
    }
}).mount('#app')