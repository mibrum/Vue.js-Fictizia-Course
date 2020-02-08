import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        productList: [
            {
              title: "Time Turner",
              quantity: 100,
              price: 10.5
            },
            {
              title: "Marauder's Map",
              quantity: 1,
              price: 100.5
            },
            {
              title: "Sword of Gryffindor",
              quantity: 5,
              price: 550
            }
          ]
    },
    mutations: {
        addProduct(state, index) {
            state.productList[index].quantity++
        },
        removeProduct(state,index) {
            state.productList[index].quantity--
        },
        removeFromCart(state,index) {
            state.productList.splice(state.productList[index], 1)
        }
    },
    actions: {
        addProduct({commit}, index){
            commit('addProduct', index)
        },
        removeProduct({commit}, index){
            commit('removeProduct', index)
        },
        removeFromCart({commit}, index){
            commit('removeFromCart', index)
        }
    }
})