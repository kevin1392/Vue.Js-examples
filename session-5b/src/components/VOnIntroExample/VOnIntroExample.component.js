export default  {
  name: 'v-on-intro-example',
  props: [],
  mounted() {
    
  },
  data() {
    return {
      firstname: 'Manuel',
      lastname: 'Diaz'  
    }
  },
  methods: {
    getFullname: function() {
      return this.firstname + ' ' + this.lastname;
    },
    getFullname3: function(first, last) {
      return first + ' ' + last;
    }
  },
  computed: {
   getFullname2: function() {
     return this.firstname + ' ' + this.lastname;	  
   }
  }
}

