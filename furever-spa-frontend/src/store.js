import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        pathName: null,
        matches: {
            results: [],
            filters: {
                animal: 'any',
                sex: 'any',
                family: 'any',
                age: 'any',
            },
        }
    },
    mutations: {
        setPathName (state, payload) {
            state.pathName = payload;
        },
        setMatchesResults (state, payload) {
            console.log('Here')
            state.matches.results = payload;
        },
        setMatchesFilterAnimal (state, payload) {
            switch (payload) {
                case 'cat':
                case 'dog':
                    state.matches.filters.animal = payload;
                    return;
            }
            state.matches.filters.animal = 'any';
        },
        setMatchesFilterSex (state, payload) {
            switch (payload) {
                case 'male':
                case 'female':
                    state.matches.filters.sex = payload;
                    return;
            }
            state.matches.filters.sex = 'any';
        },
        setMatchesFilterFamily (state, payload) {
            switch (payload) {
                case 'small':
                case 'medium':
                case 'large':
                    state.matches.filters.family = payload;
                    return;
            }
            state.matches.filters.family = 'any';
        },
        setMatchesFilterAge (state, payload) {
            switch (payload) {
                case '0-1':
                case '1-4':
                case '4-8':
                case '>8':
                    state.matches.filters.age = payload;
                    return;
            }
            state.matches.filters.age = 'any';
        },
    },
});
