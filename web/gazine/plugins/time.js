import Vue from 'vue'

const timeFilter = Vue.filter('time', function(duration) {
  const minutes = Math.floor(duration / 60)
  let seconds = Math.floor(duration % 60)

  if (seconds < 10) seconds = `0${seconds}`

  return `${minutes}:${seconds}`
})

Vue.use(timeFilter)
