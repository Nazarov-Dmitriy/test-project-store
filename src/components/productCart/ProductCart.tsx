import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductCart.scss";
import { useGetProductQuery } from "src/features/shopApi";
import React from "react";
import IProduct from "src/models/IProduct";
import { useAppDispatch } from "src/app/hooks";
import { addToCartState } from "src/features/cartSlice";

function ProductCart() {
  let { id } = useParams();
  const { data } = useGetProductQuery(id);
  const [dataArray, setDataArray] = useState<IProduct>();
  const dispatch = useAppDispatch();

  function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  useEffect(() => {
    if (data) {
      setDataArray(data);
    }
  }, [data]);

  function addToCart() {
    if (data) {
      dispatch(addToCartState({ ...data, count: 1 }));
    }
  }

  return (
    <div className="product_card_wraper">
      {data && (
        <div className="product_cart">
          <h2 className="product_card_title">{dataArray && dataArray.title}</h2>
          <div className="product_card_top">
            <div className="product_card_image">
              <img
                src={
                  process.env.REACT_APP_URL_SERVER + "public/images/" + data.url
                }
                alt={dataArray && dataArray.title}
              />
            </div>
          </div>
          <div className="product_card_bottom">
            <div
              className={
                data.price_discount
                  ? "card_prices"
                  : "card_prices card_prices_end"
              }
            >
              {data.price_discount && (
                <div className="card_price">
                  <p className="card_price_discount">
                    Cо скидкой {numberWithSpaces(data.price_discount)} ₽
                  </p>
                </div>
              )}
              <div className="card_price">
                <p
                  className={
                    !data.price_discount
                      ? "card_price_common"
                      : "card_price_common card_price_common_line-through"
                  }
                >
                  Обычная {numberWithSpaces(data.price)} ₽
                </p>
              </div>
            </div>

            <button className="product_card_add" onClick={addToCart}>
              В корзину
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
