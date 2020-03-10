<template>
  <div>
    <div>Question: {{counter}}</div>
    <div>Score: {{score}}/10</div>
  </div>
</template>

<script>
export default {
  name: "CounterBox",
  computed: {
    counter() {
      return this.$store.getters.counter;
    },
    score() {
      return this.$store.getters.score;
    }
  }
};
</script>   