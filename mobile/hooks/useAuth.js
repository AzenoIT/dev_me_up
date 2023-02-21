import {useContext, useDebugValue} from "react";
import AuthContext from "../context/AuthProvider";


function useAuth(){
    const {auth} = useContext(AuthContext);

    useDebugValue(auth, (auth) => auth ? 'logged in' : 'logged out');

    return useContext(AuthContext);
}

export default useAuth;