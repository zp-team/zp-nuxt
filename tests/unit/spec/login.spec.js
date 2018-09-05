import { shallowMount } from '@vue/test-utils'
import Toolbar from '~/components/Toolbar/index.vue'

describe('Toolbar', () => {
  it('右边浮动测试', () => {
    const wrapper = shallowMount(Toolbar)
    wrapper.find('.backTop').trigger('click')
    expect(document.body.scrollTop).toBe(0)
    expect(wrapper.vm.scrollTag).toBe(false)
  })
})