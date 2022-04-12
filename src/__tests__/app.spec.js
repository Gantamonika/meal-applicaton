import { mount } from '@vue/test-utils'
import App from './../src/components/App.vue'
import Footer from './../src/components/Footer.vue'
import router from "../src/router/index"

describe('App', () => {
  it('has data', () => {
    expect(typeof App.data).toBe('function')
  })
})

describe('Mounted App', () => {

  const wrapper = mount(App, {
    global: {
      plugins: [router]
    }
  });

it('has a Footer',()=>{
  expect(wrapper.findComponent(Footer).exists()).toBe(true)
})

})
