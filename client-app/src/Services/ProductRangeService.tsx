import { makeAutoObservable } from "mobx";
import UserType from "../Types/UserType";
import LoginRequest from "../Requests/LoginRequest";
import ProductType from "../Types/ProductType";
import GetProductsPage from "../Requests/GetProductsPage";

type Options = {
    pageIndex: number;
    categoryId: number;
    sortFlag: boolean;
};

export class ProductRangeService {
    productList: ProductType[] = [];
    requestOptions: Options = { pageIndex: 1, categoryId: -1, sortFlag: false };
    constructor() {
        makeAutoObservable(this);
    }

    public async SetProductList() {
        this.productList = await GetProductsPage(
            this.requestOptions.pageIndex,
            this.requestOptions.categoryId,
            this.requestOptions.sortFlag
        );
    }
}
