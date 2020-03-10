<template>
  <div class="answer-box-componet">
    <div class="ansBox" @click="selectOption">{{answer}}</div>
  </div>
</template>

<script>
export default {
  name: "AnswerBox",
  props: {
    answer: String,
    correctAnswer: String,
    next: Function
  },
  methods: {
    selectOption() {
      if (this.correctAnswer === this.answer) {
        this.$store.dispatch("inrementScoreAction", 1);
      }
      this.next();
    }
  }
};
</script>

<style>
.ansBox {
  cursor: pointer;
}
</style>