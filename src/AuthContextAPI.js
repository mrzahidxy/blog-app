import { createContext, useReducer, useEffect } from "react"

const AuthReducer = (state, action) => {
    switch (action.type) {
        case "LOGIN": {
            return {
                currentUser: action.payload,
            };
        }
        case "LOGOUT": {
            return {
                currentUser: null,
            };
        }
        default:
            return state;
    }
};

const INITIAL_STATE = {
    currentUser: null,

    //JSON.parse(localStorage.getItem("user")) ||

};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

    // useEffect(() => {
    //   localStorage.setItem("user", JSON.stringify(state.currentUser));
    // }, [state.currentUser]);

    return (
        <AuthContext.Provider value={{ currentUser: state.currentUser, dispatch }}>
            {children}
        </AuthContext.Provider>
    );
};