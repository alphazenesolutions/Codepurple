import { Lesson } from "../axios";

export const viewByidLesson = async (data) => {
  var viewByidLesson = await Lesson.post(`/viewByid`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewByidLesson;
};