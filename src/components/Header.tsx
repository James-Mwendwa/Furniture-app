import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlinePhone } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { VscAccount } from "react-icons/vsc";
import { TbSofa } from "react-icons/tb";

export const Header = () => {
  return (
    <div
      className=" flex items-center justify-between top-0  mx-10 p-5 sm:bg-red-600
    "
    >
      <Link to="/">
        <h2 className="text-xl">Crown Furniture</h2>
      </Link>
      <div className="flex items-center">
        <div className="flex items-center">
          <AiOutlineHome className="text-base" />
          <Link className="text-base ml-1" to="/">
            Home
          </Link>
        </div>

        <div className="flex items-center ml-10">
          <TbSofa className="text-base" />
          <Link className="text-base ml-1" to="/catalog">
            Catalog
          </Link>
        </div>

        <div className="flex items-center ml-10">
          <AiOutlinePhone className="text-base" />
          <Link className="text-base ml-1" to="/contacts">
            Contact Us
          </Link>
        </div>

        <div className="flex items-center ml-10">
          <HiOutlineShoppingCart className="text-base" />
          <Link className="text-base ml-1" to="/cart">
            Cart
          </Link>
        </div>

        <div className="flex items-center ml-10">
          <VscAccount className="text-base" />
          <Link className="text-base ml-1" to="/signUp">
            Account
          </Link>
        </div>
      </div>
    </div>
  );
};
