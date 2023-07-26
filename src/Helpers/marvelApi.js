import axios from "axios";

const API_BASE_URL = "https://gateway.marvel.com/v1/public";
const API_KEY = ENV_KEY;

export const getCharactersAPI = async () => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`, {
      params: {
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error fetching comic by URL:", error);
    return null;
  }
};

export const searchByIdAPI = async (id, type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${type}s/${id}`, {
      params: {
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error searching character by id:", error);
    return null;
  }
}

export const searchComicByIdAPI = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comics/${id}`, {
      params: {
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error searching character by id:", error);
    return null;
  }
}

export const searchComicByCharacterIdAPI = async (id) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters/${id}/comics?`, {
      params: {
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error searching character by id:", error);
    return null;
  }
}

export const searchByNameAPI = async (name, type) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/${type}s`, {
      params: {
        [type === "comic" ? "titleStartsWith" : "nameStartsWith"]: name,
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error searching character by name:", error);
    return null;
  }
}
