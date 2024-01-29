import axios from "axios";

axios.defaults.baseURL = "https://65a6c60674cf4207b4f0c864.mockapi.io";

export const fetchAdverts = async (body) => {
  const { data } = await axios.get("/adverts");

  return data;
};

export const fetchAdvertById = async ({ id }) => {
  const response = await axios.get(`/adverts/${id}`);
  const { data: advertId } = response;
  console.log(advertId);
  return advertId;
};

export const fetchCarBrands = async () => {
  const { data } = await axios.get(`/adverts`);
  const brands = data.map((advert) => advert.make);
  const unique = Array.from(new Set(brands)).sort((a, b) => a.localeCompare(b));

  return unique;
};
