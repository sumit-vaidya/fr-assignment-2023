<template>
  <div class="container">
    <div>
      <h4>Select ingredients</h4>
      <select v-model="selected" @change="setReceipeBtn" multiple>
        <option v-for="(ingredient, index) in ingredients" v-bind:key="index">
          {{ ingredient }}
        </option>
      </select>
    </div>
    <div>
      <input
        :disabled="this.isReceipeBtn"
        class="btn btn-primary"
        type="button"
        value="Receipe"
        @click="switchSelect(this.selected)"
      />
    </div>
    <br />
    <h1>Receipes</h1>
    <div class="row">
      <div
        class="card"
        style="width: 300px"
        v-for="(receipe, index) in receipes"
        v-bind:key="index"
      >
        <img class="card-img-top" :src="receipe.thumbnail" alt="Card image" />
        <div class="card-body">
          <h4 class="card-title">{{ receipe.title }}</h4>
          <p class="card-text">{{ getIngredient(receipe) }}</p>
          <a target="_blank" :href="receipe.href" class="btn btn-primary"
            >View Receipe</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Receipe",
  props: ["receipes", "ingredients"],
  data() {
    return {
      isReceipeBtn: true,
    };
  },
  computed: {
    ...mapGetters({
      receipes: "getReceipes",
    }),
  },
  methods: {
    ...mapActions(["receipesByIngredients", "getReceipes"]),
    getIngredient(receipe) {
      let ingredient = "";
      receipe?.ingredients?.forEach((item) => {
        ingredient = ingredient.concat(item).concat(", ");
      });
      return ingredient.slice(0, -2);
    },
    switchSelect(selected) {
      this.receipesByIngredients(selected);
    },
    setReceipeBtn(event) {
      if (event.target.value !== undefined) {
        this.isReceipeBtn = false;
      }
    },
  },
  mounted() {
    this.getReceipes();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
