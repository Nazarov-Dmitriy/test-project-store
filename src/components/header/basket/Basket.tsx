import "./Basket.scss";
import bascket from "../../../assets/icons/cart-icons.svg";

function Basket() {
  
  return (
    <div className="basket">
    <img
      className="basket_icons"
      src={bascket}
      alt="basket-icons"
    />
    <span className="basket_count">
      <p className="basket_count_text">5</p>
    </span>
  </div>
  )
}

export default Basket