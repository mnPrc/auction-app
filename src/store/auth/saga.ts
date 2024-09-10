import authService from "../../services/AuthService";
import { call, put, takeLatest } from 'redux-saga/effects';
import { LoginCredentials, RegisterNewUser, TokenResponse, User } from "../../types/user.types";
import { ApiErrorResponse } from "../../types/errors.types";
import {
    login,
    register,
    logout,
    getActiveUser,
    setToken,
    removeUser,
    setLoginErrors,
    setRegisterErrors,
    setActiveUser
} from "./slice";
import { PayloadAction } from "@reduxjs/toolkit";

function* handleLogin(action: PayloadAction<{credentials: LoginCredentials, meta: { onSuccess: () => void } }>): Generator{
    try{
        const data = (yield call(authService.login, action.payload.credentials)) as TokenResponse;
        yield put(setToken(data.token));
        yield put(getActiveUser());
        action.payload.meta.onSuccess();
    }catch(error){
        const apiError = error as ApiErrorResponse;
        yield put(setLoginErrors(apiError.response.data.message || 'Login failed'));
    }
}

function* handleRegister(action: PayloadAction<{newUser: RegisterNewUser, meta: { onSuccess: () => void } }>): Generator{
    try{
        const data = (yield call(authService.register, action.payload.newUser)) as TokenResponse;
        yield put(setToken(data.token));
        yield put(getActiveUser());
        action.payload.meta.onSuccess();
    }catch(errors){
        const apiError = errors as ApiErrorResponse;
        const message = apiError.response.data.message;
        yield put(setRegisterErrors(Array.isArray(message) ? message :  [message || 'Login failed']));
    }
}

function* handleLogout(action: PayloadAction<{ meta: { onSuccess: () => void } }>): Generator {
    try {
        yield call(authService.logout);
        yield put(removeUser());
        action.payload.meta.onSuccess();
    } catch (error) {
        console.error('Logout failed', error);
    }
}

function* handleGetActiveUser(){
    try{
        const user: User = yield call(authService.getActiveUser);
        yield put(setActiveUser(user));
    }catch(error){
        console.error('Failed to fetch user', error);
    }
}


export function* watchUserSagas() {
    yield takeLatest(login.type, handleLogin);
    yield takeLatest(register.type, handleRegister);
    yield takeLatest(logout.type, handleLogout);
    yield takeLatest(getActiveUser.type, handleGetActiveUser);
}