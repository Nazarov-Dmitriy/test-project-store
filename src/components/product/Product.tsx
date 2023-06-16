import React from "react";
import { useGetCollectionQuery } from "../../features/shopApi";
import "./Product.scss";
import arrow from "../../assets/icons/arrow.svg";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import IProducts from "src/models/IProducts";

function Product() {
  const { data } = useGetCollectionQuery("");
  const [dataArray, setDataArray] = useState<IProducts>();
  const navigate = useNavigate();

  useEffect(() => {
    if (data) {
      setDataArray(data);
    }
  }, [data]);

  function navigatePage(id: string): void {
    navigate(`/product-cart/${id}`);
  }

  function navigatePageDevelopments(): void {
    navigate(`/page-in-development`);
  }

  return (
    <div className="container_product">
      <div className="collections">
        <div className="collection">
          <div className="collection_description">
            <p className="collection_title">МУЖСКАЯ КОЛЛЕКЦИЯ</p>
            <p className="collection_text">Обувь, полуверы, костюмы</p>
            <button
              className="collection_btn"
              onClick={() => navigatePageDevelopments()}
            >
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <img
            className="collection_img"
            src="./images/col_man.jpg"
            alt="images collections"
          />
        </div>
        <div className="collection">
          <div className="collection_description">
            <p className="collection_title">ЖЕНСКАЯ КОЛЛЕКЦИЯ</p>
            <p className="collection_text">Обувь, полуверы, костюмы</p>
            <button
              className="collection_btn"
              onClick={() => navigatePageDevelopments()}
            >
              <img src={arrow} alt="arrow" />
            </button>
          </div>
          <img
            className="collection_img"
            src="./images/col_woman.jpg"
            alt="images collections"
          />
        </div>
      </div>
      <div className="cart_list">
        {dataArray &&
          dataArray.man.length > 0 &&
          dataArray?.man?.map((item: any) => (
            <div className="cart_item" key={item.id}>
              <p className="cart_title"> {item.title} </p>
              <img
                className="cart_item_img"
                src={
                  process.env.REACT_APP_URL_SERVER + "public/images/" + item.url
                }
                alt="cart..."
              />
              <button
                className="cart_item_btn"
                onClick={() => navigatePage(item.id)}
              >
                Посмотреть
              </button>
            </div>
          ))}

        {dataArray &&
          dataArray.woman.length > 0 &&
          dataArray?.woman?.map((item: any) => (
            <div className="cart_item" key={item.id}>
              <p className="cart_title"> {item.title} </p>
              <img
                className="cart_item_img"
                src={
                  process.env.REACT_APP_URL_SERVER + "public/images/" + item.url
                }
                alt="cart..."
              />
              <button
                className="cart_item_btn"
                onClick={() => navigatePage(item.id)}
              >
                Посмотреть
              </button>
            </div>
          ))}
      </div>
    </div>
  );
}

export default Product;
