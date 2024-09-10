import { LoginCredentials, RegisterNewUser, User, TokenResponse } from "../types/user.types";
import HttpService from "./HttpService";


class AuthService extends HttpService{
    login = async (credentials: LoginCredentials): Promise <TokenResponse> => {
        const { data } = await this.client.post<TokenResponse>("/login", credentials);
        const { token } = data;

        localStorage.setItem("token", token);
        return data;
    }

    register = async (newUser: RegisterNewUser): Promise <TokenResponse> => {
        const { data } = await this.client.post<TokenResponse>("/register", newUser);
        const { token } = data;

        localStorage.setItem("token", token);
        return data;
    }

    logout = async(): Promise<void> => {
        await this.client.post("/logout");
        localStorage.removeItem("token");
    }

    getActiveUser = async(): Promise<User> => {
        const { data } = await this.client.get<User>("/me")
        return data;
    }
}

const authService = new AuthService();
export default authService;