<template>
<div>
  <h1>Welcome, {{user.username}}! </h1> 
   <p>Upload your favorite photo and video to AWS Cloud!</p>
   <div v-if="!image">
      <h2>Select an image</h2>
      <input type="file" @change="onFileChange">
    </div>
    <div v-else>
      <img :src="image" />
      <button v-if="!uploadURL" @click="removeImage">Remove image</button>
      <button v-if="!uploadURL" @click="uploadImage">Upload image</button>
    </div>
    <h2 v-if="uploadURL">Success! Image uploaded to bucket, you will receive an email confirmation as well!</h2>
</div>
</template>

<script>
import axios from 'axios'

import { Auth } from 'aws-amplify'

const MAX_IMAGE_SIZE = 1000000

const API_ENDPOINT = 'https://5ix6fcr1ve.execute-api.us-east-1.amazonaws.com/default/getPresignedURL'


export default {
  name: 'Upload',
  data() {
    return {
      user: {},
      file:"",
      image: '',
      uploadURL: ''
    }
  },
  methods:{
     onFileChange (e) {
      let files = e.target.files || e.dataTransfer.files
      if (!files.length) return
      this.createImage(files[0])
    },
    createImage (file) {
      // var image = new Image()
      let reader = new FileReader()
      reader.onload = (e) => {
        console.log('length: ', e.target.result.includes('data:image/jpeg'))
        if (!e.target.result.includes('data:image/jpeg')) {
          return alert('Wrong file type - JPG only.')
        }
        if (e.target.result.length > MAX_IMAGE_SIZE) {
          return alert('Image is loo large - 1Mb maximum')
        }
        this.image = e.target.result
      }
      reader.readAsDataURL(file)
    },
    removeImage: function () {
      this.image = ''
    },
    uploadImage: async function () {
      // Get the presigned URL
      const response = await axios({
        method: 'GET',
        url: API_ENDPOINT
      })
      let binary = atob(this.image.split(',')[1])
      let array = []
      for (var i = 0; i < binary.length; i++) {
        array.push(binary.charCodeAt(i))
      }
      let blobData = new Blob([new Uint8Array(array)], {type: 'image/jpeg'})
      console.log('Uploading to: ', response.data.uploadURL)
      const result = await fetch(response.data.uploadURL, {
        method: 'PUT',
        body: blobData
      })
      console.log('Result: ', result)
      // Final URL for the user doesn't need the query string params
      this.uploadURL = response.data.uploadURL.split('?')[0]
    },
      beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
      })
      .catch(() => console.log('not signed in...'))
  }
    

}
}


</script>