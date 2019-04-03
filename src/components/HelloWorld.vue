<template>
  <div class="hello">
    <div class="gz-top-world">
      <span>第一周</span>
    </div>
    <div class="gz-top-center-word" :style={display:centerAccord}></div>
    <div class="gz-btn-start" :style={display:btnstart}></div>
    <div class="gz-btn-next" :style={display:btnnext}></div>
    <div class="gz-btn-submit" :style={display:btnsubmit}></div>
    <div class="gz-question-content" :style={display:questionContent}>
      <p>题目一</p>
      <ul>
        <li><span>Ⓐ</span><a :qcore="20">对的</a></li>
        <li><span>Ⓑ</span><a :qcore="0">错的</a></li>
        <li><span>Ⓒ</span><a :qcore="0">错的</a></li>
        <li><span>Ⓓ</span><a :qcore="0">错的</a></li>
      </ul>
    </div>
  </div>
</template>

<script>

import {mapGetters,mapActions} from 'vuex'


export default {
  name: 'HelloWorld',
  props: {

  },
  data(){
    return {
      //初始页码（0相当于首页）
      itemidx:0,
      centerAccord:'block',
      btnstart:'block',
      btnnext:'none',
      btnsubmit:'none',
      questionContent:'none'
    }
  },
  computed:{
    ...mapGetters(['questionobj'])
  },
  created(){
    this.GET_QUESTIONOBJ_DATA();
  },
  methods:{
    ...mapActions(['GET_QUESTIONOBJ_DATA'])
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .hello{
    position: relative;
    height: 100%;
    .gz-top-world{
      width: 0.84rem;
      height: 1.9rem;
      position: absolute;
      right: 0px;
      top:0px;
      background:url("../assets/images/WechatIMG2.png") no-repeat center;
      background-size: 0.84rem 1.9rem;

      span{
        color: green;
        position: absolute;
        bottom: 14%;
        left: 26%;
        font-weight: bolder;
      }
    }
    .gz-top-center-word{
      width: 3.4rem;
      height: 3rem;
      background:url("../assets/images/1-2.png") no-repeat center;
      background-size: 3.4rem 3rem;
      position: absolute;
      left: 4%;
      top:15%;
    }
    .gz-btn-start{
      width: 1.12rem;
      height: 0.54rem;
      background:url("../assets/images/1-4.png") no-repeat center;
      background-size: 1.12rem 0.54rem;
      position: absolute;
      left: 37%;
      top: 59%;
    }
    .gz-btn-next{
      width: 1.12rem;
      height: 0.54rem;
      background:url("../assets/images/2-2.png") no-repeat center;
      background-size: 1.12rem 0.54rem;
      position: absolute;
      left: 37%;
      top: 59%;
    }
    .gz-btn-next{
      width: 1.12rem;
      height: 0.54rem;
      background:url("../assets/images/3-1.png") no-repeat center;
      background-size: 1.12rem 0.54rem;
      position: absolute;
      left: 37%;
      top: 59%;
    }
    .gz-question-content{
      width: 1rem;
      color: white;
      line-height: 30px;
      font-size: 20px;
      position: absolute;
      left: 40%;
      top:20%;
      span{
        margin-right: 2%;
      }
    }
  }
</style>
