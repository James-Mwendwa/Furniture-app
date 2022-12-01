import { diningItems } from "../lib/data";

const Catalog = () => {
  return (
    <div>
      <h2>Dinning</h2>
      <div className="">
        {diningItems.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt={item.img} />
              <h2>{item.title}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Catalog;
