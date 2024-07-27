<template>
  <UserHeader />
  <div class="my-10 space-y-5">
    
    <BarChart/>
    <div>
<h1 class="text-2xl font-bold">Users Table</h1>
        <UsersTable :is-loading="userStore.isLoading" :data="userStore.users" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useUserStore } from '@/stores/user'
import UsersTable from './components/table/index.vue'
import BarChart from './components/barChart/BarChart.vue'
import UserHeader from './components/header/UserHeader.vue'

const userStore = useUserStore()

onMounted(async () => {
  if (userStore.offlineMode) {
    await userStore.getUsers()
  } else {
    alert('You are currently ofline ')
    const savedData = await userStore.loadData()
    userStore.users = savedData
  }
})
</script>
