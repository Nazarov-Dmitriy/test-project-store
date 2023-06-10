import { useGetCollectionQuery } from "../../features/shopApi";
import "./Product.scss";
import arrow from '../../assets/icons/arrow.svg'
import { useNavigate } from "react-router-dom";

function Product() {
  const { data } = useGetCollectionQuery("");
  const navigate = useNavigate();

  function navigatePage(id: string) {
    navigate(`/product-cart/${id}`);
  }

  return (
    <div className="container_product">
      <div className="collections">
        <div className="collection">
          <div className="collection_description">
            <p className="collection_title">МУЖСКАЯ КОЛЛЕКЦИЯ</p>
            <p className="collection_text">Обувь, полуверы, костюмы</p>
            <button className="collection_btn">
              <img src={arrow} alt="arrow"/>
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
            <button className="collection_btn">
              <img src={arrow} alt="arrow"/>
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
        {data &&
          data.man.length > 0 &&
          data?.man?.map((item: any) => (
            <div className="cart_item" key={item.id}>
              <p className="cart_title"> {item.title} </p>
              <img
                className="cart_item_img"
                src={
                  process.env.REACT_APP_URL_SERVER + "public/images/" + item.url
                }
                alt="cart..."
              />
              <button className="cart_item_btn" onClick={() => navigatePage(item.id)}>
                Посмотреть
              </button>
            </div>
          ))}

        {data &&
          data.woman.length > 0 &&
          data?.woman?.map((item: any) => (
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
