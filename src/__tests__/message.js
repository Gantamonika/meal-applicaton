import { shallowMount } from '@vue/test-utils'
import Foo from './Foo.vue'

describe('Home', () => {
  it('renders a message and responds correctly to user input', () => {
    const wrapper = shallowMount(Home, {
      data() {
        return {
          message: 'Hello World',
          
        }
      }
    })

    // see if the message renders
    expect(wrapper.find('.message').text()).toEqual('Hello World')

   

   
  })
})