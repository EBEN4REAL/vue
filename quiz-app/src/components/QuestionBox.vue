<template>
  <div class="question-box-container">
    <b-jumbotron>
      <template v-if="question" v-slot:lead>{{ question.question }}</template>

      <hr class="my-4" />

      <b-list-group>
        <b-list-group-item
          v-for="(answer, index) in answers.answers"
          :key="index"
          @click="selectAnswer(index)"
          :class="[[selectedIndex === index ? 'selected' : ''], [index === correctAnswer ? 'correct' : ''], [((wrongAnswer === index) && wrongAnswer !== correctAnswer) ? 'incorrect' : '']]"
        >{{ answer }}</b-list-group-item>
      </b-list-group>

  <p>{{ answers.random }}</p>

      <b-button variant="primary" 
      @click="submitAnswer" :disabled="selectedIndex === null">Submit</b-button>
      <b-button variant="success" @click="next">Next</b-button>
    </b-jumbotron>
  </div>
</template> 

<script>
export default {
  props: {
    question: Object,
    next: Function, 
  },
  data() {
    return {
      selectedIndex: null, 
      correctAnswer: null,
      wrongAnswer: null,
      count: 0,   
    };
  },
  // computed has methods that return values
  computed: {
    answers() {
      var random = Math.floor(Math.random() * 4);
      let answers = this.question.incorrect_answers;
      answers.splice(random, 0, this.question.correct_answer);
      return { answers, random };
    }
  },
  // Watch watches for changes in props, and runs when the props change, it's methods have the same name as the prop to be watched
  watch: {
    question() {
      this.selectedIndex = null;
      this.correctAnswer = null;
      this.wrongAnswer = null;
    }
    // if you want it to run immediately, instead of wait for a first change, do below
    // question: {
    //   immediate: true,
    //   handler() {
    //     this.selectedIndex = null
    //   }
    // }
  },
  // methods contian methods, they don't return any value
  methods: {
    selectAnswer(index) {
      console.log(this.limit)
      if (this.correctAnswer !== null) {
        alert('You can only select once')
        return
      }
      this.selectedIndex = index;
      // console.log(index);
    }, 
    submitAnswer() {
      if (this.selectedIndex === null) {
        alert('Please select an option')
        return
      }
      if (this.correctAnswer !== null) {
        alert('You can only submit once')
        return
      }
      this.correctAnswer = this.answers.random
      if (this.answers.random === this.selectedIndex) this.count++
      this.onCount()
      this.wrongAnswer = this.selectedIndex
    },
    onCount () {
      this.$emit('clicked', this.count)
    }
  }
};
</script>

<style>
.list-group {
  margin-bottom: 15px;
}

.list-group-item:hover {
  background: #eee;
  cursor: pointer;
}

.btn {
  margin: 0 5px;
}

.selected {
  background-color: lightblue !important;
}

.correct {
  background-color: lightgreen !important;
}

.incorrect {
  background-color: red !important;
}
</style>