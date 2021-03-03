import axios from "axios";

export const axiosWithAuth = () => {
  const token = localStorage.getItem("token");

  return axios.create({
    headers: {
      Authorization: token,
    },
    baseURL: 'https://tt17-secret-family-recipe.herokuapp.com/api',
  });
};