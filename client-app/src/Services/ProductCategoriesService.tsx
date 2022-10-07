import { makeAutoObservable } from "mobx";
import GetProductCategories from "../Requests/GetProductCategories";

export class ProductCategoriesService {
    categories: string[] = [];

    constructor() {
        makeAutoObservable(this);

        this.setCategories();
    }

    private setCategories() {
        this.categories = GetProductCategories();
    }
}
