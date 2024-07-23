import React, { useState } from "react";

const LoginForm = () => {
	const [cpf, setCpf] = useState("");
	const [password, setPassword] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		console.log("CPF:", cpf);
		console.log("Senha:", password);
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-6 rounded shadow-md max-w-sm mx-auto"
		>
			<h2 className="text-2xl font-bold mb-5 text-center">Login</h2>
			<div className="mb-4">
				<label htmlFor="cpf" className="block text-gray-700">
					CPF
				</label>
				<input
					type="text"
					id="cpf"
					value={cpf}
					onChange={(e) => setCpf(e.target.value)}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					required
				/>
			</div>
			<div className="mb-6">
				<label htmlFor="password" className="block text-gray-700">
					Senha
				</label>
				<input
					type="password"
					id="password"
					value={password}
					onChange={(e) => setPassword(e.target.value)}
					className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700"
			>
				Entrar
			</button>
		</form>
	);
};

export default LoginForm;
