import React, { useState } from "react";
import axios from "axios";

const AuthLogin = () => {
	const [cpf, setCpf] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");
	const [successMessage, setSuccessMessage] = useState("");

	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await axios.post(
				"https://localhost:44369/Autenticacao/login",
				{
					cpf,
					password,
				}
			);

			const { codigo, resposta, retorno, sucesso } = response.data;

			if (sucesso) {
				setSuccessMessage(resposta);
				localStorage.setItem("token", retorno.token);
			} else {
				setError("Erro ao efetuar login. Verifique seu CPF e senha.");
			}
		} catch (error) {
			setError("Ocorreu um erro. Tente novamente mais tarde.");
		}
	};

	return (
		<div className="flex items-center justify-center min-h-screen bg-neutralSilver">
			<div className="bg-white p-8 rounded-lg shadow-md w-full max-w-sm">
				<h2 className="text-2xl font-semibold mb-6 text-center">Login</h2>
				{successMessage && (
					<div className="mb-4 text-green-500">{successMessage}</div>
				)}
				{error && <div className="mb-4 text-red-500">{error}</div>}
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
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
						/>
					</div>
					<div className="mb-6">
						<label
							htmlFor="password"
							className="block text-sm font-medium text-gray-700"
						>
							Senha
						</label>
						<input
							type="password"
							id="password"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
							required
						/>
					</div>
					<button
						type="submit"
						className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
					>
						Login
					</button>
				</form>
			</div>
		</div>
	);
};

export default AuthLogin;
