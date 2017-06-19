<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <v-on-intro-example></v-on-intro-example>
    <v-on-example></v-on-example>
  </div>
</template>

<script>
import Hello from './components/Hello'
import VOnIntroExample from './components/VOnIntroExample/index'
import VOnExample from './components/VOnExample/index'

export default {
  name: 'app',
  components: {
    Hello,
    VOnIntroExample,
    VOnExample
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
