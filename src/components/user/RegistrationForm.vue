<template>
    <transition name="modal">
        <div class="modal-mask">
            <div class="modal-wrapper">
                <div class="modal-container lg:w-1/2 md:w-2/3 sm:w-5/6 w-full">
                    <div class="modal-header">
                        Registration Form
                    </div>

                    <div class="modal-body">
                      <form class="w-full max-w-sm" id="registration-form">
                        <slot class="csrf-token"></slot>
                        <input type="hidden" name="action" value="users/save-user"/>
                        <div class="md:flex md:items-center mb-6">
                          <label :class="formClasses.label" for="first-name">
                            Full Name
                          </label>
                          <div class="md:w-2/3">
                            <input :class="formClasses.textInput" id="first-name" type="text" name="firstName" v-model="firstName"/>
                          </div>
                        </div>

                      </form>
                    </div>

                    <div class="modal-footer h-5">
                      <button @click="submitForm()" class="btn btn-secondary">Submit</button>
                      <button @click="$emit('close')" class="btn btn-gray">OK</button>
                    </div>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
  import {required, minLength, between} from "vuelidate";
  import Vue from 'vue';


  export default {
      name: "registration-form",
      data:() => {
          return {
            //tailwind classes
            firstName:"",
            formClasses:{
              textInput: "bg-gray-200 appearance-none border-2 border-gray-200 w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500",
              label: "block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4",
            }
          };
      },
      methods:{
        submitForm(){
           const registrationForm = document.querySelector("#registration-form");

           const formData = this.serialize(registrationForm);

           Vue.axios.post(siteUrl, formData).
           then(response=>{
              console.log(response);
           }).catch(error =>{
              console.log(error);
           })

        },

        // https://gomakethings.com/how-to-serialize-form-data-with-vanilla-js/
        serialize(form){
          // Setup our serialized data
          const serialized = [];

          // Loop through each field in the form
          for (let i = 0; i < form.elements.length; i++) {

            const field = form.elements[i];

            // Don't serialize fields without a name, submits, buttons, file and reset inputs, and disabled fields
            if (!field.name || field.disabled || field.type === 'file' || field.type === 'reset' || field.type === 'submit' || field.type === 'button') continue;

            // If a multi-select, get all selections
            if (field.type === 'select-multiple') {
              for (let n = 0; n < field.options.length; n++) {
                if (!field.options[n].selected) continue;
                serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.options[n].value));
              }
            }

            // Convert field data to a query string
            else if ((field.type !== 'checkbox' && field.type !== 'radio') || field.checked) {
              serialized.push(encodeURIComponent(field.name) + "=" + encodeURIComponent(field.value));
            }
          }

          return serialized.join('&');
        }
      },
      validate:{
          firstName:{
            required: true,
          }
      }
  }
</script>

<style scoped>


</style>
