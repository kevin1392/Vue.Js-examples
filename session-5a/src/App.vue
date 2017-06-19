<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <v-bind-example></v-bind-example>
  </div>
</template>

<script>
import Hello from './components/Hello'
import VBindExample from './components/VBindExample/index'

export default {
  name: 'app',
  components: {
    Hello,
    VBindExample
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
