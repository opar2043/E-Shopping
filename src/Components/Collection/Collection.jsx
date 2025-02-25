import { useEffect, useState } from "react";
import Title from "../Shared/Title";
import Card from "./Card";

const Collection = () => {
  const [card, setCard] = useState([]);

  useEffect(() => {
    fetch("./product.jsx")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCard(data);
      });
  }, []);
  console.log(card);

  return (
    <div className="flex flex-col md:flex-row my-10">
      <div className="w-1/4 p-4 border-r border-gray-300">
        <h2 className="font-bold  mb-4 text-2xl">Filter</h2>

        {/* Category Filter */}
        <div className="space-y-2 border p-4 shadow">
          <h3 className="text-lg font-medium">Category</h3>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="men"
              className="accent-pink-500"
            />
            <span>Men</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="women"
              className="accent-pink-500"
            />
            <span>Women</span>
          </label>
          <label className="flex items-center space-x-2">
            <input
              type="radio"
              name="category"
              value="kid"
              className="accent-pink-500"
            />
            <span>Kid</span>
          </label>
        </div>
      </div>

      <div className="w-3/4">
      <div className="flex justify-between gap-3 px-2 md:px-6 my-3 md:my-5">

          <h2 className="text-2xl md:text-3xl font-bold flex justify-center items-center">
            All <span className="text-gray-600">Collection</span>
          <div className="border-t-2 ml-1 mt-2 border-gray-900 w-12 sm:w-16"></div>

          </h2>
          <div>
            <select className="select border font-semibold border-gray-600 w-full max-w-xs">
              <option disabled selected>
                Sort by : Price
              </option>
              <option>Sort by : Low to High</option>
              <option>Sort by : High to Low</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-2 mt-7 md:mt-12">
          {/* collection */}

          {card &&
            card.map((car, idx) => (
              <Card
                key={idx}
                img={car.image}
                price={car.price}
                name={car.name}
              ></Card>
            ))}
        </div>
      </div>
    </div>
  );
};

export default Collection;
