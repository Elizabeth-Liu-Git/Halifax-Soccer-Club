<template>
<div>
  <h1>Welcome, {{user.username}}! </h1> 
   <p>Upload your favorite photo and video to AWS Cloud!</p>
      <input type="file" accept="image/*" @change="uploadImage($event)" id="file-input">

   <button> Upload </button>
</div>
</template>

<script>
import { Auth } from 'aws-amplify'
import Vue from 'vue'
import axios from 'axios'
import VueAxios from 'vue-axios'

Vue.use(VueAxios, axios);



export default {
  name: 'Upload',
  data() {
    return {
      previewImage:null,
      user: {}
      
    }
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
      })
      .catch(() => console.log('not signed in...'))
  },
 methods: {

  uploadImage(event) {

    const URL = 'http://foobar.com/upload'; 

    let data = new FormData();
    data.append('name', 'my-picture');
    data.append('file', event.target.files[0]); 

    let config = {
      header : {
        'Content-Type' : 'image/png'
      }
    }

    axios.put(
      URL, 
      data,
      config
    ).then(
      response => {
        console.log('image upload response > ', response)
      }
    )
  }
}
}
</script>