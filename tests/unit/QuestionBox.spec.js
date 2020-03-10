import { shallowMount } from "@vue/test-utils";
import QuestionBox from '@/components/QuestionBox.vue';
    
    describe("QuestionBox.vue", () => {
      it("renders props when passed", () => {
        const question = {incorrect_answers:['abc','bcb'], correct_answer:'correct', question: 'some question'}
        const next = function(){};
            const wrapper = shallowMount(QuestionBox, {
              propsData: { question, next }
            })
            expect(wrapper.props().question).toBe(question)
            expect(wrapper.props().next).toBe(next)
      });
      
      it("next button click", () => {
        const question = {incorrect_answers:['abc','bcb'], correct_answer:'correct', question: 'some question'}
        const next = function(){};
            const wrapper = shallowMount(QuestionBox, {
              propsData: { question, next }
            })
            const button = wrapper.find('b-button')
            button.trigger('click')
              
      });

    });