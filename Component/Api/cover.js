import { Cover } from "../axios";

export const viewallcover = async (data) => {
  var viewallcover = await Cover.post(`/viewallcover`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewallcover;
};
