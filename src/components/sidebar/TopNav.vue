<template>
  <div class="lg:hidden p-2 lg:p-5">
    <div class="flex items-center  p-5 rounded-lg shadow-lg">
      <button class="flex-1 lg:hidden" @click="toggleSidebar">
        <img :src="bars" alt="bars" class="w-9" />
      </button>
      <UserTab/>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import { bars } from './icons'
import UserTab from './UserTab.vue'

export default defineComponent({
  name: 'TopNav',
  props: {
    setShowSidebar: {
      type: Function as PropType<(value: boolean) => void>,
      required: true
    }
    },
    components: {
        UserTab
    
  },
  setup(props) {
    const toggleSidebar = () => {
      props.setShowSidebar(true)
    }

    return {
      bars,
      toggleSidebar
    }
  }
})
</script>


