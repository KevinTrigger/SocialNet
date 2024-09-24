import { ProfileSchema } from "../../types/profile";

export const getProfileError = (state: ProfileSchema) => state?.error;