import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { SiMastercard } from "react-icons/si";
import { FaCcVisa } from "react-icons/fa";
import { BsPaypal } from "react-icons/bs";
import { FaCcApplePay } from "react-icons/fa";

export const Footer = () => {
  return (
    <div className="bg-slate-900 h-60 w-full text-white flex justify-center">
      <div className="flex">
        <div className="p-7">
          <h2>LET US HELP YOU</h2>
          <p className="mt-5 text-xs">Help Center</p>
          <p className="mt-2 text-xs">Contact Us</p>
          <p className="mt-2 text-xs">Shipping and Delivery</p>
          <p className="mt-2 text-xs">Return Policy</p>
          <p className="mt-2 text-xs">Report a Product</p>
        </div>

        <div className="p-7">
          <h2 className="">JOIN US ON</h2>
          <div className="flex text-center flex-wrap mt-6">
            <FaFacebook />
            <AiFillInstagram className="mx-2" />
            <BsYoutube />
          </div>
        </div>
      </div>

      <div className="p-7">
        <h2>PAYMENT METHODS</h2>
        <div className="flex text-center flex-wrap mt-6">
          <SiMastercard />
          <FaCcVisa className="mx-2" />
          <BsPaypal />
          <FaCcApplePay className="ml-2" />
        </div>
      </div>
    </div>
  );
};
