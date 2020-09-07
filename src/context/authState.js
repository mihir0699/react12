import React, { useContext, useReducer } from "react";
import AuthContext from "./authContext";
import AuthReducer from "./authReducer";


const AuthState = (props) => {
    const initialState = {
      isAuthenticated: false,
      user: null,
        role: null,
      errors : null
    };
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    const setError = (error)=>{
        dispatch({type: "SET_ERROR", payload: error});
        setTimeout(
            () =>
              dispatch({
                type: "REMOVE_ERROR",
              }),
            3500)
    }

    const setUser = ()=>{
        dispatch({type: "SET_USER"});
    }

    const setAdmin = ()=>{
        dispatch({type: "SET_ADMIN"});
    }


    return (
        <AuthContext.Provider
          value={{
              isAuthenticated : state.isAuthenticated,
         error : state.errors,
         setError : setError,
         setUser : setUser,
         setAdmin : setAdmin,
         role: state.role
          }}
        >
          {" "}
          {props.children}{" "}
        </AuthContext.Provider>
      );
}


export default AuthState;