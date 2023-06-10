import "./DiscountModels.scss";
import { useGetDiscountQuery } from "../../features/shopApi";

function DiscountModels() {
  const { data } = useGetDiscountQuery("");
  console.log(data);

  function numberWithSpaces(x: string) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  return (
    <>
      <div className="contaiener_discounts_models">
        {data &&
          data.length > 0 &&
          data?.map((item: any) => (
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
                  {numberWithSpaces(item.price_discount)} ₽
                </span>
              </div>
              <button className="discounts_models_btn">В корзину</button>
            </div>
          ))}
      </div>
    </>
  );
}

export default DiscountModels;
