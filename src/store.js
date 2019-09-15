import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  articleTitle:null,
  articleCreTime:null,
  articleHotValue:null,
  articleContent:null
}

const mutations = {
  articleTitle:function(state,extra){
    state.articleTitle = extra;
  },
  articleCreTime:function(state,extra){
    state.articleCreTime = extra;
  },
  articleHotValue:function(state,extra){
    state.articleHotValue = extra;
  },
  articleContent:function(state,extra){
    state.articleContent = extra;
  }
}

const actions = {

}

export default new Vuex.Store({
  state,
  mutations,
})
