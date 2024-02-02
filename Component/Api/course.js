import { Courses } from "../axios";

export const viewallcourses = async (data) => {
  var viewallcourses = await Courses.post(`/viewallcourses`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewallcourses;
};

export const viewByidcourses = async (data) => {
  var viewByidcourses = await Courses.post(`/viewByid`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewByidcourses;
};

