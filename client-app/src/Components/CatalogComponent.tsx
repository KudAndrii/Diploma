import { observer } from "mobx-react-lite";
import { productRangeService } from "../App";
import ProductCardComponent from "./ProductCardComponent";

const CatapogComponent = observer((): JSX.Element => {
    return (
        <>
            <div className="container my-5">
                <div className="row mx-auto row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
                    {productRangeService.productList &&
                        productRangeService.productList.map((x, index) => (
                            <div key={index}>
                                <ProductCardComponent
                                    productType={x}
                                ></ProductCardComponent>
                            </div>
                        ))}
                </div>
            </div>
        </>
    );
});

export default CatapogComponent;
