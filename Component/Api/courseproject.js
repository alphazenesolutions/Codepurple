import { Courseproject } from "../axios";

export const viewallcourseproject = async (data) => {
  var viewallcourseproject = await Courseproject.post(
    `/viewallcourseproject`,
    data
  )
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewallcourseproject;
};
