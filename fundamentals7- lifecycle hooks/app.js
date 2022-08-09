let vm = Vue.createApp({
  data() {
    return {
      message: "Hello world!"
    }
  },
  beforeCreate() {
    console.log('beforeCreate() function called!', this.message)
  },
  created() {
    console.log('create() function called!', this.message)
  },
  beforeMount() {
    console.log('beforeCreate() function called!', this.$el)
  },
  mounted() {
    console.log('mounted() function called!', this.message)
  },
  beforeUpdate(){
    console.log('beforeUpdate() function called!')
  },
  updated(){
    console.log('updated() function called!')
  }
})

vm.mount('#app')

// setTimeout(() => {
//   vm.mount('#app')
// }, 3000)