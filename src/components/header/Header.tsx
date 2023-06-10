import "./Header.scss";
import Basket from "./basket/Basket";
import Navbar from "./navbar/Navbar";

function Header() {
  return (
    <div className="contaiener">
      <Navbar/>
      <Basket/>
    </div>
  );
}

export default Header;
