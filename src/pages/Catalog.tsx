import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

import { useContext } from "react";
import { ShoppingCartContext } from "../context/ShoppingCartContext";

type DataProps = {
  id: number;
  desc: string;
  price: string;
  img: string;
};

type ItemProps = {
  id: number;
};

export const FurnitureData = {
  getData: any,
};

const Catalog = () => {
  const [data, setData] = useState<Array<DataProps[]>>([]);

  const { increaseCartQuantity } = useContext(ShoppingCartContext);

  useEffect(() => {
    const fetchData = async () => {
      const promises = [
        fetch(" http://localhost:8000/dining").then((response) =>
          response.json()
        ),
        fetch(" http://localhost:8000/office").then((response) =>
          response.json()
        ),
        fetch(" http://localhost:8000/sofa").then((response) =>
          response.json()
        ),
        fetch(" http://localhost:8000/bedroom").then((response) =>
          response.json()
        ),
      ];

      const furnitureData = await Promise.all(promises);

      setData(furnitureData);
    };

    fetchData();
  }, [data]);

  FurnitureData.getData = () => data;

  return (
    <div className="bg-bg">
      <div className="p-5 mx-10">
        <div className="flex items-center justify-between  bg-white rounded-lg">
          <h2 className="text-xl ml-4">Dinning</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer mr-2" />
        </div>

        <div className="grid grid-cols-4 gap-2 cursor-pointer bg-white">
          {data[0] &&
            data[0].map((item) => (
              <div key={item.id} className="m-4">
                <LazyLoadImage
                  className="w-80 h-40 rounded-xl mb-2"
                  src={item.img}
                  alt=""
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="bg-yellow-500 p-1 text-sm rounded-md mt-3 text-white"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between  bg-white rounded-lg">
          <h2 className="text-xl ml-4">Office</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer mr-4" />
        </div>

        <div className="grid grid-cols-4 gap-3 cursor-pointer bg-white">
          {data[0] &&
            data[1].map((item) => (
              <div className="m-4" key={item.id}>
                <LazyLoadImage
                  className="w-80 h-40 rounded-xl mb-2"
                  src={item.img}
                  alt=""
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="bg-yellow-500 p-1 text-sm rounded-md mt-3 text-white"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between  bg-white rounded-lg">
          <h2 className="text-xl ml-4">Sofa</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer mr-4" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer  bg-white">
          {data[0] &&
            data[2].map((item) => (
              <div className="m-4" key={item.id}>
                <LazyLoadImage
                  className="w-80 h-40 rounded-xl mb-2"
                  src={item.img}
                  alt=""
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="bg-yellow-500 p-1 text-sm rounded-md mt-3 text-white"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>
      </div>

      <div className="p-5 mx-10">
        <div className="flex items-center justify-between bg-white rounded-lg">
          <h2 className="text-xl ml-4">Bedroom</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer mr-2" />
        </div>
        <div className="grid grid-cols-4 gap-3 cursor-pointer rounded-md  bg-white">
          {data[0] &&
            data[3].map((item) => (
              <div className="m-4" key={item.id}>
                <LazyLoadImage
                  className="w-80 h-40 rounded-xl mb-2"
                  src={item.img}
                  alt=""
                />
                <h2>{item.desc}</h2>
                <p>${item.price}</p>
                <button
                  onClick={() => increaseCartQuantity(id)}
                  className="bg-yellow-500 p-1 text-sm rounded-md mt-3 text-white"
                >
                  ADD TO CART
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Catalog;
