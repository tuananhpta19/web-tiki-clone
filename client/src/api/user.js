import { get, patch } from '../utils/axios';

export const getAllUserAPI = () => get("/api/user")
export const updateStatusAPI = (idUser, body) => patch("/api/user/status/"+idUser, body)