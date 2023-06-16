import { useEffect, useState } from "react";
import { useGetDiscountQuery } from "../../features/shopApi";
import "./Discounts.scss";
import { v4 as uuidv4 } from "uuid";
import { useNavigate } from "react-router-dom";
import React from "react";
import IProduct from "src/models/IProduct";

function Discounts() {
  const { data } = useGetDiscountQuery("");
  const [url, setUrl] = useState<string>("");
  const [price, setPrice] = useState<number>();
  const [newPrice, setNewPrice] = useState<number | null>();
  const [btnActive, settnActive] = useState<number>(0);
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setUrl(process.env.REACT_APP_URL_SERVER + "public/images/" + data[0].url);
      setPrice(data[0].price);
      setNewPrice(data[0].price_discount);
    }
  }, [data]);

  function numberWithSpaces(x: number) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  function navigatePage() {
    navigate(`/discounts`);
  }

  function slider(index: number) {
    if (data) {
      setUrl(
        process.env.REACT_APP_URL_SERVER + "public/images/" + data[index].url
      );
      setPrice(data[index].price);
      setNewPrice(data[index].price_discount);
      settnActive(index);
    }
  }

  return (
    <div className="contaiener_discounts">
      <div className="discounts_slider_wraper">
        <div className="discounts_slider_description">
          <p className="slider_description_title">Зимняя распродажа</p>
          <p className="slider_description_text">СКИДКИ ДО 90%</p>
          <button
            className="slider_description_btn"
            onClick={() => navigatePage()}
          >
            Все скидки
          </button>
        </div>
        <div className="discounts_slider_item">
          <img className="discounts_slider_img" src={url} alt="item_img" />
          <div className="slider_item_price">
            <span className="slider_item_old_price">
              {price && numberWithSpaces(price)} ₽
            </span>
            <span className="slider_item_discount_price">
              {newPrice && numberWithSpaces(newPrice)} ₽
            </span>
          </div>
        </div>
      </div>
      <div className="discounts_slider_btn">
        {data &&
          data.length > 0 &&
          data?.map((item: IProduct, index: any) => (
            <button
              key={uuidv4()}
              className={
                btnActive === index
                  ? "slider_btn slider_btn_active"
                  : "slider_btn"
              }
              onClick={() => slider(index)}
            ></button>
          ))}
      </div>
    </div>
  );
}

export default Discounts;
