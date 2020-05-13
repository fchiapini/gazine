<template>
  <div class="container">
    <Sidebar />
    <Header />
    <nuxt />
    <div class="player">Player</div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
import Header from '@/components/Header.vue'
export default {
  components: {
    Sidebar,
    Header
  }
}
</script>
