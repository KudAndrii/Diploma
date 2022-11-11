import {
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBRipple,
} from "mdb-react-ui-kit";
import { FC } from "react";
import ProductType from "../Types/ProductType";

type childType = {
    productType: ProductType;
};

const ProductCardComponent: FC<childType> = (props: childType): JSX.Element => {
    return (
        <MDBCard className="bg-image hover-zoom">
            <MDBRipple
                rippleColor="light"
                rippleTag="div"
                className="bg-image rounded hover-zoom"
            >
                <img
                    src={props.productType.img}
                    className="w-100"
                    alt={props.productType.name}
                />
            </MDBRipple>
            <MDBCardBody>
                <a href="#!" className="text-reset">
                    <h5 className="card-title mb-3">
                        {props.productType.name}
                    </h5>
                </a>
                <h6 className="mb-3">{"₴ " + props.productType.price}</h6>
            </MDBCardBody>
        </MDBCard>
    );
};

export default ProductCardComponent;

/*

            <img
                width={300}
                height={350}
                src={props.productType.img}
                className="card-img-top productCardImage"
                alt={props.productType.name}
            />
            <div className="card-body">
                <p className="card-text">{props.productType.name}</p>
                <p>{props.productType.price + " ₴"}</p>
            </div>
*/
