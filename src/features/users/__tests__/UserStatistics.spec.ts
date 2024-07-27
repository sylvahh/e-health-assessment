import { mount } from '@vue/test-utils'
import { describe, it, expect, vi } from 'vitest'
import UserStatistics from '../UsersStatistics.vue'
import UsersTable from '../components/table/index.vue'
import BarChart from '../components/barChart/BarChart.vue'
import UserHeader from '../components/header/UserHeader.vue'
import { useUserStore } from '@/stores/user'

// Mock the Pinia store
const mockUserStore = {
  getUsers: vi.fn(),
  users: [],
  isLoading: false,
  offlineMode: false
}

vi.mock('@/stores/user', () => ({
  useUserStore: () => mockUserStore
}))


describe('UserStatistics.vue', () => {
  it('renders child components', () => {
    const userStore = useUserStore()
    userStore.getUsers = vi.fn()

    const wrapper = mount(UserStatistics, {
      global: {
        components: { UsersTable, BarChart, UserHeader }
      }
    })

    expect(wrapper.findComponent(UserHeader).exists()).toBe(true)
    expect(wrapper.findComponent(BarChart).exists()).toBe(true)
    expect(wrapper.findComponent(UsersTable).exists()).toBe(true)
  })
})
