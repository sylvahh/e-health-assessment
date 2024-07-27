import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import UsersTable from '../index.vue'
import UserEntry from '../UserEntry.vue'
import { type USER } from '@/global.types'

describe('UsersTable.vue', () => {
  it('displays loading spinner when loading', () => {
    const wrapper = mount(UsersTable, {
      props: { data: [], isLoading: true }
    })

    expect(wrapper.find('.spinner').exists()).toBe(true)
  })

  it('displays "no record found" when there is no data', () => {
    const wrapper = mount(UsersTable, {
      props: { data: [], isLoading: false }
    })

    expect(wrapper.find('.no-record-found').exists()).toBe(true)
  })

  it('renders user entries correctly', () => {
    const users: USER[] = [
      { id: '1', name: 'John Doe', age: '30', blood_group: 'A+' },
      { id: '2', name: 'Jane Smith', age: '25', blood_group: 'B+' }
    ]
    const wrapper = mount(UsersTable, {
      props: { data: users, isLoading: false }
    })

    const userEntries = wrapper.findAllComponents(UserEntry)
    expect(userEntries.length).toBe(2)
    expect(userEntries[0].props().user).toEqual(users[0])
    expect(userEntries[1].props().user).toEqual(users[1])
  })
})
