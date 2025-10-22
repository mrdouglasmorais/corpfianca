"use client";
import { createContext, useContext } from "react";
const commonContext = createContext(null);
export const useCommonContext = () => {
  const value = useContext(commonContext);
  // Se não há contexto disponível (SSR), retorna valores seguros
  if (typeof window === 'undefined' && !value) {
    return {};
  }
  return value;
};
const CommonContext = ({ children, value }) => {
  return (
    <commonContext.Provider value={value}>{children}</commonContext.Provider>
  );
};

export default CommonContext;
