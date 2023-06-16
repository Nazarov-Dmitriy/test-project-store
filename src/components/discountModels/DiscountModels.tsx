import React from "react";
import "./DiscountModels.scss";
import { useGetDiscountQuery } from "../../features/shopApi";
import IProduct from "src/models/IProduct";
import { useAppDispatch } from "src/app/hooks";
import { addToCartState } from "src/features/cartSlice";

function DiscountModels() {
  const { data } = useGetDiscountQuery("");
  const dispatch = useAppDispatch();
  function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function addToCart(index: number) {
    if (data) {
      dispatch(addToCartState({ ...data[index], count: 1 }));
    }
  }

  return (
    <>
      <div className="contaiener_discounts_models">
        {data &&
          data.length > 0 &&
          data?.map((item: IProduct, index: number) => (
            <div className="discounts_models_item" key={item.id}>
              <img
                className="discounts_models_img"
                src={
                  process.env.REACT_APP_URL_SERVER + "public/images/" + item.url
                }
                alt="item_img"
              />
              <div className="slider_item_price">
                <span className="slider_item_old_price">
                  {numberWithSpaces(item.price)} ₽
                </span>
                <span className="slider_item_discount_price">
                  {item.price_discount && numberWithSpaces(item.price_discount)}
                  ₽
                </span>
              </div>
              <button
                className="discounts_models_btn"
                onClick={() => addToCart(index)}
              >
                В корзину
              </button>
            </div>
          ))}
      </div>
    </>
  );
}

export default DiscountModels;
