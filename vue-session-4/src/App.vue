<template>
  <div id="app">
    <img src="./assets/logo.png">
    <hello></hello>
    <computer-properties></computer-properties>
    <styles></styles>
  </div>
</template>

<script>
import Hello from './components/Hello'
import ComputerProperties from './components/ComputerProperties/index'
import Styles from './components/Styles/index'

export default {
  name: 'app',
  components: {
    Hello ,
    ComputerProperties ,
    Styles
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
