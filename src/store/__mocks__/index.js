import { createStore } from 'vuex';

export const getters = {
    getReceipes: jest.fn(() => jest.fn().mockReturnValue([])),
    getIngredients: jest.fn(() => jest.fn().mockReturnValue([])),
    getReceipesByIngredients: jest.fn(() => jest.fn().mockReturnValue([])),
    getLogs: jest.fn(() => jest.fn().mockReturnValue([])),
};

export const actions = {
    getReceipes: jest.fn(),
    getIngredients: jest.fn(),
    getReceipesByIngredients: jest.fn(),
    getLogs: jest.fn(),
};

export const mutations = {
    SET_RECEIPES: jest.fn(),
    SET_INGREDIENTS: jest.fn(),
    RECEIPES_BY_INGREDIENTS: jest.fn(),
    SET_LOGS: jest.fn(),
};

export const state = {
    receipes: [],
    ingredients: [],
    logs: [],
};

export function createStoreMocks(
    custom = {
        state: {},
        getters: {},
        actions: {},
        mutations: {},
    },
) {
    const mockState = { ...state, ...custom.state };
    const mockGetters = { ...getters, ...custom.getters };
    const mockActions = { ...actions, ...custom.actions };
    const mockMutations = { ...mutations, ...custom.mutations };

    return {
        state: mockState,
        getters: mockGetters,
        actions: mockActions,
        mutations: mockMutations,
        store: createStore({
            state() { return mockState; },
            getters: mockGetters,
            actions: mockActions,
            mutations: mockMutations
        }),
    }
}

export const { store } = createStoreMocks();