import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { useEffect, useState } from "react";

type DataProps = {
  id: number;
  desc: string;
  price: string;
  img: string;
};

const Catalog: React.FC = () => {
  const [data, setData] = useState<[DataProps | null]>([null]);

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

      const [officeData, diningData, sofaData, bedroomData] = await Promise.all(
        promises
      );
      setData(data);
    };
    fetchData();
  }, [data]);

  return (
    <div className="bg-bg">
      <div className="p-5 mx-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl">Dinning</h2>
          <BsFillArrowRightCircleFill className="text-2xl cursor-pointer" />
        </div>

        {data[0] && (
          <div className="grid grid-cols-4 gap-3 cursor-pointer">
            {/* <LazyLoadImage
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
          </button> */}
            <LazyLoadImage src={data[0]["img"]} />
            <h2>{data[0].desc}</h2>
            <p>${data[0].price}</p>
            <button
              onClick={() => console.log("item added")}
              className="bg-yellow-500 mt-3 text-white"
            >
              ADD TO CART
            </button>
          </div>
        )}
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
