<template>
  <div class="hidden lg:flex justify-between rounded-lg shadow-lg p-5 font-semibold">
    <h1 class="text-2xl font-bold">Users</h1>
    <p v-if="userStore.offlineMode">You are offline</p>
    <p v-else class=" text-green-500">Online</p>
    <UserTab />
  </div>
</template>

<script lang="ts" setup>
import UserTab from '@/components/sidebar/UserTab.vue'
import { useUserStore } from '@/stores/user';

const userStore = useUserStore()

</script>
