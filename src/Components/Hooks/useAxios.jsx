import axios from "axios"
const axiosSecure = axios.create({
    baseURL: 'https://new-shoping-kappa.vercel.app'
})


const useAxios = () => {
  return axiosSecure
}

export default useAxios