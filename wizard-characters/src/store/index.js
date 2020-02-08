import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        wizards: [],
    },
    mutations: {
        setWizards(state, wizards) {
            state.wizards = wizards;
        }
    },
    actions: {
        getWizards({ commit }) {
            fetch("http://hp-api.herokuapp.com/api/characters")
                .then(response => response.json())
                .then(response => {
                    commit('setWizards', response);
                    localStorage.setItem("wizards", JSON.stringify(response));
                });
        }
    },
    getters: {
        filteredWizards(search) {
            return state.wizards.filter(wizard => wizard.name.toLowerCase().includes(search.toLowerCase()))
        }
    }
})