import ProductType from "../Types/ProductType";
import { makeAutoObservable } from "mobx";
import GetProductRange from "../Requests/GetProductRange";

export class ProductRangeService {
    productList: ProductType[] = [];

    constructor() {
        makeAutoObservable(this);

        this.setProductList();
    }

    private setProductList() {
        this.productList = GetProductRange();
    }
}
