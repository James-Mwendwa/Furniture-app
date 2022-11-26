export const Cards = () => {
  return (
    <div className="h-screen ">
      <div className="flex items-center justify-between  mx-10 p-5 ">
        <div className="bg-card1 mt-8  h-80 w-96 grid place-content-center">
          <img
            className="h-60 w-60 mix-blend-multiply"
            src="images/img29.jpg"
            alt=""
          />
        </div>
        <div className="bg-card2 mt-8 h-80 w-96 grid place-content-center">
          <img
            className="h-60 w-60 mix-blend-multiply"
            src="images/img30.jpg"
            alt=""
          />
        </div>
        <div className="bg-card3 mt-8  h-80 w-96 grid place-content-center">
          <img
            className="h-60 w-60 mix-blend-multiply"
            src="images/img31.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};
