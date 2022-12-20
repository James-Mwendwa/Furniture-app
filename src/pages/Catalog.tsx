import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

const url1 = "http://localhost:8000/dining";
const url2 = "http://localhost:8000/office";
const url3 = "http://localhost:8000/sofa";
const url4 = "http://localhost:8000/bedroom";

type DinningProps = {
  id: number;
  desc: string;
  price: string;
  img: string;
};

const Catalog = () => {
  const [dining, setDining] = useState([]);

  async function fetchDining() {
    const results = await Promise.all([
      fetch(url1).then((res) => res.json()),
      fetch(url2).then((res) => res.json()),
      fetch(url3).then((res) => res.json()),
      fetch(url4).then((res) => res.json()),
    ]);

    console.log(results);
  }

  useEffect(() => {
    fetchDining();
  }, []);

  return (
    <div className="bg-bg">
      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Dinning</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>

        <div className="grid grid-cols-4 gap-3 cursor-pointer">
          <LazyLoadImage
            className="h-64 w-72 mt-4 rounded-lg"
            src={dining.img}
            alt={dining.img}
          />
          <h2>{dining.desc}</h2>
          <p>${dining.price}</p>
          <button
            onClick={() => console.log("item added")}
            className="bg-yellow-500 mt-3 text-white"
          >
            ADD TO CART
          </button>
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Office</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer"></div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Sofa</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer"></div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Bedroom</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer"></div>
      </div>
    </div>
  );
};

export default Catalog;
