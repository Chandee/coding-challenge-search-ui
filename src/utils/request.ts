import axios from "axios";

const instance = axios.create({
  baseURL: "/api",
});

export const getTopicsData = async (query: string) => {
  const data = await instance.get(`/data?search=${query}`);
  return data
};
