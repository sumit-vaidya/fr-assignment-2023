import axios from "axios";

const RECEIPE_API_BASE_URL = "http://localhost:8080/receipe/v1";

class ReceipeService {
  getReceipes() {
    return axios.get(RECEIPE_API_BASE_URL.concat("/receipes"));
  }

  getIngredients() {
    return axios.get(RECEIPE_API_BASE_URL.concat("/ingredients"));
  }

  receipesByIngredients(ingredients) {
    return axios.post(
      RECEIPE_API_BASE_URL.concat("/receipesByIngredients"),
      ingredients
    );
  }
}

export default new ReceipeService();
