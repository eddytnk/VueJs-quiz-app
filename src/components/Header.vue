<template>
<div>
  <b-nav tabs>
    <b-nav-item disabled>Eddy Quiz App</b-nav-item>
    <b-nav-item disabled> <CounterBox/></b-nav-item>
  </b-nav>
</div>
</template>

<script>
import CounterBox  from './CounterBox.vue'

export default {
  components:{
    CounterBox
  }
}
</script>
