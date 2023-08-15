// import createGallleryTempl from "../templates/gallery-card.hbs";
import axios from "axios";
import { UnsplashAPI } from "./unsplash_api";
const searchFormEl = document.querySelector(".js-search-form");
const galleryEl = document.querySelector(".js-gallery");
const loadBtnEl = document.querySelector(".js-load-more");

const unsplashApi = new UnsplashAPI();

const handleSearchSubmit = (evt) => {
  evt.preventDefault();
  const searchQuery = evt.target.firstElementChild.value.trim();
  unsplashApi.query = searchQuery;
  unsplashApi
    .fetchPhotos()
    .then(({ data }) => {
      const searchResult = data.results;
      console.log(searchResult);
      galleryEl.innerHTML = createMarkupImg(searchResult);
      data.total_pages <= 1
        ? loadBtnEl.classList.add("is-hidden")
        : loadBtnEl.classList.remove("is-hidden");
    })
    .catch(console.warn);
};

const handleMoreImg = () => {
  unsplashApi.page += 1;
  unsplashApi
    .fetchPhotos()
    .then(({ data }) => {
      console.log(data);
      console.log(unsplashApi.page);
      const searchResult = data.results;
      if (unsplashApi.page >= data.total_pages) {
        loadBtnEl.classList.add("is-hidden");
      }
      galleryEl.insertAdjacentHTML("beforeend", createMarkupImg(searchResult));
    })
    .catch(console.warn);
};
searchFormEl.addEventListener("submit", handleSearchSubmit);
loadBtnEl.addEventListener("click", handleMoreImg);

function createMarkupImg(arr) {
  return arr
    .map(
      ({ urls, alt_description }) =>
        `<li class="gallery__item"><img src="${urls.small}" alt="${alt_description}" class="gallery-img"></li>`
    )
    .join("");
}
