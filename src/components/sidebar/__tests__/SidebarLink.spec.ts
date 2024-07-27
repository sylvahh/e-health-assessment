import { describe, it, expect, vi } from 'vitest'
import { mount } from '@vue/test-utils'
import NavLink from '../SidebarLink.vue'
import { type SidebarLinksTypes } from '../data'

// Mock vue-router's useRoute
vi.mock('vue-router', () => ({
  useRoute: () => ({
    path: '/current-path'
  })
}))

describe('NavLink.vue', () => {
  const link: SidebarLinksTypes = {
    path: '/current-path',
    name: 'Home',
    icon: 'icon.png',
    activeIcon: 'active-icon.png',
    relativePaths: []
  }

  it('sets the correct class when active', () => {
    const wrapper = mount(NavLink, {
      props: {
        link,
        activeLink: 'Home',
        setActiveLink: vi.fn()
      }
    })

    expect(wrapper.classes()).toContain('bg-white')
  })

  it('calls setActiveLink on mouse over and resetActiveLink on mouse leave', async () => {
    // Mock setActiveLink and resetActiveLink
    const setActiveLink = vi.fn()
    const resetActiveLink = vi.fn()

    // Mount the component with mocks
    const wrapper = mount(NavLink, {
      props: {
        link,
        activeLink: '',
        setActiveLink
      },
      global: {
        mocks: {
          resetActiveLink
        }
      }
    })

    // Trigger mouse over and verify setActiveLink is called
    await wrapper.trigger('mouseover')
    expect(setActiveLink).toHaveBeenCalledWith('Home')

    // Trigger mouse leave and verify resetActiveLink is called
    await wrapper.trigger('mouseleave')
    expect(resetActiveLink).toHaveBeenCalled()
  })
})
