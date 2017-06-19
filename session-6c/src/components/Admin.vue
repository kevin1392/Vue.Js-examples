<template lang="html">

  <section class="admin">
	 <b-btn @click="$root.$emit('show::modal','modal1')">Launch Modal</b-btn>
	 <div class="mt-3 mb-3">
		Administrators:
	  	<ul>
			 <li v-for="n in names">{{n}}</li>
		</ul>
	 </div>
	 <b-modal id="modal1" title="Submit your name" @ok="submit" @shown="clearName">       
		<form @submit.stop.prevent="submit">
			<b-form-input type="text" placeholder="Enter your name" v-model="name">
			</b-form-input>
		</form>
	</b-modal>
  </section>

</template>

<script>
  export default  {
    name: 'admin',
    props: [],
    mounted() {

    },
    data() {
      return {
	name: '',
	names: []
      }
    },
    methods: {
	clearName() {
		this.name = '';
	},
	submit() {
		if(!this.name) {
			alert('Please, enter the admin name!');
			return false;
		}
		this.names.push(this.name);
		this.name = '';
		this.$root.$emit('hide::modal', 'modal1');
	}
    },
    computed: {

    }
}
</script>

<style scoped lang="scss">
  .admin {

  }
</style>
