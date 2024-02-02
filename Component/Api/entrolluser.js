import { Entrolluser } from "../axios";

export const createEntrolluser = async (data) => {
  var createEntrolluser = await Entrolluser.post(`/create`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return createEntrolluser;
};
