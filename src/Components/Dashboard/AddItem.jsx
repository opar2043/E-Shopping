import { useState } from "react";
import useAxios from "../Hooks/useAxios";
import toast, { Toaster } from "react-hot-toast";

const AddItem = () => {
  const axiosSecure = useAxios();

  const [category, setCategory] = useState("men");
  const [rating, setRating] = useState(5);

  function handleSubmit(e) {
    e.preventDefault();
    const target = e.target;
    const name = target.name.value;
    const photo = target.photo.value;
    const description = target.description.value;
    const price = target.price.value;

    const products = {
      name,
      photo,
      description,
      price,
      category,
      rating,
    };

    console.log(products);

    axiosSecure.post("/products", products).then((res) => {
      toast.success("Successfully Added The Item");
    });
    target.reset();
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <Toaster position="top-center" />
      <div className="card bg-white w-full max-w-lg p-1 rounded-lg shadow-xl">
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-center mb-6">
            Add New Product
          </h2>
          <form className="space-y-4" onSubmit={handleSubmit}>
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">
                Product Name
              </label>
              <input
                type="text"
                className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Product Name"
                name="name"
              />
            </div>

            <div className="flex gap-2 md:flex-row flex-col">
              {/* Category */}

              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Category
                </label>
                <select
                  onChange={(e) => setCategory(e.target.value)}
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>

              {/* rating */}
              <div className="w-full">
                <label className="block text-sm font-medium text-gray-700">
                  Rating
                </label>
                <select
                  onChange={(e) => setRating(e.target.value)}
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Price
              </label>
              <input
                type="number"
                className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Price"
                name="price"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Photo
              </label>
              <input
                type="url"
                className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="share image URL"
                name="photo"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">
                Description
              </label>
              <textarea
                className="input h-24 py-2 mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Enter Product Description"
                name="description"
              ></textarea>
            </div>

            <div className="text-center">
              <button className="btn btn-neutral mt-4 w-full py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600">
                Add Item
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddItem;
