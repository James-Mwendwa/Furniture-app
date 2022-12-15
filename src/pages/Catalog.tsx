import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";

const url1 = "http://localhost:8000/dining";
const url2 = "http://localhost:8000/office";
const url3 = "http://localhost:8000/sofa";
const url4 = "http://localhost:8000/bedroom";

const Catalog = () => {
  return (
    <div className="bg-bg">
      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Dinning</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>

        <div className="grid grid-cols-4 gap-3 cursor-pointer">
          {diningItems.map((item) => {
            return (
              <div key={item.id}>
                <LazyLoadImage
                  className="h-64 w-72 mt-4 rounded-lg"
                  src={item.img}
                  alt={item.img}
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button
                  onClick={() => console.log("item added")}
                  className="bg-yellow-500 mt-3 text-white"
                >
                  ADD TO CART
                </button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Office</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer">
          {officeItems.map((item) => {
            return (
              <div key={item.id}>
                <LazyLoadImage
                  className="h-64 w-72 mt-4 rounded-lg"
                  src={item.img}
                  alt={item.img}
                  effect="blur"
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Sofa</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer">
          {sofaItems.map((item) => {
            return (
              <div key={item.id}>
                <LazyLoadImage
                  className="h-64 w-72 mt-4 rounded-lg"
                  src={item.img}
                  alt={item.img}
                  effect="blur"
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Bedroom</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer">
          {bedroomItems.map((item) => {
            return (
              <div key={item.id}>
                <img
                  className="h-64 w-72 mt-4 rounded-lg"
                  src={item.img}
                  alt={item.img}
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button>ADD TO CART</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
