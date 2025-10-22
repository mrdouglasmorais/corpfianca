"use client";

export default function TestError() {
	// Força um erro para testar a página de error.js
	throw new Error("Erro de teste para verificar a página de erro personalizada");

	return <div>Esta página nunca será renderizada</div>;
}
