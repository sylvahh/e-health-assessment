import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import SidebarContainer from '../index.vue'
import Sidebar from '../Sidebar.vue'
import TopNav from '../TopNav.vue'
import SidebarLink from '../SidebarLink.vue'

describe('SidebarContainer.vue', () => {
  it('renders Sidebar and TopNav components', () => {
    const wrapper = mount(SidebarContainer)

    expect(wrapper.findComponent(Sidebar).exists()).toBe(true)
    expect(wrapper.findComponent(SidebarLink).exists()).toBe(true)
    expect(wrapper.findComponent(TopNav).exists()).toBe(true)
  })
})
