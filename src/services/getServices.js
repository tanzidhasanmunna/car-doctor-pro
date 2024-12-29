import axios from "axios";

export const getService = async () => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/services/api/get-all`);
    return res.data;
  } catch (error) {
    return [];
  }
};

export const getServiceDetails = async (id) => {
  try {
    const res = await axios.get(`${process.env.BASE_URL}/services/api/${id}`);
    return res.data;
  } catch (error) {
    return [];
  }
};
