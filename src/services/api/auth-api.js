const { fetchApi } = require("../util/fectch.js");

export const registerAPI = (userInfo, setIsLoading) => {
  setIsLoading(true);
  fetchApi
    .post("/auth/register", userInfo)
    .then((res) => {
      console.log(res);
      setIsLoading(false);
    })
    .catch((err) => {
      console.log(err);
      setIsLoading(false);
    });
};
