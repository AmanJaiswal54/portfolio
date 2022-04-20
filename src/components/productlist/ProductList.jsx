import "./ProductList.css";
import Product from "../product/Product";
import { productData } from "../../data";

function ProductList() {
    return (
        <div className="pl">
            <div className="pl-texts">
                <h4 className="pl-title">Some Things I’ve Built</h4>
                {/* <p className="pl-desc">
                    To create a production build, use npm run build.
                    To create a production build, use npm run build.
                    To create a production build, use npm run build.
                </p> */}
            </div>
            <div className="pl-list">
                {productData.map((item) => {
                    return <Product key={item.id} img={item.img} link={item.link} />
                })}
            </div>
        </div >
    );
}
export default ProductList;
