<template>

   <div class="container">

      <p class="fade-in-text">Panorama FC</p>
      <img class="logo" v-bind:src="srcLogo">;  
    </div>
</template>


<script>
// https://stackoverflow.com/questions/47535317/how-to-fade-in-images-when-loaded-with-vue
export default {
  name: 'Home',
  data: function() {
    return {
      src: require('../assets/backgroundSmall.jpeg'),
      srcLogo: require('../assets/Untitled-3.png'),
      loaded: false,
    }
  },
  methods: {
    onLoaded() {
      this.loaded = true;
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.fade-in-text {
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 5vw;
  color: whitesmoke;
  animation: fadeIn linear 5s;
  -webkit-animation: fadeIn linear 5s;
  -moz-animation: fadeIn linear 5s;
  -o-animation: fadeIn linear 5s;
  -ms-animation: fadeIn linear 5s;
}

.logo {
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: 60%;
  height:auto;
}

.container {
  
  background-image: url('../assets/backgroundSmall.jpeg');
  background-repeat:no-repeat;
-webkit-background-size:cover;
-moz-background-size:cover;
-o-background-size:cover;
background-size:cover;
background-position:center;
}

h1, h2 {
  font-weight: normal;
}


.fade-enter-active {
  transition: opacity 3s ease-in-out;
}
.fade-enter-to {
  opacity: 1;
}
.fade-enter {
  opacity: 0;
}

.button{
  animation: blinker 2s linear infinite;
  border:5px;
  border-color: white;
}


@keyframes blinker {
  50% {
    opacity: 0.5;
  }
}

</style>
