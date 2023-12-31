import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;

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
    return [];
  }
};

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
    return [];
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
    return [];
  }
}

export const searchByNameAPI = async (name) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`, {
      params: {
        nameStartsWith: name,
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error("Error searching character by name:", error);
    return [];
  }
}
