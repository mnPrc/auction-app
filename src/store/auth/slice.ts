import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LoginCredentials, RegisterNewUser, User, UserState } from "../../types/user.types";

const token = localStorage.getItem("token");

export const userSlice = createSlice({
    name: 'user',
    initialState:{
        user: {} as User,
        token: token,
        loginErrors: "",
        registerErrors: [] as string[],
        money: 10000,
    } as UserState,

    reducers: {
        login(state, action: PayloadAction<{ credentials: LoginCredentials, meta: { onSuccess: () => void } }>) {
        },
        register(state, action: PayloadAction<{ newUser: RegisterNewUser, meta: { onSuccess: () => void } }>) {
        },
        logout(state, action: PayloadAction<{ meta: { onSuccess: () => void } }>) {
        },
        getActiveUser(state) {
        },
        setToken(state, action: PayloadAction<string | null>){
            state.token = action.payload;
        },
        setActiveUser(state, action: PayloadAction<User>){
            state.user = action.payload;3
        },
        removeUser(state){
            state.user = {} as User;
            state.token = null;
        },
        setLoginErrors(state, action: PayloadAction<string>){
            state.loginErrors = action.payload;
        },
        setRegisterErrors(state, action: PayloadAction<string[]>){
            state.registerErrors = action.payload;
        },
    }
})

export const {
    login,
    register,
    logout,
    getActiveUser,
    setToken,
    setActiveUser,
    removeUser,
    setLoginErrors,
    setRegisterErrors,
} = userSlice.actions;

export default userSlice.reducer;