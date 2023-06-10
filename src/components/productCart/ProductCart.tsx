import { useParams } from "react-router-dom";
import "./ProductCart.scss";
import { useGetProductQuery } from "src/features/shopApi";

function ProductCart() {
  let { id } = useParams();
  const { data } = useGetProductQuery(id);
  console.log(data);

  return (
    <div className="product_card_wraper">
      {data && (
        <div className="product_cart">
          <h2 className="product_card_title">{data.title}</h2>
          <div className="product_card_top">
            <div className="product_card_image">
              <img
                src={
                  process.env.REACT_APP_URL_SERVER + "public/images/" + data.url
                }
                alt={data.title}
              />
            </div>
          </div>
          <div className="product_card_bottom">
            <div className="product_card_prices">
              {data.price_discount && (
                <div className="product_card_price product_card_price--discount">
                  {data.price_discount}
                </div>
              )}
              <div className="product_card_price product_card_price--common">
                {data.price}
              </div>
            </div>
            <button className="product_card_add">В корзину</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductCart;
