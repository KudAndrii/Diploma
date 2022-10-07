import { makeAutoObservable } from "mobx";
import GetProductCategories from "../Requests/GetProductCategories";
import CategoryType from "../Types/CategoryType";

class ProductCategoriesService {
    categories: CategoryType[] = [];

    constructor() {
        makeAutoObservable(this);

        this.setCategories();
    }

    private async setCategories() {
        this.categories = await GetProductCategories();
    }
}
