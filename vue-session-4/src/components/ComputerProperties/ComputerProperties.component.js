export default  {
  name: 'computer-properties',
  props: [],
  mounted() {
    
  },
  data() {
    return {
	    original_message: 'session 4'
      
    }
  },
  methods: {
	  reversed_message_method: function(){
		  return this.original_message.length
   	}
  },
  computed: {
	  reversed_message: function(){
		  return this.original_message.split('').reverse().join('');
	}

  }
}

