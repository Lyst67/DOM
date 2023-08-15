import axios from "axios";

const BASE_URL = "http://localhost:3000";
// const getPost = (newPost) =>
//   fetch(`${BASE_URL}/posts`, {
//     metod: "GET",
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
const getPost = () => axios.get(`${BASE_URL}/posts`);
getPost().then(console.log).catch(console.warn);
