import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <div
      className="sticky flex items-center justify-between flex-wrap mx-10 p-5 border-y-2 border-l-gray-400
    "
    >
      <Link to="/">
        <h2 className="text-xl">Crown Furniture</h2>
      </Link>
      <div>
        <Link className="text-lg" to="/">
          Home
        </Link>
        <Link className="text-lg ml-10" to="/catalog">
          Catalog
        </Link>
        <Link className="text-lg ml-10" to="/contacts">
          Contact Us
        </Link>
        <Link className="text-lg ml-10" to="/contacts">
          Cart
        </Link>
        <Link className="text-lg ml-10" to="/signUp">
          Sign up
        </Link>
      </div>
    </div>
  );
};
