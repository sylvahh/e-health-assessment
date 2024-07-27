<template>
  <div class="hidden lg:flex justify-between rounded-lg shadow-lg p-5">
    <h1 class="text-2xl font-bold">Users</h1>
    <UserTab />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserTab from '@/components/sidebar/UserTab.vue'
export default defineComponent({
  name: 'UserHeader',
  components: {
    UserTab
  },

  
})
</script>
