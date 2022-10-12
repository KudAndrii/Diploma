import { makeAutoObservable } from "mobx";
import UserType from "../Types/UserType";
import LoginRequest from "../Requests/LoginRequest";

export class UserService {
    user: UserType | null = null;
    modalFlag: boolean = false;
    constructor() {
        makeAutoObservable(this);
    }

    public async Login(login: string, password: string) {
        this.user = await LoginRequest(login, password);
        debugger;
        console.log(this.user.userId);
        console.log(this.user.token);
    }

    public Logout() {
        this.user = null;
    }
}
