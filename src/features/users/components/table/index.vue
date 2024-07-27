<template>
  <div class="users-table relative overflow-auto lg:max-h-screen">
    <table>
      <thead>
        <tr class="whitespace-nowrap text-left">
          <th scope="col" class="">S/N</th>
          <th scope="col" class="">name</th>
          <th scope="col" class="">Age</th>
          <th scope="col" class="">blood group</th>
        </tr>
      </thead>
      <tbody>
        <template v-if="!isLoading">
          <UserEntry v-for="(item, idx) in data" :key="item.id" :user="item" :idx="idx + 1" />
        </template>
      </tbody>
    </table>
    <div v-if="isLoading" class="flex items-center justify-center h-96">
      <div class="spinner"></div>
    </div>
    <div v-else-if="data.length < 1" class="no-record-found capitalize">no record found</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import UserEntry from './UserEntry.vue'
import { type USER } from '@/global.types'

export default defineComponent({
  name: 'UsersTable',
  components: {
    UserEntry
  },
  props: {
    data: {
      type: Array as PropType<USER[]>,
      required: true
    },
    isLoading: {
      type: Boolean,
      required: true
    }
  }
})
</script>

<style>
.users-table {
  @apply bg-neutral-100 p-3 mt-5 rounded-lg;
}
.users-table table {
  @apply w-full;
}

.users-table thead {
  @apply text-neutral-900 bg-neutral-100 sticky -top-3 z-10;
}

.users-table th {
  @apply px-5 py-3 capitalize text-lg font-semibold border-none;
}

.users-table tbody > tr {
  @apply bg-white text-neutral-500 border-b hover:bg-neutral-200;
}

.users-table tbody > tr:nth-child(even) {
  @apply bg-neutral-100 hover:bg-neutral-200;
}
.users-table tbody td {
  @apply px-5 py-2  capitalize;
}

/* Handle */
.users-table::-webkit-scrollbar-thumb {
  background: #4a5567 !important;
}

.users-table::-webkit-scrollbar {
  width: 3px !important;
  height: 3px;
  border-radius: 100px !important;
}
</style>
