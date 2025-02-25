import { Link } from "react-router-dom";

const Card = ({ img, name, price }) => {
  return (
    <Link>
      <div className="flex flex-col shadow rounded-md overflow-hidden">
        <div className="relative w-full h-60 overflow-hidden">
          <img
            src={img || 'Not Given'}
            alt={name}
            className="w-full h-full object-cover transition-transform duration-75 ease-in-out transform hover:scale-125"
          />
        </div>
        <div className="p-3 flex flex-col gap-2 font-semibold text-gray-600 text-center">
          <h2>{name}</h2>
          <p>${price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Card;
