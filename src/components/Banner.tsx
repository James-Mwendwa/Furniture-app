import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

export const Banner = () => {
  return (
    <>
      <div className="relative flex box-border  h-screen">
        <div className="grid place-content-center bg-green w-2/4">
          <h2 className=" text-6xl font-bold">
            Your Imagination, <br></br> Our Creation
          </h2>
        </div>
        <div className="bg-blue w-2/4">
          <LazyLoadImage
            className="object-contain"
            src="images/img25.jpg"
            effect="blur"
            alt=""
          />
        </div>

        <div className="absolute flex items-center bottom-0 inset-x-1/4">
          <div className="bg-card4 h-48 w-64">
            <LazyLoadImage
              className="object-contain h-48 w-48 mx-8 mix-blend-multiply"
              src="images/img3.jpg"
              alt=""
            />
          </div>

          <div className="flex h-48 w-64 items-center justify-between bg-black">
            <p className="text-white ml-2 ">
              Guarantee<br></br>10 years
            </p>
            <p className="text-white">
              Individual<br></br>Order
            </p>
            <p className="text-white mr-2">
              Free<br></br>Delivery
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
