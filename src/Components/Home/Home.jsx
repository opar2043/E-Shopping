import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import Banner from "./Banner";
import Card from "../Collection/Card";
import Subscribe from "../Root/Subscribe";
import Policy from "./Policy";
import useProducts from "../Hooks/useProducts";
import Review from "../Review/review";

const Home = () => {
  const [products] = useProducts([]);
  const top = products && products.filter((fil) => fil.sell == "top");

  console.log(products, "products");

  return (
    <div>
      <Banner></Banner>
      <Title
        head={"Our"}
        head2={"Collection"}
        para={"Check our latest arraivals to know aboutb us!"}
      ></Title>
      <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {products &&
          products
            .slice(0, 8)
            .map((car, idx) => (
              <Card
                key={idx}
                img={car.image}
                price={car.price}
                name={car.name}
                id={car._id}
              ></Card>
            ))}
      </div>

      <div className="md:mt-24">
        <Title
          head={"Our"}
          head2={"Top Collection"}
          para={"Check our latest Top Collection This Week"}
        ></Title>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {top &&
            top
              .slice(0, 4)
              .map((car, idx) => (
                <Card
                  key={idx}
                  img={car.image}
                  price={car.price}
                  name={car.name}
                  id={car._id}
                ></Card>
              ))}
        </div>
      </div>
      <Policy></Policy>
      <Subscribe></Subscribe>
      <Review></Review>
    </div>
  );
};

export default Home;
