import axios from "axios";
import md5 from 'crypto-js';

const getHash = (a, b, c) => {
  return md5(a + b + c).toString()
}

let ts = Date.now().toString()
const API_BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL;
const API_KEY = import.meta.env.VITE_REACT_APP_API_KEY;
const PRIVATE_KEY = import.meta.env.VITE_REACT_APP_PRIVATE_KEY
let hash = getHash(ts, PRIVATE_KEY, API_KEY)

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
