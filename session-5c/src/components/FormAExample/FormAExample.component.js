import VueFormGenerator from  "vue-form-generator";
import Vue from 'vue';

Vue.use(VueFormGenerator);

export default  {
  name: 'form-a-example',
  components: {"vue-form-generator": VueFormGenerator.component},
  props: [],
  mounted() {
    
  },
  data() {
    return {
	    model: {
		    id: 100,
		    name: "Manuel Diaz",
		    password: "qwertyuiop",
		    skills: ["Javascript", "Vue.Js"],
		    email: "manuel.diaz@gmail.com",
		    status: true
	    },
	    schema: {
		    fields: [
		    {
			 type: "input",
		   	 inputType: "text",
			 label: "ID (disabled text field)",
			 model: "id",
			 readonly: true,
			 disabled: true
		    }, 
		    {
			type: "input",
			inputType: "text",
			label: "Name",
			model: "name",
			placeholder: "Your name goes here",
			featured: true,
			required:true
		    },
		    {
			type: "input",
			inputType: "password",
			label: "Password",
			model: "password",
			min: 4,
			required: true,
			hint: "Write as minimum 4 characters",
			validator: VueFormGenerator.validators.string
		    },
		    {
			type: "select",
			label: "Skills",
			model: "skills",
			values: ["Javascript", "Vue.Js", "CSS", "HTML"]
		    },
		    {
			type: "input",
			inputType: "email",
			label: "E-mail",
			model: "email",
			placeholder: "You email goes here"
		    },
		    {
			type: "checkbox",
			label: "Status",
			model: "status",
			default: true
		    }
		    ]
	    },

	    formOptions: {
		    validateAfterLoad: true,
		    validateAfterChanged:true
	    }
    }
  },
  methods: {
   
  },
  computed: {

  }
}

