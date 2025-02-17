import { Link } from "react-router-dom"


const Card = ({img , name , price}) => {
  return (
    <Link>
        <div className="flex flex-col  shadow rounded-md">
            <div>
                <img src={img || 'Not Given'} alt="" className="w-full h-full rounded-t-md" />
            </div>
            <div className="p-3 flex flex-col gap-2 font-semibold text-gray-600 text-center">
              <h2>{name}</h2>
              <p>${price}</p>
            </div>
        </div>
    </Link>
  )
}

export default Card