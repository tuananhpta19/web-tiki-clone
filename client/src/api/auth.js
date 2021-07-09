import { post } from '../utils/axios';

export const signUp = (body) => post("/api/auth/sign-up", body)