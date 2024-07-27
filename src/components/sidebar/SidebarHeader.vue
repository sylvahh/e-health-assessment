<template>
  <div class="flex items-center p-5 border-b border-gray">
    <h1
      class="flex-1 flex flex-col gap-5 text-2xl lg:flex-row ubuntu-medium text-default text-white capitalize"
    >
      Admin
    </h1>
    <button class="lg:hidden text-2xl font- text-white" @click="closeSidebar">
      x
    </button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'SidebarHeader',
  props: {
    setShowSidebar: {
      type: Function,
      required: true
    }
  },
  methods: {
    closeSidebar() {
      this.setShowSidebar(false)
    }
  }
})
</script>


