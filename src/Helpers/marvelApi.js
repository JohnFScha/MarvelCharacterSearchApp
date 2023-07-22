import axios from 'axios';

const API_BASE_URL = 'https://gateway.marvel.com/v1/public';
const API_KEY = '0a13d695b4d59a3324ab3e0c62ef0a7e';

export const getComicByUrl = async (url) => {
  try {
    const comicId = extractComicIdFromUrl(url);
    const response = await axios.get(`${API_BASE_URL}/comics/${comicId}`, {
      params: {
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error('Error fetching comic by URL:', error);
    return null;
  }
};

export const searchComicByName = async (comicName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/comics`, {
      params: {
        titleStartsWith: comicName,
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error('Error searching comic by name:', error);
    return null;
  }
};

export const searchCharacterByName = async (characterName) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/characters`, {
      params: {
        nameStartsWith: characterName,
        apikey: API_KEY,
      },
    });
    return response.data.data.results;
  } catch (error) {
    console.error('Error searching character by name:', error);
    return null;
  }
};

const extractComicIdFromUrl = (url) => {
  const parts = url.split('/');
  return parts[parts.length - 2];
};