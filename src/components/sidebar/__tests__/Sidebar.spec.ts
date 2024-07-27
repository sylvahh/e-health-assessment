import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarComponent from '../Sidebar.vue'
import SidebarHeader from '../SidebarHeader.vue'
import NavLink from '../SidebarLink.vue'
import { sidebarLinks } from '../data'

describe('SidebarComponent.vue', () => {
  it('renders SidebarHeader and NavLink components', () => {
    const wrapper = mount(SidebarComponent, {
      props: {
        showSidebar: true,
        setShowSidebar: vi.fn()
      }
    })

    expect(wrapper.findComponent(SidebarHeader).exists()).toBe(true)
    expect(wrapper.findAllComponents(NavLink).length).toBe(sidebarLinks.length)
  })
})
