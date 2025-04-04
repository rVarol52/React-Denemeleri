import axios from "axios";

const searchImages = async (term) => {
  const response = await axios.get(
    "https://api.unsplash.com/search/photos?client_id=15MMKsmB_goaaKwwno6RYBWImMUsNpRJ-EcxZ4Ap84s",
    {
      header: {
        Authorization: "Client-ID 15MMKsmB_goaaKwwno6RYBWImMUsNpRJ-EcxZ4Ap84s",
      },
      params: {
        query: term,
      },
    }
  );
  return response.data.results;
};

export default searchImages;
