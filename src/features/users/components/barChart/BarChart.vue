<template>
  <highcharts :options="chartOptions"></highcharts>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { getStaticChartOptions } from './chartOptions'

export default defineComponent({
  name: 'BarChart',

  setup() {
    const userStore = useUserStore()

    const chartOptions = computed(() => {
      const staticOptions = getStaticChartOptions()
      return {
        ...staticOptions,
        series: userStore.groupedData
      }
    })

    return {
      chartOptions
    }
  }
})
</script>

<style scoped>
/* Add any custom styles here */
</style>
