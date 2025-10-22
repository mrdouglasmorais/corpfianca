"use client";
import { createContext, useContext } from "react";

const FooterContext = createContext(null);
const FooterContextProvider = ({ value, children }) => {
  return (
    <FooterContext.Provider value={value}>
      {children ? children : ""}
    </FooterContext.Provider>
  );
};

export const useFooterContext = () => {
  const value = useContext(FooterContext);
  // Se não há contexto disponível (SSR), retorna valores seguros
  if (typeof window === 'undefined' && !value) {
    return {
      isFooterBottom: false,
      setIsFooterBottom: () => {},
    };
  }
  return value;
};
export default FooterContextProvider;
