import { RootState } from "..";
import { User } from "../../types/user.types";

export const activeUserSelector = (state: RootState): User | null => state.auth.user as User;
export const isUserAuthenticated = (state: RootState): boolean => !!state.auth.token;
export const selectLoginErrors = (state: RootState): string => state.auth.loginErrors;
export const selectRegisterErrors = (state: RootState): string[] => state.auth.registerErrors;