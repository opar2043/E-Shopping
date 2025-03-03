const AddItem = () => {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-100">
        <div className="card bg-white w-full max-w-lg p-6 rounded-lg shadow-xl">
          <div className="card-body">
            <h2 className="text-2xl font-semibold text-center mb-6">Add New Product</h2>
            <fieldset className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Product Name</label>
                <input
                  type="text"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Product Name"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <select
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                >
                  <option value="men">Men</option>
                  <option value="women">Women</option>
                  <option value="kids">Kids</option>
                </select>
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Price</label>
                <input
                  type="number"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Price"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Photo</label>
                <input
                  type="file"
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  accept="image/*"
                />
              </div>
  
              <div>
                <label className="block text-sm font-medium text-gray-700">Description</label>
                <textarea
                  className="input mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter Product Description"
                ></textarea>
              </div>
  
              <div className="text-center">
                <button className="btn btn-neutral mt-4 w-full py-2 rounded-md bg-blue-500 text-white font-semibold hover:bg-blue-600">
                  Submit
                </button>
              </div>
            </fieldset>
          </div>
        </div>
      </div>
    );
  };
  
  export default AddItem;
  
  