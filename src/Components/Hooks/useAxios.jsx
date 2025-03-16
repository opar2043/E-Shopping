import axios from "axios"
const axiosSecure = axios.create({
    baseURL: 'https://e-shoping-server.vercel.app'
})


const useAxios = () => {
  return axiosSecure
}

export default useAxios