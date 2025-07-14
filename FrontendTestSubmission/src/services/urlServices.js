import api from "./api";

export const getShortUrl = (originalUrl) => {
  console.log(originalUrl);

  return api.post("/", { url: originalUrl });
};
