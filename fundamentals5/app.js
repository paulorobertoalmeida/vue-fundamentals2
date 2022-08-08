let vm = Vue.createApp({
  data() {
    return {
      people: [
        {
          name: 'John',
          message: 'Hello world!'
        },
        {
          name: 'Rick',
          message: 'I like pie.'
        },
        {
          name: 'Amy',
          message: 'Skydiving is fun!'
        },
        {
          name: 'Paulo',
          message: 'I like Vue'
        }
      ]
    }
  },
  methods: {
    move() {
      const first = this.people.shift()

      this.people.push(first)
    }
  }
}).mount('#app')
