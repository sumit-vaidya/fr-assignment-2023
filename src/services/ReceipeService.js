import axios from "axios";

const RECEIPE_API_BASE_URL = "http://localhost:8080/receipe/v1";

class ReceipeService {
  getReceipes() {
    return axios.get(RECEIPE_API_BASE_URL.concat("/receipes"));
  }

  getIngredients() {
    return axios.get(RECEIPE_API_BASE_URL.concat("/ingredients"));
  }

  async getReceipesByIngredients(ingredients) {
    const response = await axios.get(RECEIPE_API_BASE_URL.concat("/receipes"));
    return response.data.filter(item => ingredients.some(ele => item.ingredients.includes(ele)))
    /*return axios.get(
      RECEIPE_API_BASE_URL.concat("/receipesByIngredients"), {
        params: {
          ingredients: JSON.stringify(ingredients)
        },
      }      
    );*/
  }
}

export default new ReceipeService();
