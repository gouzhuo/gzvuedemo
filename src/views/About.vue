<template>
  <div class="about" :style="{height:nowHeight,backgroundSize: `100% ${nowHeight}`}">
    <div class="gz-youresults">
      <div class="gz-youresults-num">
        <span>您的得分是：</span>
        <span class="red">100分</span>
        <span>太厉害了！</span>
      </div>
    </div>
    <div class="button">
      清空数据返回首页
    </div>
  </div>
</template>
<script>
  export default {
    name:'about',
    data(){
      return {
        nowHeight:0
      }
    },
    created(){
      this.nowHeight = `${window.screen.height}px`;
    }
  }
</script>
<style lang="scss" scoped>
  .about{
    background: url("../assets/images/4-1.jpg") no-repeat center;
    position: relative;
    .gz-youresults{
      width: 2.56rem;
      height: 2.35rem;
      background: url("../assets/images/4-2.png") no-repeat center;
      position: absolute;
      left: 20%;
      top:5%;
      background-size: 2.56rem 2.35rem;
      .gz-youresults-num{
        line-height: 30px;
        font-size: 20px;
        position: absolute;
        left: 32%;
        top:47%;
        span{
          display: block;
        }
        .red{
          font-weight: bolder;
          font-size: 30px;
          color: #ff2566;
        }
      }
    }
    .button{
      width: 1.5rem;
      height: 0.3rem;
      background-color: azure;
      color: black;
      text-align: center;
      line-height: 30px;
      position: absolute;
      right: 8%;
      bottom:8%
    }
  }
</style>
