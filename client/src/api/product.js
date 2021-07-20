import { get, post } from '../utils/axios';

export const createProductAPI = (body) => post("/api/product",body)
export const getAllProductAPI = () => get("/api/product")