import React, { createContext, useState, useContext } from "react";
import PropTypes from "prop-types";

const AuthContext = createContext();

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

AuthProvider.propTypes = {
	children: PropTypes.node.isRequired,
};

export const useAuth = () => useContext(AuthContext);
