export default  {
  name: 'v-on-example',
  props: [],
  mounted() {
    
  },
  data() {
    return {
      mytitle: 'This is a Vue class!' 
    }
  },
  methods: {
    greeting: function() {
      alert('This is an alert!');
    }
  },
  computed: {

  }
}

