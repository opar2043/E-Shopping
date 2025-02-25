import { IoCheckmarkDoneCircleOutline } from "react-icons/io5"
import { MdOutlinePolicy, MdPolicy, MdSupportAgent } from "react-icons/md"


const Policy = () => {
  return (
    <div className="my-8 md:my-24 grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="flex flex-col gap-2 justify-center items-center mt-1 ">
            <MdOutlinePolicy className="text-5xl"></MdOutlinePolicy>
            <p className="text-gray-900 text-lg md:text-xl font-bold">Easy Exchange Policy</p>
            <p className="text-gray-700 text-sm md:text-lg font-semibold">We offer hassle free exchange policy</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center mt-1">
            <IoCheckmarkDoneCircleOutline  className="text-5xl" />
            <p className="text-gray-900 text-sm md:text-xl font-bold">7 Days Return Policy</p>
            <p className="text-gray-700 text-sm md:text-lg font-semibold">We provide 7 days free return policy</p>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center mt-1">
           <MdSupportAgent className="text-5xl" />
            <p className="text-gray-900 text-sm md:text-xl font-bold">Best customer support</p>
            <p className="text-gray-700 text-sm md:text-lg font-semibold">we provide 24/7 customer support</p>
        </div>

    </div>
  )
}

export default Policy