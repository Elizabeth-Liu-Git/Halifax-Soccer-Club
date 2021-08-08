<template>

  <div>

  <h2 class ="h2">Photos and Videos from AWS S3</h2>

  
  <div id="img-slider" class ='slider'>
    <vue-image-slider :images="imageArray" :intervalVal=3000 :height=700 :width=1200 />
  </div>


  </div>
</template>



<script>
 import VueImageSlider from 'vue-image-slider'
 
export default {
 name: 'app',
 components: {
  VueImageSlider
 },
 data() {
  return {
   imageArray: [
     // to add more pics here
    'https://s3.amazonaws.com/picuploadsnew/1626998210906.jpg',
     'https://picuploadsnew.s3.amazonaws.com/1626998881427.jpg',
     'https://picuploadsnew.s3.amazonaws.com/1627071474177.jpg'
   ],
  }
 },
}
</script>

<style scoped>

.h2{
  font-size: 3rem;
}

.slider{
  display: flex;
  margin-left: auto;
  margin-right: auto;
  width: auto;
  height:auto;
}

</style>



