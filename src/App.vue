<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    HeaderCmp: defineAsyncComponent(() => import('@/components/HeaderCmp.vue'))
  }
}
</script>

<template>
  <main class="bg-gray-100 min-h-screen">
    <HeaderCmp></HeaderCmp>
    <router-view/>
  </main>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #444444;
}
</style>
