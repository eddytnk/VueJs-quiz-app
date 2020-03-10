import { mount, shallowMount } from "@vue/test-utils";
import Header from '@/components/Header.vue';
    
    describe("Header.vue", () => {
      it("test if header mounted with app title", () => {
        const wrapper = shallowMount(Header);
        expect(wrapper.text()).toBe('Eddy Quiz App  Counter: 0/10')
        // expect(wrapper.contains('b-nav-item')).toBe(true)
      });
      
      
    });