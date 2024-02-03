import axios from "axios";

export const Courses = axios.create({
  baseURL: `https://api.codepurple.in/courses`,
});

export const Entrolluser = axios.create({
  baseURL: `https://api.codepurple.in/entrolluser`,
});

export const Contactuser = axios.create({
  baseURL: `https://api.codepurple.in/contactuser`,
});

export const Cover = axios.create({
  baseURL: `https://api.codepurple.in/cover`,
});

export const Question = axios.create({
  baseURL: `https://api.codepurple.in/question`,
});
