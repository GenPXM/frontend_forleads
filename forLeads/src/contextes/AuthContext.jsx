// src/contexts/AuthContext.jsx

import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

// Contexto de Autenticação
const AuthContext = createContext();

// Provedor do Contexto de Autenticação
export const AuthProvider = ({ children }) => {
	const [token, setToken] = useState(localStorage.getItem("authToken") || "");

	const login = (newToken) => {
		localStorage.setItem("authToken", newToken);
		setToken(newToken);
	};

	const logout = () => {
		localStorage.removeItem("authToken");
		setToken("");
	};

	return (
		<AuthContext.Provider value={{ token, login, logout }}>
			{children}
		</AuthContext.Provider>
	);
};

// Validação de Propriedades
AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

// Hook para usar o contexto de autenticação
export const useAuth = () => useContext(AuthContext);
