<template>
  <div class="question-box-component">
    <CounterBox />
    <b-jumbotron>
      <template v-slot:lead>{{question.question}}</template>
      <hr class="my-4" />
      <b-list-group>
        <b-list-group-item v-for="(ans, index) in answers" :key="index">
          <AnswerBox :answer="ans" :correctAnswer="question.correct_answer" :next="next" />
        </b-list-group-item>
      </b-list-group>
      <b-button variant="success" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template>
<script>
import AnswerBox from "./AnswerBox.vue";
import CounterBox from "./CounterBox.vue";
export default {
  name: "QuestionBox",
  components: {
    AnswerBox,
    CounterBox
  },
  props: {
    question: Object,
    next: Function
  },
  computed: {
    answers() {
      let ans = [...this.question.incorrect_answers];
      ans.push(this.question.correct_answer);
      var currentIndex = ans.length;
      var temporaryValue, randomIndex;
      while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = ans[currentIndex];
        ans[currentIndex] = ans[randomIndex];
        ans[randomIndex] = temporaryValue;
      }
      return ans;
    }
  }
};
</script>