// // src/Pages/Login.jsx

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
// 	const [cpf, setCpf] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [error, setError] = useState("");
// 	const [loading, setLoading] = useState(false);
// 	const navigate = useNavigate();

// 	const handleLogin = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);
// 		setError("");

// 		// Log the data being sent to the API
// 		console.log("Sending data to API:", { cpf, password });

// 		try {
// 			const response = await axios.post(
// 				"https://localhost:44369/Autenticacao/login",
// 				{
// 					cpf,
// 					password,
// 				}
// 			);

// 			// Log the full response
// 			console.log("API response:", response.data);

// 			// Check if the API response indicates success
// 			if (
// 				response.data.codigo === 200 &&
// 				response.data.retorno &&
// 				response.data.retorno.token
// 			) {
// 				// Save the token or user data as needed
// 				localStorage.setItem("token", response.data.retorno.token);
// 				navigate("/"); // Redirect to home or another page
// 			} else {
// 				// Use the resposta field to provide additional information
// 				setError(response.data.resposta || "Login failed");
// 			}
// 		} catch (err) {
// 			// Log the error
// 			console.error("Error during login:", err);
// 			setError("An error occurred");
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="flex justify-center items-center min-h-screen bg-gray-100">
// 			<div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
// 				<h2 className="text-2xl font-bold mb-4">Login</h2>
// 				<form onSubmit={handleLogin}>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="cpf"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							CPF
// 						</label>
// 						<input
// 							type="text"
// 							id="cpf"
// 							value={cpf}
// 							onChange={(e) => setCpf(e.target.value)}
// 							required
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="password"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Password
// 						</label>
// 						<input
// 							type="password"
// 							id="password"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							required
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// 						/>
// 					</div>
// 					{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
// 					<button
// 						type="submit"
// 						className={`w-full bg-brandPrimary text-white py-2 px-4 rounded transition-all duration-300 ${
// 							loading
// 								? "opacity-50 cursor-not-allowed"
// 								: "hover:bg-neutralDGrey"
// 						}`}
// 						disabled={loading}
// 					>
// 						{loading ? "Loading..." : "Login"}
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// const Login = () => {
// 	const [cpf, setCpf] = useState("");
// 	const [password, setPassword] = useState("");
// 	const [error, setError] = useState("");
// 	const [loading, setLoading] = useState(false);
// 	const navigate = useNavigate();

// 	const handleLogin = async (e) => {
// 		e.preventDefault();
// 		setLoading(true);
// 		setError("");

// 		// Log the data being sent to the API
// 		console.log("Sending data to API:", { cpf, password });

// 		try {
// 			const response = await axios.post(
// 				"https://localhost:44369/Autenticacao/login",
// 				{
// 					cpf,
// 					password,
// 				}
// 			);

// 			// Log the full response
// 			console.log("API response:", response.data);

// 			// Check if the API response indicates success
// 			if (
// 				response.data.codigo === 200 &&
// 				response.data.retorno &&
// 				response.data.retorno.token
// 			) {
// 				// Save the token or user data as needed
// 				localStorage.setItem("token", response.data.retorno.token);
// 				navigate("/dashboard"); // Redirect to the dashboard
// 			} else {
// 				// Use the resposta field to provide additional information
// 				setError(response.data.resposta || "Login failed");
// 			}
// 		} catch (err) {
// 			// Log the error
// 			console.error("Error during login:", err);
// 			setError("An error occurred");
// 		} finally {
// 			setLoading(false);
// 		}
// 	};

// 	return (
// 		<div className="flex justify-center items-center min-h-screen bg-gray-100">
// 			<div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
// 				<h2 className="text-2xl font-bold mb-4">Login</h2>
// 				<form onSubmit={handleLogin}>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="cpf"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							CPF
// 						</label>
// 						<input
// 							type="text"
// 							id="cpf"
// 							value={cpf}
// 							onChange={(e) => setCpf(e.target.value)}
// 							required
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="password"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Password
// 						</label>
// 						<input
// 							type="password"
// 							id="password"
// 							value={password}
// 							onChange={(e) => setPassword(e.target.value)}
// 							required
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
// 						/>
// 					</div>
// 					{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
// 					<button
// 						type="submit"
// 						className={`w-full bg-brandPrimary text-white py-2 px-4 rounded transition-all duration-300 ${
// 							loading
// 								? "opacity-50 cursor-not-allowed"
// 								: "hover:bg-neutralDGrey"
// 						}`}
// 						disabled={loading}
// 					>
// 						{loading ? "Loading..." : "Login"}
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Login;

import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
	const [cpf, setCpf] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleLogin = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		try {
			const response = await axios.post(
				"https://localhost:44369/Autenticacao/login",
				{ cpf, password }
			);

			if (
				response.data.codigo === 200 &&
				response.data.retorno &&
				response.data.retorno.token
			) {
				// Save the token in local storage
				localStorage.setItem("token", response.data.retorno.token);
				// Navigate to the dashboard
				navigate("/dashboard");
			} else {
				setError(response.data.resposta || "Login failed");
			}
		} catch (err) {
			setError("An error occurred");
		} finally {
			setLoading(false);
		}
	};

	return (
		<div className="flex justify-center items-center min-h-screen bg-gray-100">
			<div className="bg-white p-6 rounded-lg shadow-md max-w-sm w-full">
				<h2 className="text-2xl font-bold mb-4">Login</h2>
				<form onSubmit={handleLogin}>
					<div className="mb-4">
						<label
							htmlFor="cpf"
							className="block text-sm font-medium text-gray-700"
						>
							CPF
						</label>
						<input
							type="text"
							id="cpf"
							value={cpf}
							onChange={(e) => setCpf(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Password
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					{error && <p className="text-red-500 text-sm mb-4">{error}</p>}
					<button
						type="submit"
						className={`w-full bg-brandPrimary text-white py-2 px-4 rounded transition-all duration-300 ${
							loading
								? "opacity-50 cursor-not-allowed"
								: "hover:bg-neutralDGrey"
						}`}
						disabled={loading}
					>
						{loading ? "Loading..." : "Login"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default Login;
