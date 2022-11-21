import { diningItems as items } from "../lib/data";

export const Home = () => {
  return (
    <div>
      {items.map((item) => {
        return (
          <div className="card" key={item.id}>
            <img src={item.img} alt={item.img} />
            <h1>{item.id}</h1>
          </div>
        );
      })}
    </div>
  );
};
