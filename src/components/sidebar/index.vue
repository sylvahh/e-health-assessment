<template>
  <div>
    <div
      v-if="showSidebar"
      class="lg:hidden fixed h-screen w-screen bg-black opacity-30"
      @click="toggleSidebar"
    ></div>
    <Sidebar :showSidebar="showSidebar" :setShowSidebar="setShowSidebar" />
    <TopNav :setShowSidebar="setShowSidebar" />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
import Sidebar from './Sidebar.vue';
import TopNav from './TopNav.vue';

export default defineComponent({
  name: 'SidebarContainer',
  components: {
    Sidebar,
    TopNav
  },
  setup() {
    const showSidebar = ref(false);

    const setShowSidebar = (value: boolean) => {
      showSidebar.value = value;
    };

    const toggleSidebar = () => {
      showSidebar.value = false;
    };

    return {
      showSidebar,
      setShowSidebar,
      toggleSidebar
    };
  }
});
</script>


