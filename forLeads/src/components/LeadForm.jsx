// src/components/LeadForm.jsx

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { createLead } from "../services/LeadServices";

// const LeadForm = ({ onClose, refreshLeads }) => {
// 	const [lead, setLead] = useState({
// 		nome: "",
// 		cpf: "",
// 		email: "",
// 		telefone: "",
// 		rua: "",
// 		bairro: "",
// 		numero: "",
// 		complemento: "",
// 		cep: "",
// 		cidade: "",
// 		estado: "",
// 	});

// 	const [errors, setErrors] = useState({});

// 	const handleChange = (e) => {
// 		setLead({ ...lead, [e.target.name]: e.target.value });
// 	};

// 	const validateForm = () => {
// 		const newErrors = {};
// 		for (const key in lead) {
// 			if (!lead[key]) {
// 				newErrors[key] = "Este campo é obrigatório";
// 			}
// 		}
// 		setErrors(newErrors);
// 		return Object.keys(newErrors).length === 0;
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (!validateForm()) {
// 			return;
// 		}
// 		try {
// 			await createLead(lead);
// 			if (refreshLeads) refreshLeads();
// 			alert("Lead cadastrado com sucesso!");
// 			onClose(); // Close the form after submission
// 		} catch (error) {
// 			console.error("Failed to create lead:", error);
// 			alert("Erro ao cadastrar o lead.");
// 		}
// 	};

// 	return (
// 		<div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
// 			<h2 className="text-2xl font-semibold mb-4">Cadastrar Lead</h2>
// 			<form onSubmit={handleSubmit} className="space-y-4">
// 				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// 					{Object.keys(lead).map((key) => (
// 						<div key={key} className="relative">
// 							<input
// 								type={key === "email" ? "email" : "text"}
// 								name={key}
// 								value={lead[key]}
// 								onChange={handleChange}
// 								placeholder={capitalizeFirstLetter(key)}
// 								className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
// 									errors[key] ? "border-red-500" : ""
// 								}`}
// 							/>
// 							{errors[key] && (
// 								<span className="text-red-500 text-sm mt-1">{errors[key]}</span>
// 							)}
// 						</div>
// 					))}
// 				</div>
// 				<div className="flex justify-end space-x-4 mt-4">
// 					<button
// 						type="submit"
// 						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
// 					>
// 						Cadastrar
// 					</button>
// 					<button
// 						type="button"
// 						onClick={onClose}
// 						className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// 					>
// 						Cancelar
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	);
// };

// // Função auxiliar para capitalizar a primeira letra das palavras
// const capitalizeFirstLetter = (string) => {
// 	return (
// 		string.charAt(0).toUpperCase() +
// 		string
// 			.slice(1)
// 			.replace(/([A-Z])/g, " $1")
// 			.trim()
// 	);
// };

// // Adicione a validação das props
// LeadForm.propTypes = {
// 	onClose: PropTypes.func.isRequired,
// 	refreshLeads: PropTypes.func,
// };

// export default LeadForm;

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import { createLead } from "../services/LeadServices";

// const LeadForm = ({ onClose, refreshLeads }) => {
// 	const [lead, setLead] = useState({
// 		nome: "",
// 		cpf: "",
// 		email: "",
// 		telefone: "",
// 		rua: "",
// 		bairro: "",
// 		numero: "",
// 		complemento: "",
// 		cep: "",
// 		cidade: "",
// 		estado: "",
// 	});

// 	const [errors, setErrors] = useState({});
// 	const [apiError, setApiError] = useState(""); // Para armazenar mensagens de erro da API

// 	const handleChange = (e) => {
// 		setLead({ ...lead, [e.target.name]: e.target.value });
// 	};

// 	const validateForm = () => {
// 		const newErrors = {};
// 		for (const key in lead) {
// 			if (!lead[key]) {
// 				newErrors[key] = "Este campo é obrigatório";
// 			}
// 		}
// 		setErrors(newErrors);
// 		return Object.keys(newErrors).length === 0;
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();
// 		if (!validateForm()) {
// 			return;
// 		}
// 		try {
// 			await createLead(lead);
// 			if (refreshLeads) refreshLeads();
// 			alert("Lead cadastrado com sucesso!");
// 			onClose(); // Fechar o formulário após o envio
// 		} catch (error) {
// 			console.error("Failed to create lead:", error);

// 			if (error.response && error.response.data) {
// 				const { resposta, retorno } = error.response.data;
// 				if (
// 					resposta === "Solicitação inválida" &&
// 					retorno.includes("CPF já cadastrado")
// 				) {
// 					setApiError("O CPF já está cadastrado.");
// 				} else {
// 					setApiError("Erro ao cadastrar o lead. Por favor, tente novamente.");
// 				}
// 			} else {
// 				setApiError("Erro ao cadastrar o lead. Por favor, tente novamente.");
// 			}
// 		}
// 	};

