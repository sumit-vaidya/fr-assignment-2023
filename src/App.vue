<template>
  <header class="top-bar spread">
    <nav class="top-bar-nav">
      <router-link to="/" class="top-bar-link">
        <i class="icofont-spoon-and-fork" />
        <span>Receipes</span>
      </router-link>
      <router-link to="log" class="top-bar-link">
        <span>Logs</span>
      </router-link>
    </nav>
  </header>

  <router-view :receipes="receipes" :ingredients="ingredients"></router-view>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "App",
  computed: {
    ...mapGetters({
      receipes: "getReceipes",
      ingredients: "getIngredients",
    }),
  },
  methods: {
    ...mapActions(["getReceipes", "getIngredients"]),
  },
  mounted() {
    this.getReceipes();
    this.getIngredients();
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 5px;
}
</style>
