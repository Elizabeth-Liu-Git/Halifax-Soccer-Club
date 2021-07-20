<template>
<div>
  <h1>Welcome, {{user.username}}! </h1> 
   <p>Upload your favorite photo and video to AWS Cloud!</p>
   <button> Upload </button>
</div>
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  name: 'Upload',
  data() {
    return {
      user: {}
    }
  },
  beforeCreate() {
    Auth.currentAuthenticatedUser()
      .then(user => {
        this.user = user
      })
      .catch(() => console.log('not signed in...'))
  }
}
</script>