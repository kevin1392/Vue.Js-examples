<template>
  <div id="app">
    <img src="./assets/logo.png">
    
    <b-breadcrumb :items="items" />

    <router-view></router-view>
    <div class="container">
     <div class="row">
      <div class="col-md-4">
        <b-alert show state="danger">
          Default Alert
        </b-alert>
      </div>
      <div class="col-md-4">
        <b-alert state="success" show>
          Success Alert
        </b-alert>
      </div>
      <div class="col-md-4">
        <b-alert state="warning" show>
	  Warning Alert
        </b-alert>
      </div>
     </div>
     <div class="row">
       <b-alert class="col-md-12" show>Super alert!</b-alert>
     </div>
    </div>

  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)

export default {
  name: 'app',
  data() {
    return {
	  items: [
	  { text: 'Admin', link: '/admin', active: true }, 
	  { text: 'Manage', link: '#' }, 
	  { text: 'Library', link: '#' }
	  ]
    }
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
