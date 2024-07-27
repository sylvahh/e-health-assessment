<template>
  <img :src="userIcon" alt="user-icon" class="w-10 h-10 rounded-full" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { userIcon } from './icons'

export default defineComponent({
  setup() {
    return {
      userIcon
    }
  }
})
</script>
