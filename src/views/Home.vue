<template>
  <div class="home" :style="{height:nowHeight,backgroundSize: `100% ${nowHeight}`}">
    <HelloWorld/>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  data(){
    return {
      nowHeight: '0px',
    }
  },
  created(){
    this.nowHeight = `${window.screen.height}px`;
  },
  components: {
    HelloWorld
  }
}
</script>
<style lang="scss" scoped>

  .home{
    background: url("../assets/images/1-1.jpg") no-repeat center;
    position: relative;
  }

</style>
