import {createContext, useContext, useReducer} from "react";

export const StateContext = createContext(); /*export 내보내기*/


export const StateProvider = ({reducer,initialState,children}) => (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext); 


