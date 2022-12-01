import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { Link } from "react-router-dom";

export const Cards = () => {
  return (
    <div className="h-screen">
      <div className="flex items-center justify-between  mx-1 p-5 ">
        <div className="bg-card1  h-60 w-96 grid place-content-center">
          <LazyLoadImage
            className=" mix-blend-multiply"
            src="images/wood.jpg"
            alt=""
          />
        </div>
        <div className="bg-card2 mx-2  h-60 w-96 grid place-content-center">
          <LazyLoadImage
            className="h-60 w-60 mix-blend-multiply"
            src="images/stool.jpg"
            alt=""
          />
        </div>
        <div className="bg-card1 h-60 w-96 grid place-content-center">
          <LazyLoadImage
            className="h-60 w-60 mix-blend-multiply"
            src="images/pine.jpg"
            alt=""
          />
        </div>

        <div className="bg-card3 ml-2  h-60 w-96 grid place-content-center">
          <LazyLoadImage
            className="h-60 w-60 mix-blend-multiply"
            src="images/cloth.jpg"
            alt=""
          />
        </div>
      </div>

      <div className="h-80 bg-blue mx-6 p-5">
        <div className="flex flex-col mt-10 mx-10">
          <h2 className="text-2xl">
            Choose The Modern<br></br>Furniture For Better Living
          </h2>
          <Link
            className="flex text-center mt-40 bg-black text-white text-xs font-medium h-8 w-24"
            to="/catalog"
          >
            <button className="p-1">SHOP NOW</button>
          </Link>
        </div>
      </div>
    </div>
  );
};
