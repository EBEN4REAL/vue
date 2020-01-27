<template>
  <div id="app">
    <Header 
    :count="correctCount"
    :index="index"
    :length="questions.length"
    />
    <QuestionBox 
    :question="questions[index]"
    :next="next"
    @clicked="counting"
    />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import QuestionBox from './components/QuestionBox.vue'

export default {
  name: 'app',
  components: {
    Header,
    QuestionBox
  },
  data() {
    return {
      questions: [],
      index: 0, 
      correctCount: 0, 
    }
  }, 
  methods: {
    next() { 
      if (this.index === this.questions.length) return
      this.index++
    }, 
    counting (value) {
      this.correctCount = value 
    } 
  },
  mounted: function() {
    fetch('https://opentdb.com/api.php?amount=10&category=11&type=multiple', {
      method: 'get'
    })
      .then(res => res.json())
      .then(res => {
        this.questions = res.results
      })
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
