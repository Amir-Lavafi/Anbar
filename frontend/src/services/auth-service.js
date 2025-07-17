import httpClient from "./middleware";

export const login = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await httpClient.post("/login", userData);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};

export const signup = async (userData) => {
  return new Promise((resolve, reject) => {
    setTimeout(async () => {
      try {
        const response = await httpClient.post("/signup", userData);
        resolve(response.data);
      } catch (error) {
        reject(error);
      }
    }, 1000);
  });
};
