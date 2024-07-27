import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import TopNav from '../TopNav.vue'

describe('TopNav.vue', () => {
  it('calls setShowSidebar with true on button click', async () => {
    const setShowSidebar = vi.fn()
    const wrapper = mount(TopNav, {
      props: {
        setShowSidebar
      }
    })

    await wrapper.find('button').trigger('click')
    expect(setShowSidebar).toHaveBeenCalledWith(true)
  })
})
