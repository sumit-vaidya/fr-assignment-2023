import { createStoreMocks } from "../src/store/__mocks__";
import { createRouter, createWebHistory } from 'vue-router'
import { mount, shallowMount } from "@vue/test-utils";
import router from "./../src/router/index";
import App from "./../src/App.vue";

describe("Mounted App", () => {
  const routers = createRouter({
    history: createWebHistory(),
    routes: router,
  })

  function factory(store, useMount = false, computed = {}) {
    const args = [
      App,
      {
        global: {
          plugins: [createStoreMocks(store).store, routers],
        },
        computed: { ...App.computed, ...computed },
      },
    ];
    return useMount ? mount(...args) : shallowMount(...args);
  }

  afterEach(() => {
    jest.clearAllMocks();
    jest.resetAllMocks();
  });

  test("does a wrapper exist", () => {
    const actionsSpyOne = jest.spyOn(App.methods, "getReceipes");
    const actionsSpyTwo = jest.spyOn(App.methods, "getIngredients");

    const wrapper = factory(
      {
        state: {},
        getters: {
          getReceipes: jest.fn(() => jest.fn().mockReturnValue([])),
          getIngredients: jest.fn(() => jest.fn().mockReturnValue([])),
        },
      },
      true,
      {}
    );
    expect(wrapper.exists()).toBe(true);
    expect(actionsSpyOne).toHaveBeenCalled();
    expect(actionsSpyTwo).toHaveBeenCalled();
  });
});
