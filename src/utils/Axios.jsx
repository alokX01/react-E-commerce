import axios from "axios";

const apiBaseUrl =
  import.meta.env.VITE_API_BASE_URL?.trim() || "https://fakestoreapi.com";

// Axios ka reusable instance: baseURL set karne ke baad har request me full URL likhne ki zarurat nahi.
const instance = axios.create({
  baseURL: apiBaseUrl.endsWith("/") ? apiBaseUrl : `${apiBaseUrl}/`,
});

export default instance;
