<script setup lang="ts">
import { RouterView } from 'vue-router'
import SidebarContainer from './components/sidebar/index.vue'
</script>

<template>
  <SidebarContainer />
  <div class="p-5 lg:ml-64">
    <RouterView />
  </div>
</template>


