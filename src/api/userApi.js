import axiosClient from "./axiosClient";

const userApi = {
  regiser(paramss) {
    const url = "/account/verify_account";
    return axiosClient.post(
      url,
      {},
      {
        params: {
          ...paramss,
        },
      }
    );
  },
  login(paramss) {
    const url = "/account/login";
    return axiosClient.post(
      url,
      {},
      {
        params: {
          ...paramss,
        },
      }
    );
  },
};
export default userApi;
