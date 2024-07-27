<template>
  <aside :class="[showSidebar ? 'z-10' : '-left-[75%] lg:left-0', 'sidebar']">
    <SidebarHeader :setShowSidebar="setShowSidebar" />
    <div class="h-full px-2 py-10 lg:pr-5 flex flex-col">
      <ul class="space-y-10 flex-grow">
        <SidebarLink
          v-for="(link, idx) in sidebarLinks"
          :key="idx"
          :link="link"
          :currentPath="currentPath"
          :activeLink="activeLink"
          :setActiveLink="setActiveLink"
        />
      </ul>
    </div>
  </aside>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import SidebarHeader from './SidebarHeader.vue'
import SidebarLink from './SidebarLink.vue'
import { sidebarLinks } from './data'

export default defineComponent({
  name: 'SidebarComponent',
  components: {
    SidebarHeader,
    SidebarLink
  },
  props: {
    showSidebar: {
      type: Boolean,
      required: true
    },
    setShowSidebar: {
      type: Function,
      required: true
    }
  },
  setup() {
    const activeLink = ref('')
    const currentPath = ref(window.location.pathname)

    const setActiveLink = (link: string) => {
      activeLink.value = link
    }

    return {
      sidebarLinks,
      activeLink,
      currentPath,
      setActiveLink
    }
  }
})
</script>

<style scoped>
.sidebar {
  @apply fixed  bg-blue-900 lg:translate-x-0  w-[75%] lg:w-[20%] h-[100vh];
}
</style>
