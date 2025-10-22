"use client"
import { createContext, useContext } from "react";

const headerContext = createContext(null)
const HeaderContextProvider = ({value, children}) => {
    return (
        <headerContext.Provider value={value}>
            {children?children:""}
        </headerContext.Provider>
    );
};

export const useHeaderContext = ()=>{
const value = useContext(headerContext)
// Se não há contexto disponível (SSR), retorna valores seguros
if (typeof window === 'undefined' && !value) {
  return {
    isExpand: false,
    setIsExpand: () => {},
  };
}
return value
}
export default HeaderContextProvider;
