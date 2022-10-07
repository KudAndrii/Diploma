import ProductType from "../Types/ProductType";
import { makeAutoObservable } from "mobx";

export class UserService {
    token: string | null = null;

    constructor() {
        makeAutoObservable(this);
    }

    GetToken() {
        if (!this.token) {
            this.token = "123";
        }
    }
}
