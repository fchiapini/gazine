<template>
  <div class="container">
    <Sidebar />
    <Header />
    <nuxt />
    <Player />
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
import Player from '@/components/Player.vue'
export default {
  components: {
    Sidebar,
    Header,
    Player
  }
}
</script>
