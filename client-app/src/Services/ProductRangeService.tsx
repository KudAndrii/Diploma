import ProductType from "../Types/ProductType";
import { makeAutoObservable } from "mobx";

export class ProductRangeService {
    productList: ProductType[] = [];

    constructor() {
        makeAutoObservable(this);
    }
}
