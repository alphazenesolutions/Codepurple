import { Modules } from "../axios";

export const viewByidModules = async (data) => {
  var viewByidModules = await Modules.post(`/viewByid`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewByidModules;
};

export const viewallmodules = async (data) => {
    var viewallmodules = await Modules.post(`/viewallmodules`, data)
      .then((res) => {
        return res.data;
      })
      .catch((err) => {
        return err.response;
      });
    return viewallmodules;
  };
