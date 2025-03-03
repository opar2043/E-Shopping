import React, { useContext } from 'react'
import { AuthContext } from '../Provider/AuthProvider'

const useAuth = () => {
   const contex = useContext(AuthContext);
   return contex
}

export default useAuth