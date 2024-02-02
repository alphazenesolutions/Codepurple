import { Contactuser } from "../axios";

export const createContactuser = async (data) => {
  var createContactuser = await Contactuser.post(`/create`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return createContactuser;
};
