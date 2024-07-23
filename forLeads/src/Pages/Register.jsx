import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
	const [username, setUsername] = useState("");
	const [cpf, setCpf] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [role, setRole] = useState(1);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(false);
	const navigate = useNavigate();

	const handleSubmit = async (e) => {
		e.preventDefault();
		setLoading(true);
		setError("");

		const userData = {
			username,
			cpf,
			role,
			email,
			password,
			confirmPassword,
		};

		console.log("Sending data to API:", userData);

		try {
			const response = await axios.post(
				"https://localhost:44369/Autenticacao/cadastrar",
				userData
			);

			console.log("API response:", response.data);

			if (response.data.codigo === 200) {
				navigate("/login");
			} else {
				setError(response.data.mensagem || "Registration failed");
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
				<h2 className="text-2xl font-bold mb-4">Cadastro de Usuário</h2>
				<form onSubmit={handleSubmit}>
					<div className="mb-4">
						<label
							htmlFor="username"
							className="block text-xl font-medium text-gray-700"
						>
							Nome
						</label>
						<input
							type="text"
							id="username"
							value={username}
							onChange={(e) => setUsername(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="cpf"
							className="block text-xl font-medium text-gray-700"
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
							htmlFor="email"
							className="block text-xl font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="block text-xl font-medium text-gray-700"
						>
							Senha
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
					<div className="mb-4">
						<label
							htmlFor="confirmPassword"
							className="block text-xl font-medium text-gray-700"
						>
							Confirme a senha
						</label>
						<input
							type="password"
							id="confirmPassword"
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="role"
							className="block text-xl font-medium text-gray-700"
						>
							Administrador
						</label>
						<select
							id="role"
							value={role}
							onChange={(e) => setRole(parseInt(e.target.value))}
							required
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
						>
							<option value={1}>Admin Master</option>
							<option value={2}>Gestor</option>
							{/* <option value={3}>Leads</option> */}
						</select>
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
						{loading ? "Loading..." : "Sign Up"}
					</button>
				</form>
			</div>
		</div>
	);
};

export default SignUp;
