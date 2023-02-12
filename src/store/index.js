import { createStore } from "vuex";
import ReceipeService from "../services/ReceipeService";
import LogService from "../services/LogService";

export const cgiState = {
  receipes: [],
  ingredients: [],
  logs: [],
};

export const cgiGetters = {
  getReceipes: (state) => state.receipes,
  getIngredients: (state) => state.ingredients,
  receipesByIngredients: (state) => state.filteredReceipes,
  getLogs: (state) => state.logs,
};

export const cgiMutations = {
  SET_RECEIPES(state, receipes) {
    state.receipes = receipes;
  },
  SET_INGREDIENTS(state, ingredients) {
    state.ingredients = ingredients;
  },
  RECEIPES_BY_INGREDIENTS(state, receipes) {
    state.receipes = receipes;
  },
  SET_LOGS(state, logs) {
    state.logs = logs;
  },
};

export const cgiActions = {
  getReceipes({ commit }) {
    ReceipeService.getReceipes().then((response) => {
      commit("SET_RECEIPES", response.data);
    });
  },
  getIngredients({ commit }) {
    ReceipeService.getIngredients().then((response) => {
      commit("SET_INGREDIENTS", response.data);
    });
  },
  receipesByIngredients({ commit }, selected) {
    ReceipeService.receipesByIngredients(selected).then((response) => {
      commit("RECEIPES_BY_INGREDIENTS", response.data);
    });
  },
  getLogs({ commit }, logType) {
    LogService.getLogs(logType).then((response) => {
      commit("SET_LOGS", response.data);
    });
  },
};

const store = createStore({
  state: cgiState,
  getters: cgiGetters,
  mutations: cgiMutations,
  actions: cgiActions,
});

export default store;
