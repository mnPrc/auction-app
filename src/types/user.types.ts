export interface User {
    id: number;
    first_name: string;
    last_name: string;
    money: number;
    email: string;
}

export interface LoginCredentials {
    email: string;
    password: string;
}

export interface RegisterNewUser {
    first_name: string;
    last_name: string;
    email: string;
    password: string;
    password_confirmation: string;
}

export interface TokenResponse{
    token: string;
}

export interface UserState {
    user: Partial<User>;
    token: string | null;
    loginErrors: string;
    registerErrors: string[];
    money: number;
}