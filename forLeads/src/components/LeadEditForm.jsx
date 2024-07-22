// // src/components/LeadEditForm.jsx

// import React, { useState, useEffect } from "react";
// import PropTypes from "prop-types";
// import { updateLead } from "../services/LeadServices";

// const LeadEditForm = ({ lead, onClose, refreshLeads }) => {
// 	const [formData, setFormData] = useState({});

// 	useEffect(() => {
// 		// Initialize formData with lead data
// 		setFormData({
// 			...lead,
// 		});
// 	}, [lead]);

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setFormData((prevData) => ({
// 			...prevData,
// 			[name]: value,
// 		}));
// 	};

// 	const handleSubmit = async (e) => {
// 		e.preventDefault();

// 		try {
// 			// Make sure to include the ID in the URL
// 			await updateLead(lead.id, formData);
// 			refreshLeads();
// 			onClose();
// 		} catch (error) {
// 			console.error("Failed to update lead:", error);
// 		}
// 	};

// 	return (
// 		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
// 			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
// 				<h2 className="text-xl font-semibold mb-4">Edit Lead</h2>
// 				<form onSubmit={handleSubmit}>
// 					{/* Form fields */}
// 					<div className="mb-4">
// 						<label
// 							htmlFor="nome"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Nome
// 						</label>
// 						<input
// 							type="text"
// 							id="nome"
// 							name="nome"
// 							value={formData.nome || ""}
// 							onChange={handleChange}
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
// 							required
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="email"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Email
// 						</label>
// 						<input
// 							type="email"
// 							id="email"
// 							name="email"
// 							value={formData.email || ""}
// 							onChange={handleChange}
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
// 							required
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="telefone"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							Telefone
// 						</label>
// 						<input
// 							type="text"
// 							id="telefone"
// 							name="telefone"
// 							value={formData.telefone || ""}
// 							onChange={handleChange}
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
// 							required
// 						/>
// 					</div>
// 					{/* Other form fields... */}
// 					<div className="mb-4">
// 						<label
// 							htmlFor="cep"
// 							className="block text-sm font-medium text-gray-700"
// 						>
// 							CEP
// 						</label>
// 						<input
// 							type="text"
// 							id="cep"
// 							name="cep"
// 							value={formData.cep || ""}
// 							onChange={handleChange}
// 							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
// 							required
// 						/>
// 					</div>
// 					{/* Add other fields similarly */}
// 					<div className="flex justify-end">
// 						<button
// 							type="submit"
// 							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
// 						>
// 							Save
// 						</button>
// 						<button
// 							type="button"
// 							onClick={onClose}
// 							className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
// 						>
// 							Cancel
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// LeadEditForm.propTypes = {
// 	lead: PropTypes.shape({
// 		id: PropTypes.number.isRequired,
// 		nome: PropTypes.string.isRequired,
// 		email: PropTypes.string.isRequired,
// 		telefone: PropTypes.string.isRequired,
// 		// Include other fields as needed
// 	}).isRequired,
// 	onClose: PropTypes.func.isRequired,
// 	refreshLeads: PropTypes.func.isRequired,
// };

// export default LeadEditForm;

// src/components/LeadEditForm.jsx

import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import { updateLead } from "../services/LeadServices";

const LeadEditForm = ({ lead, onClose, refreshLeads }) => {
	const [formData, setFormData] = useState({});

	useEffect(() => {
		// Initialize formData with lead data
		setFormData({
			...lead,
		});
	}, [lead]);

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			// Make sure to include the ID in the URL
			await updateLead(lead.id, formData);
			refreshLeads();
			onClose();
		} catch (error) {
			console.error("Failed to update lead:", error);
		}
	};

	return (
		<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
			<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
				<h2 className="text-xl font-semibold mb-4">Edit Lead</h2>
				<form onSubmit={handleSubmit}>
					{/* Form fields */}
					<div className="mb-4">
						<label
							htmlFor="nome"
							className="block text-sm font-medium text-gray-700"
						>
							Nome
						</label>
						<input
							type="text"
							id="nome"
							name="nome"
							value={formData.nome || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="email"
							className="block text-sm font-medium text-gray-700"
						>
							Email
						</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="telefone"
							className="block text-sm font-medium text-gray-700"
						>
							Telefone
						</label>
						<input
							type="text"
							id="telefone"
							name="telefone"
							value={formData.telefone || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="rua"
							className="block text-sm font-medium text-gray-700"
						>
							Rua
						</label>
						<input
							type="text"
							id="rua"
							name="rua"
							value={formData.rua || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="bairro"
							className="block text-sm font-medium text-gray-700"
						>
							Bairro
						</label>
						<input
							type="text"
							id="bairro"
							name="bairro"
							value={formData.bairro || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="numero"
							className="block text-sm font-medium text-gray-700"
						>
							Número
						</label>
						<input
							type="text"
							id="numero"
							name="numero"
							value={formData.numero || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="complemento"
							className="block text-sm font-medium text-gray-700"
						>
							Complemento
						</label>
						<input
							type="text"
							id="complemento"
							name="complemento"
							value={formData.complemento || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="cep"
							className="block text-sm font-medium text-gray-700"
						>
							CEP
						</label>
						<input
							type="text"
							id="cep"
							name="cep"
							value={formData.cep || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="cidade"
							className="block text-sm font-medium text-gray-700"
						>
							Cidade
						</label>
						<input
							type="text"
							id="cidade"
							name="cidade"
							value={formData.cidade || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="estado"
							className="block text-sm font-medium text-gray-700"
						>
							Estado
						</label>
						<input
							type="text"
							id="estado"
							name="estado"
							value={formData.estado || ""}
							onChange={handleChange}
							className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm"
							required
						/>
					</div>
					<div className="flex justify-end">
						<button
							type="submit"
							className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
						>
							Save
						</button>
						<button
							type="button"
							onClick={onClose}
							className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
						>
							Cancel
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

LeadEditForm.propTypes = {
	lead: PropTypes.shape({
		id: PropTypes.number.isRequired,
		nome: PropTypes.string.isRequired,
		email: PropTypes.string.isRequired,
		telefone: PropTypes.string.isRequired,
		rua: PropTypes.string.isRequired,
		bairro: PropTypes.string.isRequired,
		numero: PropTypes.string.isRequired,
		complemento: PropTypes.string,
		cep: PropTypes.string.isRequired,
		cidade: PropTypes.string.isRequired,
		estado: PropTypes.string.isRequired,
	}).isRequired,
	onClose: PropTypes.func.isRequired,
	refreshLeads: PropTypes.func.isRequired,
};

export default LeadEditForm;
