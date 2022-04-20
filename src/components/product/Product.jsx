import "./Product.css";
import Me from "./../../img/Profile_Picture.jpg";
import award from "./../../img/logo192.png";

function Product(props) {
    const { key, img, link } = props;
    return (
        <div className="product">
            <div className="p-browser">
                <div className="p-circle red"></div>
                <div className="p-circle yellow"></div>
                <div className="p-circle green"></div>
            </div>
            <a href={link} target="_blank">
                <img src={img} alt={`product-${key}`} className="p-img" />
            </a>
        </div >
    );
}
export default Product;
