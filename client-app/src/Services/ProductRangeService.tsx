import ProductType from "../Types/ProductType";
import { makeAutoObservable } from "mobx";
import GetProductsPage from "../Requests/GetProductsPage";

class ProductRangeService {
    productList: ProductType[] = [];

    constructor() {
        makeAutoObservable(this);

        this.setProductList();
    }

    private async setProductList() {
        this.productList = await GetProductsPage(1, 1, false);
    }
}
