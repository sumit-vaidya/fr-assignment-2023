import { createStore } from "vuex";
import ReceipeService from "../services/ReceipeService";
import LogService from "../services/LogService";

export const receipeState = {
  receipes: [],
  ingredients: [],
  logs: [],
};

export const receipeGetters = {
  getReceipes: (state) => state.receipes,
  getIngredients: (state) => state.ingredients,
  getReceipesByIngredients: (state) => state.filteredReceipes,
  getLogs: (state) => state.logs,
};

export const receipeMutations = {
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

export const receipeActions = {
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
  getReceipesByIngredients({ commit }, selected) {
    ReceipeService.getReceipesByIngredients(selected).then((response) => {
      commit("RECEIPES_BY_INGREDIENTS", response);
    });
  },
  getLogs({ commit }, logType) {
    LogService.getLogs(logType).then((response) => {
      commit("SET_LOGS", response.data);
    });
  },
};

const store = createStore({
  state: receipeState,
  getters: receipeGetters,
  mutations: receipeMutations,
  actions: receipeActions,
});

export default store;
