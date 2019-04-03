import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questionobj:{}
  },
  mutations: {
    GET_QUESTIONOBJ(state,data){
      state.questionobj=data
    }
  },
  actions: {
    //axios获取问题数据以及得分数据
    async GET_QUESTIONOBJ_DATA({commit}){
      let result=await axios({
        methods:'get',
        url:'alldata.json',
        data:''
      });
      console.log(result);
      if(result.status===200){
        commit('GET_QUESTIONOBJ',result.data.allQuestion)
      }
    }
  },
  getters:{
    questionobj(state){
      return state.questionobj
    }
  }
})
