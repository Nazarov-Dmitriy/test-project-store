import React from "react";
import "./Basket.scss";
import bascket from "../../../assets/icons/cart-icons.svg";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "src/app/hooks";

function Basket() {
  const navigate = useNavigate();
  const { cart } = useAppSelector((state) => state.cart);

  return (
    <div className="basket" onClick={() => navigate(`/cart`)}>
      <img className="basket_icons" src={bascket} alt="basket-icons" />
      <span className="basket_count">
        <p className="basket_count_text">{cart.length}</p>
      </span>
    </div>
  );
}

export default Basket;
