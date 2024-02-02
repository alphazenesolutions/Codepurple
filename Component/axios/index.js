import axios from "axios";

export const Courses = axios.create({
  baseURL: `http://localhost:3000/courses`,
});

export const Entrolluser = axios.create({
  baseURL: `http://localhost:3000/entrolluser`,
});

export const Contactuser = axios.create({
  baseURL: `http://localhost:3000/contactuser`,
});

export const Cover = axios.create({
  baseURL: `http://localhost:3000/cover`,
});
