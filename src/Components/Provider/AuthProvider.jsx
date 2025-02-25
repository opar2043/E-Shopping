import { createContext } from "react"

export const AuthContext = createContext()
const AuthProvider = ({children}) => {
 
    const obj = {

    }
    return <AuthContext.Provider value={obj}>
        {children}
    </AuthContext.Provider>
}

export default AuthProvider