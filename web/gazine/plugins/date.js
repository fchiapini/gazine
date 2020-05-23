import Vue from 'vue'

const dateFilter = Vue.filter('date', function(date) {
  const formatedDate = new Date(date)

  return `${formatedDate.toLocaleString('default', {
    month: 'short'
  })} ${formatedDate.getDate()}, ${formatedDate.getFullYear()}`
})

Vue.use(dateFilter)
