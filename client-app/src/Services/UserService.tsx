import { makeAutoObservable } from "mobx";
import UserType from "../Types/UserType";
import LoginRequest from "../Requests/LoginRequest";

export class UserService {
    user: UserType | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    public async Login(login: string, password: string) {
        this.user = await LoginRequest(login, password);
    }

    public Logout() {
        this.user = null;
    }
}