// 	return (
// 		<div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
// 			<h2 className="text-2xl font-semibold mb-4">Cadastrar Lead</h2>
// 			<form onSubmit={handleSubmit} className="space-y-4">
// 				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
// 					{Object.keys(lead).map((key) => (
// 						<div key={key} className="relative">
// 							<input
// 								type={key === "email" ? "email" : "text"}
// 								name={key}
// 								value={lead[key]}
// 								onChange={handleChange}
// 								placeholder={capitalizeFirstLetter(key)}
// 								className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
// 									errors[key] ? "border-red-500" : ""
// 								}`}
// 							/>
// 							{errors[key] && (
// 								<span className="text-red-500 text-sm mt-1">{errors[key]}</span>
// 							)}
// 						</div>
// 					))}
// 				</div>
// 				<div className="flex justify-end space-x-4 mt-4">
// 					<button
// 						type="submit"
// 						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
// 					>
// 						Cadastrar
// 					</button>
// 					<button
// 						type="button"
// 						onClick={onClose}
// 						className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
// 					>
// 						Cancelar
// 					</button>
// 				</div>
// 			</form>
// 			{apiError && (
// 				<div className="mt-4 p-2 bg-red-100 text-red-700 border border-red-300 rounded">
// 					{apiError}
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// // Função auxiliar para capitalizar a primeira letra das palavras
// const capitalizeFirstLetter = (string) => {
// 	return (
// 		string.charAt(0).toUpperCase() +
// 		string
// 			.slice(1)
// 			.replace(/([A-Z])/g, " $1")
// 			.trim()
// 	);
// };

// // Adicione a validação das props
// LeadForm.propTypes = {
// 	onClose: PropTypes.func.isRequired,
// 	refreshLeads: PropTypes.func,
// };

// export default LeadForm;

import React, { useState } from "react";
import PropTypes from "prop-types";
import { createLead } from "../services/LeadServices";

const LeadForm = ({ onClose, refreshLeads }) => {
	const [lead, setLead] = useState({
		nome: "",
		cpf: "",
		email: "",
		telefone: "",
		rua: "",
		bairro: "",
		numero: "",
		complemento: "",
		cep: "",
		cidade: "",
		estado: "",
	});

	const [errors, setErrors] = useState({});
	const [apiError, setApiError] = useState(""); // Adicionando estado para mensagens de erro da API

	const handleChange = (e) => {
		setLead({ ...lead, [e.target.name]: e.target.value });
	};

	const validateForm = () => {
		const newErrors = {};
		for (const key in lead) {
			if (!lead[key]) {
				newErrors[key] = "Este campo é obrigatório";
			}
		}
		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		if (!validateForm()) {
			return;
		}
		try {
			setApiError(""); // Limpar mensagens de erro da API
			await createLead(lead);
			if (refreshLeads) refreshLeads();
			alert("Lead cadastrado com sucesso!");
			onClose(); // Fechar o formulário após o envio
		} catch (error) {
			console.error("Failed to create lead:", error);
			if (error.response && error.response.data) {
				setApiError(
					error.response.data.resposta || "Erro ao cadastrar o lead."
				);
			} else {
				setApiError("Erro ao cadastrar o lead.");
			}
		}
	};

	return (
		<div className="p-6 bg-white rounded-lg shadow-md max-w-lg mx-auto">
			<h2 className="text-2xl font-semibold mb-4">Cadastrar Lead</h2>
			<form onSubmit={handleSubmit} className="space-y-4">
				<div className="grid grid-cols-1 gap-4 md:grid-cols-2">
					{Object.keys(lead).map((key) => (
						<div key={key} className="relative">
							<input
								type={key === "email" ? "email" : "text"}
								name={key}
								value={lead[key]}
								onChange={handleChange}
								placeholder={capitalizeFirstLetter(key)}
								className={`w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${
									errors[key] ? "border-red-500" : ""
								}`}
							/>
							{errors[key] && (
								<span className="text-red-500 text-sm mt-1">{errors[key]}</span>
							)}
						</div>
					))}
				</div>
				{apiError && (
					<div className="text-red-500 text-sm mt-4">{apiError}</div>
				)}{" "}
				{/* Exibindo mensagens de erro da API */}
				<div className="flex justify-end space-x-4 mt-4">
					<button
						type="submit"
						className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
					>
						Cadastrar
					</button>
					<button
						type="button"
						onClick={onClose}
						className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-red-400"
					>
						Cancelar
					</button>
				</div>
			</form>
		</div>
	);
};

// Função auxiliar para capitalizar a primeira letra das palavras
const capitalizeFirstLetter = (string) => {
	return (
		string.charAt(0).toUpperCase() +
		string
			.slice(1)
			.replace(/([A-Z])/g, " $1")
			.trim()
	);
};

// Adicione a validação das props
LeadForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	refreshLeads: PropTypes.func,
};

export default LeadForm;
