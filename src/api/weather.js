import axios from "axios";
const apiCalling = async (location) => {
  const options = {
    method: "GET",
    url: "https://weatherapi-com.p.rapidapi.com/forecast.json",
    params: {
      q: location,
      days: "7",
    },
    headers: {
      "X-RapidAPI-Key": "47cd73744cmshe45fd3b6dfbf7bfp1fcd49jsne0aa1fe1892a",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
export default apiCalling;
