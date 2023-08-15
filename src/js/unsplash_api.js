import axios from "axios";
export class UnsplashAPI {
  #BASE_URL = "https://api.unsplash.com";
  #API_KEY = "LxvKVGJqiSe6NcEVZOaLXC-f2JIIWZaq_o0WrF8mwJc";

  page = 1;
  query = null;
  fetchPhotos() {
    return axios.get(`${this.#BASE_URL}/search/photos`, {
      params: {
        per_page: 12,
        client_id: this.#API_KEY,
        page: this.page,
        query: this.query,
        // color: "black_and_white",
      },
    });
  }
}
