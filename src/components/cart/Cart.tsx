import React from "react";
import "./Cart.scss";
import { addCountState, removeCountState } from "src/features/cartSlice";
import { useAppDispatch, useAppSelector } from "src/app/hooks";

function Cart() {
  const dispatch = useAppDispatch();
  const { cart } = useAppSelector((state) => state.cart);

  const incCount = (index: number) => {
    dispatch(addCountState(index));
  };

  function decCount(index: number) {
    dispatch(removeCountState(index));
  }

  return (
    <div className="page_basket">
      <h1 className="basket_title">Корзина</h1>
      {cart.length ? (
        <div className="basket_list">
          <div className="basket_item basket_item_header">
            <p className="basket_list_headers basket_list_headers_img" >Изображение</p>
            <p className="basket_list_headers basket_list_headers_title">
              Название
            </p>
            <p className="basket_list_headers">Цена</p>
            <p className="basket_list_headers basket_list_headers_count">Количество</p>
            <p className="basket_list_headers">Сумма</p>
          </div>
          {cart &&
            cart.map((item, index) => (
              <div className="basket_item" key={item.id}>
                <img
                  className="basket_item_img"
                  src={
                    process.env.REACT_APP_URL_SERVER +
                    "public/images/" +
                    item.url
                  }
                  alt={item.url}
                />
                <p className="basket_item_title">{item.title}</p>
                <p className="basket_item_price">
                  {item.price_discount ? item.price_discount : item.price}
                </p>
                <div className="basket_item_btn">
                  <button
                    className="btn_basket_item"
                    onClick={() => decCount(index)}
                  >
                    -
                  </button>
                  <p className="basket_item_count">{item.count}</p>
                  <button
                    className="btn_basket_item"
                    onClick={() => incCount(index)}
                  >
                    +
                  </button>
                </div>
                <p className="basket_item_sum">
                  {+(item.price_discount || item.price) * item.count}
                </p>
              </div>
            ))}
          <div className="total_sum">
            Сумма:
            {cart.reduce(function (sum, current) {
              return (
                sum +
                (current.price_discount
                  ? +current.price_discount
                  : current.price) *
                  current.count
              );
            }, 0)}
          </div>
        </div>
      ) : (
        <h2 className="cart_empty">Корзина пуста, добавте товар..</h2>
      )}
    </div>
  );
}

export default Cart;
