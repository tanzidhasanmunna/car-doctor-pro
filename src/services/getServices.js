export const getService = async () => {
  const response = await fetch("http://localhost:3000/services/api/get-all");
  const data = response.json();
  return data;
};

export const getServiceDetails = async (id) => {
  const response = await fetch(`http://localhost:3000/services/api/${id}`);
  const service = response.json();
  return service;
};
