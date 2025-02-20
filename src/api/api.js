import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com/";
const API_KEY = "ah6P6KBv0GJF4HW5fq04Ty2GdM4EV1IN5Xj6L1qEm-c";

export const getImages = async (value, page) => {
  const { data } = await axios.get("/search/photos", {
    params: {
      client_id: API_KEY,
      page,
      query: value,
      orientation: "landscape",
      per_page: 12,
    },
  });
  return data.results;
};
