import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarHeader from '../SidebarHeader.vue'

describe('SidebarHeader.vue', () => {
  it('calls setShowSidebar on button click', async () => {
    const setShowSidebar = vi.fn()
    const wrapper = mount(SidebarHeader, {
      props: {
        setShowSidebar
      }
    })

    await wrapper.find('button').trigger('click')
    expect(setShowSidebar).toHaveBeenCalledWith(false)
  })
})
