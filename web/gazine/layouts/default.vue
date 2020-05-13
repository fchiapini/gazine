<template>
  <div class="container">
    <Sidebar />
    <div class="header">Header</div>
    <nuxt />
    <div class="player">Player</div>
  </div>
</template>

<script>
import Sidebar from '@/components/Sidebar.vue'
export default {
  components: {
    Sidebar
  }
}
</script>
