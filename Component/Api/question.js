import { Question } from "../axios";

export const viewallQuestion = async (data) => {
  var viewallQuestion = await Question.post(`/viewallQuestion`, data)
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      return err.response;
    });
  return viewallQuestion;
};
