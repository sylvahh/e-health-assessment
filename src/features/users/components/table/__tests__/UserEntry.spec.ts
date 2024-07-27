import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UserEntry from '../UserEntry.vue'
import type { USER } from '@/global.types'

describe('UserEntry.vue', () => {
  it('renders user data correctly', () => {
    const user: USER = { id: '1', name: 'John Doe', age: '30', blood_group: 'A+' }
    const idx = 1
    const wrapper = mount(UserEntry, {
      props: { user, idx }
    })

    expect(wrapper.text()).toContain('1')
    expect(wrapper.text()).toContain('John Doe')
    expect(wrapper.text()).toContain('30')
    expect(wrapper.text()).toContain('A+')
  })
})
