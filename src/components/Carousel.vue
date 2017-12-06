<template>
  <div class="carousel">
    <carousel-3d :autoplay="true" :height="400" :width="400">
      <slide :index="0">
        <img src="http://www.tate.org.uk/sites/default/files/styles/width-420/public/home_decor_mathinna_2_1999.jpg">
      </slide>
      <slide :index="1">
        <img src="http://www.tate.org.uk/art/images/work/A/A00/A00014_8.jpg">
      </slide>
      <slide :index="2">
        <img src="http://www.tate.org.uk/art/images/work/P/P01/P01796_9.jpg">
      </slide>
      <slide :index="3">
        <img src="http://www.tate.org.uk/art/images/work/A/A00/A00083_8.jpg">
      </slide>
      <slide :index="4">
        <img src="http://www.tate.org.uk/art/images/work/T/T04/T04864_9.jpg">
      </slide>
      <slide :index="5">
        <img src="http://www.tate.org.uk/art/images/work/T/T13/T13589_9.jpg">
      </slide>
      <slide :index="6">
        <img src="http://www.tate.org.uk/art/images/work/A/A00/A00057_8.jpg">
      </slide>
    </carousel-3d>
  </div>

</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  components: {
    Carousel3d,
    Slide
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .carousel {
    top: 100px;
    width: 80%;
    left: 10%;
  }
</style>
