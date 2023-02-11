import { Link } from "react-router-dom";

export function CheckoutCard() {
  return (
    <div className="bg-bg py-2 h-auto">
      <div className="bg-white grid place-items-center mx-12 my-12 rounded-lg">
        <img
          className="object-contain h-48"
          src="https://play-lh.googleusercontent.com/EilZ1rSlx3NtAxIOhLc3ri7Ve49GYT-Qo5G7d5gxNmgObP7uL7k48BV4v8XBEpILAv4"
          alt=""
        />
        <h3 className="text-lg -mt-2 font-medium">Your cart is empty!</h3>
        <p className="text-base mb-6 font-light">
          Browse our categories and discover our best deals!
        </p>
        <Link to="/catalog">
          <button className="bg-BGyellow text-white mb-4 p-4 text-sm rounded-md font-medium align-center">
            START SHOPPING
          </button>
        </Link>
      </div>
    </div>
  );
}
