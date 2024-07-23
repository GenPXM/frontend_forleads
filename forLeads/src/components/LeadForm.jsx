import React, { useState } from "react";
import PropTypes from "prop-types";
import { createLead, verificarCpf } from "../services/LeadServices";

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
	const [apiError, setApiError] = useState("");

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
			setApiError("");

			const cpfCheck = await verificarCpf(lead.cpf);
			if (cpfCheck.existe) {
				setApiError(cpfCheck.mensagem);
				return;
			}

			const result = await createLead(lead);
			if (!result.sucesso) {
				setApiError(result.mensagem || "Erro ao criar lead");
				return;
			}

			if (refreshLeads) refreshLeads();
			alert("Lead cadastrado com sucesso!");
			onClose();
		} catch (error) {
			console.error("Failed to create lead:", error);
			setApiError("Erro ao cadastrar o lead.");
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
				)}
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

const capitalizeFirstLetter = (string) => {
	return (
		string.charAt(0).toUpperCase() +
		string
			.slice(1)
			.replace(/([A-Z])/g, " $1")
			.trim()
	);
};

LeadForm.propTypes = {
	onClose: PropTypes.func.isRequired,
	refreshLeads: PropTypes.func,
};

export default LeadForm;
