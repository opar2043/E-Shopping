import toast, { Toaster } from "react-hot-toast";
import useProducts from "../../Hooks/useProducts";
import useAxios from "../../Hooks/useAxios";
import Swal from "sweetalert2";

const Item = () => {
  const [products] = useProducts();
  console.log(products);

  const axiosSecure = useAxios()

  function handleDelete(id){
    console.log(id);
  

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/products/${id}`)
        .then(res => {
          toast.error('Successfully Deleted')
        })
      }
    });




  }

  return (
<div>
      <h2>All Products</h2>
      <Toaster position="top-center" reverseOrder={false} />
      <div>
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>#</th>
                <th>img</th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {products &&
                products.map((item, idx) => (
                  <tr key={idx}>
                    <td>{idx + 1}</td>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img
                              src={item.image}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                      </div>
                    </td>
                    <td>{item.name}</td>
                    <td>{item.category}</td>
                    <th className="">
                      <button
                      onClick={()=>handleDelete(item._id)}
                      className="btn btn-xs text-red-500">X</button>
                    </th>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Item;
