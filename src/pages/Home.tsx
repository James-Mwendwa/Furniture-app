import { Banner } from "../components/Banner";
import { diningItems, officeItems } from "../lib/data";

function Home() {
  return (
    <>
      <Banner />

      <div>
        {officeItems.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>

      <div>
        {diningItems.map((item) => {
          return (
            <div key={item.id}>
              <img src={item.img} alt="" />
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Home;
