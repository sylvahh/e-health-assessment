<template>
  <tr class="whitespace-nowrap text-left">
    <td class="">{{ idx }}</td>
    <td class="">{{ user.name }}</td>
    <td class="">{{ user.age }}</td>
    <td class="">{{ user.blood_group }}</td>
  </tr>
</template>

<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import type { USER } from '@/global.types';

export default defineComponent({
  name: 'UserEntry',
  props: {
    user: {
      type: Object as PropType<USER>,
      required: true
    },
    idx: {
      type: Number,
      required: true
    }
  }
})
</script>
