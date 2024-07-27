<template>
  <router-link
    :to="link.path"
    :class="{ 'bg-white': isActive, 'text-white': !isActive, 'nav-links': true }"
    @mouseover="setActiveLink(link.name)"
    @mouseleave="resetActiveLink"
  >
    {{ link.name }}
    <img :src="isActive ? link.activeIcon : link.icon" :alt="link.name" class="w-6" />
  </router-link>
</template>

<script lang="ts">
import { defineComponent, computed,type PropType } from 'vue'
import { useRoute } from 'vue-router'
import {type SidebarLinksTypes } from './data'

export default defineComponent({
  name: 'SidebarLink',
  props: {
    link: {
      type: Object as PropType<SidebarLinksTypes>,
      required: true
    },

    activeLink: {
      type: String,
      required: true
    },
    setActiveLink: {
      type: Function,
      required: true
    }
  },
  setup(props) {
    const route = useRoute()

    const isActive = computed(() => {
      const allPaths = [props.link.path, ...props.link.relativePaths]
      return (
        allPaths.some((pathPrefix) => route?.path.startsWith(pathPrefix)) ||
        props.activeLink === props.link.name
      )
    })

    const resetActiveLink = () => {
      props.setActiveLink('')
    }

    return {
      isActive,
      resetActiveLink
    }
  }
})
</script>

<style scoped>
.nav-links {
  @apply flex justify-between p-5 rounded-lg text-lg hover:bg-white hover:text-black font-semibold capitalize transition-colors duration-300;
}
</style>
