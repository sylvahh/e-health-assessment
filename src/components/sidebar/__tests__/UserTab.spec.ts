import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import UserTab from '../UserTab.vue'

describe('UserTab.vue', () => {
  it('renders user icon image', () => {
    const wrapper = mount(UserTab)
    const img = wrapper.find('img')

    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('/src/components/sidebar/icons/user-icon.svg') 
  })
})
