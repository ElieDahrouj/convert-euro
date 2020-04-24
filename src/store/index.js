import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      allMoney:[],
      result:null,
      symbolUsed:null
  },
  getters: {
      devise(state) {
          return state.allMoney
      },
      resultData(state){
        return state.result
      },
      symbol(state){
        return state.symbolUsed
      }
  },
  mutations: {
      displayMoney(state,data){
        state.allMoney = data
      },
      set_result(state,data){
        state.result = Math.round(data)
      },
      set_symbol(state,data){
        state.symbolUsed = data
      }
  },
  actions: {
      money({commit}){
        axios.get('https://data.fixer.io/api/latest?access_key='+process.env.VUE_APP_KEY)
            .then(response =>{
              commit('displayMoney',response.data.rates)
            })
      },
      result({commit},symbol){
        let result = symbol.number * symbol.oneSymbol.data
        commit('set_result',result)
        commit('set_symbol',symbol.oneSymbol.name)
      }
  },
  modules: {
  }
})
