import axios from "axios";

const BASE_URL = "http://localhost:3000";
// const createPost = (newPost) =>
//   fetch(`${BASE_URL}/posts`, {
//     method: "POST",
//     body: JSON.stringify(newPost),
//     headers: { "Content-Type": "application/json" },
//   }).then((response) => {
//     if (!response.ok) {
//       throw new Error(response.status);
//     }
//     return response.json();
//   });
const deleteUserById = (userId) => axios.delete(`${BASE_URL}/posts/${userId}`);
deleteUserById(4).then(console.log).catch(console.warn);
