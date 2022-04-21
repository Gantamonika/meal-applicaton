import { mount } from '@vue/test-utils'
import App from '../App.vue'
import Footer from '../components/Footer.vue'
import router from "../router/index"
import Home from "../components/Home.vue"
import RandomMeal from "../components/RandomMeal.vue"
import Search from "../components/Search.vue"

describe('App', () => {
  it('has data', () => {
    expect(typeof App.data).toBe('undefined')
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




describe('Home', () => {
    it('has data', () => {
      expect(typeof Home.data).toBe('function')
    })
  })
  
  describe('Mounted App', () => {
  
    const wrapper = mount(Home, {
      global: {
        plugins: [router]
      }
    });
  
  it('has a RandomMeal',()=>{
    expect(wrapper.findComponent(RandomMeal).exists()).toBe(false)
  })

  it('has a Search',()=>{
    expect(wrapper.findComponent(Search).exists()).toBe(false)
  })
  
  })
  