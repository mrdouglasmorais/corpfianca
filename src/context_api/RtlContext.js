"use client";
import { createContext, useContext } from "react";
const rtlContext = createContext(null);
export const useRtlContext = () => {
	const value = useContext(rtlContext);
	// Se não há contexto disponível (SSR), retorna valores seguros
	if (typeof window === 'undefined' && !value) {
		return { isRtl: false };
	}
	return value;
};
const RtlContext = ({ children, value }) => {
	return <rtlContext.Provider value={value}>{children}</rtlContext.Provider>;
};

export default RtlContext;
