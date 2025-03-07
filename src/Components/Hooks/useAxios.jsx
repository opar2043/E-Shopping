import axios from "axios"

const axiosSecure = axios.create({
    baseURL: 'https://e-shoping-server-b3etp8xq2-opar2043s-projects.vercel.app'
})

const useAxios = () => {
  return axiosSecure
}

export default useAxios