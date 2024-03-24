import { createContext, useContext, useEffect, useReducer, useState} from "react";
import axios from "axios";
import { reducer } from "../utils/reducer.js";

export const initialState = {theme: "", data: []}

export const GlobalContext = createContext();

export const ContextProvider = ({ children }) => {
      //Aqui deberan implementar la logica propia del Context, utilizando el hook useMemo
      const [state, dispatch] = useReducer(reducer, initialState);
      const url = 'https://jsonplaceholder.typicode.com/users';

      useEffect(() => {
            //Llamado a la API 
            axios(url)
            .then(res => {dispatch({type: 'GET_LIST', payload: res.data})})
      }, [])

      return (
            <GlobalContext.Provider value={{state, dispatch}}>
                  {children}
            </GlobalContext.Provider>
      );
};

export default ContextProvider

export const useGlobalContext = () => useContext(GlobalContext);
