// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import LeadEditForm from "./LeadEditForm";
// import editIcon from "../assets/icons/iconseditar.png"; // Caminho para o ícone de edição
// import viewIcon from "../assets/icons/iconsvisualizar.png"; // Caminho para o ícone de visualizar

// const LeadList = ({ leads }) => {
// 	const [editingLead, setEditingLead] = useState(null);
// 	const [viewingLead, setViewingLead] = useState(null);

// 	const handleEditClick = (lead) => {
// 		setEditingLead(lead);
// 	};

// 	const handleViewClick = (lead) => {
// 		setViewingLead(lead);
// 	};

// 	const handleCloseEditForm = () => {
// 		setEditingLead(null);
// 	};

// 	const handleCloseViewDetails = () => {
// 		setViewingLead(null);
// 	};

// 	return (
// 		<div className="overflow-x-auto">
// 			{editingLead && (
// 				<LeadEditForm
// 					lead={editingLead}
// 					onClose={handleCloseEditForm}
// 					refreshLeads={() => {}}
// 				/>
// 			)}
// 			{viewingLead && (
// 				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
// 					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
// 						<h2 className="text-xl font-semibold mb-4">Visualizar Lead</h2>
// 						<div className="mb-4">
// 							<strong>Nome:</strong> {viewingLead.nome}
// 						</div>
// 						<div className="mb-4">
// 							<strong>CPF:</strong> {viewingLead.cpf}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Email:</strong> {viewingLead.email}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Telefone:</strong> {viewingLead.telefone}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Rua:</strong> {viewingLead.rua}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Bairro:</strong> {viewingLead.bairro}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Número:</strong> {viewingLead.numero}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Complemento:</strong> {viewingLead.complemento}
// 						</div>
// 						<div className="mb-4">
// 							<strong>CEP:</strong> {viewingLead.cep}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Cidade:</strong> {viewingLead.cidade}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Estado:</strong> {viewingLead.estado}
// 						</div>
// 						<div className="flex justify-end">
// 							<button
// 								type="button"
// 								onClick={handleCloseViewDetails}
// 								className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
// 							>
// 								Fechar
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 			<table className="min-w-full divide-y divide-gray-200">
// 				<thead className="bg-gray-50">
// 					<tr>
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Nome
// 						</th>
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Email
// 						</th>
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Telefone
// 						</th>
// 						{/* Add other table headers here */}
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Ações
// 						</th>
// 					</tr>
// 				</thead>
// 				<tbody className="bg-white divide-y divide-gray-200">
// 					{leads.map((lead) => (
// 						<tr key={lead.cpf}>
// 							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// 								{lead.nome}
// 							</td>
// 							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// 								{lead.email}
// 							</td>
// 							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// 								{lead.telefone}
// 							</td>
// 							{/* Add other table cells here */}
// 							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// 								<button onClick={() => handleEditClick(lead)}>
// 									<img src={editIcon} alt="Edit" className="h-5 w-5" />
// 								</button>
// 								<button onClick={() => handleViewClick(lead)} className="ml-2">
// 									<img src={viewIcon} alt="View" className="h-5 w-5" />
// 								</button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// LeadList.propTypes = {
// 	leads: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			nome: PropTypes.string,
// 			cpf: PropTypes.string,
// 			email: PropTypes.string,
// 			telefone: PropTypes.string,
// 			rua: PropTypes.string,
// 			bairro: PropTypes.string,
// 			numero: PropTypes.string,
// 			complemento: PropTypes.string,
// 			cep: PropTypes.string,
// 			cidade: PropTypes.string,
// 			estado: PropTypes.string,
// 			dataRealizacao: PropTypes.string,
// 		})
// 	).isRequired,
// };

// export default LeadList;

// src/components/LeadList.jsx
// src/components/LeadList.jsx

// import React, { useState } from "react";
// import PropTypes from "prop-types";
// import LeadEditForm from "./LeadEditForm";
// import editIcon from "../assets/icons/iconseditar.png"; // Caminho para o ícone de edição
// import viewIcon from "../assets/icons/iconsvisualizar.png"; // Caminho para o ícone de visualizar
// import deleteIcon from "../assets/icons/iconsdelete.png";
// import { deleteLead } from "../services/LeadServices"; // Importar o serviço de deletar

// const LeadList = ({ leads, refreshLeads }) => {
// 	const [editingLead, setEditingLead] = useState(null);
// 	const [viewingLead, setViewingLead] = useState(null);
// 	const [deletingLead, setDeletingLead] = useState(null);

// 	const handleEditClick = (lead) => {
// 		setEditingLead(lead);
// 	};

// 	const handleViewClick = (lead) => {
// 		setViewingLead(lead);
// 	};

// 	const handleCloseEditForm = () => {
// 		setEditingLead(null);
// 	};

// 	const handleCloseViewDetails = () => {
// 		setViewingLead(null);
// 	};

// 	const handleDeleteClick = (lead) => {
// 		setDeletingLead(lead);
// 	};

// 	const confirmDelete = async () => {
// 		if (deletingLead) {
// 			try {
// 				await deleteLead(deletingLead.id); // Chamar a função de deletar
// 				refreshLeads(); // Atualizar a lista de leads após a exclusão
// 				setDeletingLead(null);
// 			} catch (error) {
// 				console.error("Failed to delete lead:", error); // Somente logar erros
// 			}
// 		}
// 	};

// 	const cancelDelete = () => {
// 		setDeletingLead(null);
// 	};

// 	return (
// 		<div className="overflow-x-auto">
// 			{editingLead && (
// 				<LeadEditForm
// 					lead={editingLead}
// 					onClose={handleCloseEditForm}
// 					refreshLeads={refreshLeads} // Passar refreshLeads para atualizar a lista
// 				/>
// 			)}
// 			{viewingLead && (
// 				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
// 					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
// 						<h2 className="text-xl font-semibold mb-4">Visualizar Lead</h2>
// 						<div className="mb-4">
// 							<strong>Nome:</strong> {viewingLead.nome}
// 						</div>
// 						<div className="mb-4">
// 							<strong>CPF:</strong> {viewingLead.cpf}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Email:</strong> {viewingLead.email}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Telefone:</strong> {viewingLead.telefone}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Rua:</strong> {viewingLead.rua}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Bairro:</strong> {viewingLead.bairro}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Número:</strong> {viewingLead.numero}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Complemento:</strong> {viewingLead.complemento}
// 						</div>
// 						<div className="mb-4">
// 							<strong>CEP:</strong> {viewingLead.cep}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Cidade:</strong> {viewingLead.cidade}
// 						</div>
// 						<div className="mb-4">
// 							<strong>Estado:</strong> {viewingLead.estado}
// 						</div>
// 						<div className="flex justify-end">
// 							<button
// 								type="button"
// 								onClick={handleCloseViewDetails}
// 								className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
// 							>
// 								Fechar
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 			{deletingLead && (
// 				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
// 					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
// 						<h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
// 						<p>
// 							Você tem certeza que deseja excluir o lead {deletingLead.nome}?
// 						</p>
// 						<div className="flex justify-end mt-4">
// 							<button
// 								type="button"
// 								onClick={confirmDelete}
// 								className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
// 							>
// 								Confirmar
// 							</button>
// 							<button
// 								type="button"
// 								onClick={cancelDelete}
// 								className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
// 							>
// 								Cancelar
// 							</button>
// 						</div>
// 					</div>
// 				</div>
// 			)}
// 			<table className="min-w-full divide-y divide-gray-200">
// 				<thead className="bg-gray-50">
// 					<tr>
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Nome
// 						</th>
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Email
// 						</th>
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Telefone
// 						</th>
// 						{/* Add other table headers here */}
// 						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
// 							Ações
// 						</th>
// 					</tr>
// 				</thead>
// 				<tbody className="bg-white divide-y divide-gray-200">
// 					{leads.map((lead) => (
// 						<tr key={lead.id}>
// 							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
// 								{lead.nome}
// 							</td>
// 							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// 								{lead.email}
// 							</td>
// 							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// 								{lead.telefone}
// 							</td>
// 							{/* Add other table cells here */}
// 							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
// 								<button onClick={() => handleEditClick(lead)}>
// 									<img src={editIcon} alt="Edit" className="h-5 w-5" />
// 								</button>
// 								<button onClick={() => handleViewClick(lead)} className="ml-2">
// 									<img src={viewIcon} alt="View" className="h-5 w-5" />
// 								</button>
// 								<button
// 									onClick={() => handleDeleteClick(lead)}
// 									className="ml-2"
// 								>
// 									<img src={deleteIcon} alt="Delete" className="h-5 w-5" />
// 								</button>
// 							</td>
// 						</tr>
// 					))}
// 				</tbody>
// 			</table>
// 		</div>
// 	);
// };

// LeadList.propTypes = {
// 	leads: PropTypes.arrayOf(
// 		PropTypes.shape({
// 			id: PropTypes.number.isRequired,
// 			nome: PropTypes.string.isRequired,
// 			cpf: PropTypes.string.isRequired,
// 			email: PropTypes.string.isRequired,
// 			telefone: PropTypes.string.isRequired,
// 			rua: PropTypes.string.isRequired,
// 			bairro: PropTypes.string.isRequired,
// 			numero: PropTypes.string.isRequired,
// 			complemento: PropTypes.string.isRequired,
// 			cep: PropTypes.string.isRequired,
// 			cidade: PropTypes.string.isRequired,
// 			estado: PropTypes.string.isRequired,
// 			dataRealizacao: PropTypes.string,
// 		})
// 	).isRequired,
// 	refreshLeads: PropTypes.func.isRequired,
// };

// export default LeadList;

import React, { useState } from "react";
import PropTypes from "prop-types";
import LeadEditForm from "./LeadEditForm";
import editIcon from "../assets/icons/iconseditar.png"; // Caminho para o ícone de edição
import viewIcon from "../assets/icons/iconsvisualizar.png"; // Caminho para o ícone de visualizar
import deleteIcon from "../assets/icons/iconsdelete.png";
import { deleteLead } from "../services/LeadServices"; // Importar o serviço de deletar

const LeadList = ({ leads, refreshLeads }) => {
	const [editingLead, setEditingLead] = useState(null);
	const [viewingLead, setViewingLead] = useState(null);
	const [deletingLead, setDeletingLead] = useState(null);
	const [deletedLeads, setDeletedLeads] = useState(new Set()); // Para armazenar os IDs dos leads deletados

	const handleEditClick = (lead) => {
		setEditingLead(lead);
	};

	const handleViewClick = (lead) => {
		setViewingLead(lead);
	};

	const handleCloseEditForm = () => {
		setEditingLead(null);
	};

	const handleCloseViewDetails = () => {
		setViewingLead(null);
	};

	const handleDeleteClick = (lead) => {
		setDeletingLead(lead);
	};

	const confirmDelete = async () => {
		if (deletingLead) {
			try {
				await deleteLead(deletingLead.id); // Chamar a função de deletar
				setDeletedLeads((prev) => new Set(prev).add(deletingLead.id)); // Marcar o lead como deletado
				refreshLeads(); // Atualizar a lista de leads após a exclusão
				setDeletingLead(null);
			} catch (error) {
				console.error("Failed to delete lead:", error); // Somente logar erros
			}
		}
	};

	const cancelDelete = () => {
		setDeletingLead(null);
	};

	return (
		<div className="overflow-x-auto">
			{editingLead && (
				<LeadEditForm
					lead={editingLead}
					onClose={handleCloseEditForm}
					refreshLeads={refreshLeads} // Passar refreshLeads para atualizar a lista
				/>
			)}
			{viewingLead && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-lg">
						<h2 className="text-xl font-semibold mb-4">Visualizar Lead</h2>
						<div className="mb-4">
							<strong>Nome:</strong> {viewingLead.nome}
						</div>
						<div className="mb-4">
							<strong>CPF:</strong> {viewingLead.cpf}
						</div>
						<div className="mb-4">
							<strong>Email:</strong> {viewingLead.email}
						</div>
						<div className="mb-4">
							<strong>Telefone:</strong> {viewingLead.telefone}
						</div>
						<div className="mb-4">
							<strong>Rua:</strong> {viewingLead.rua}
						</div>
						<div className="mb-4">
							<strong>Bairro:</strong> {viewingLead.bairro}
						</div>
						<div className="mb-4">
							<strong>Número:</strong> {viewingLead.numero}
						</div>
						<div className="mb-4">
							<strong>Complemento:</strong> {viewingLead.complemento}
						</div>
						<div className="mb-4">
							<strong>CEP:</strong> {viewingLead.cep}
						</div>
						<div className="mb-4">
							<strong>Cidade:</strong> {viewingLead.cidade}
						</div>
						<div className="mb-4">
							<strong>Estado:</strong> {viewingLead.estado}
						</div>
						<div className="flex justify-end">
							<button
								type="button"
								onClick={handleCloseViewDetails}
								className="bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
							>
								Fechar
							</button>
						</div>
					</div>
				</div>
			)}
			{deletingLead && (
				<div className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
					<div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
						<h2 className="text-xl font-semibold mb-4">Confirmar Exclusão</h2>
						<p>
							Você tem certeza que deseja excluir o lead {deletingLead.nome}?
						</p>
						<div className="flex justify-end mt-4">
							<button
								type="button"
								onClick={confirmDelete}
								className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
							>
								Confirmar
							</button>
							<button
								type="button"
								onClick={cancelDelete}
								className="ml-2 bg-gray-300 text-gray-700 px-4 py-2 rounded hover:bg-gray-400"
							>
								Cancelar
							</button>
						</div>
					</div>
				</div>
			)}
			<table className="min-w-full divide-y divide-gray-200">
				<thead className="bg-gray-50">
					<tr>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Nome
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Email
						</th>
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Telefone
						</th>
						{/* Add other table headers here */}
						<th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
							Ações
						</th>
					</tr>
				</thead>
				<tbody className="bg-white divide-y divide-gray-200">
					{leads.map((lead) => (
						<tr
							key={lead.id}
							className={deletedLeads.has(lead.id) ? "bg-red-100" : ""}
						>
							<td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
								{lead.nome}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{lead.email}
							</td>
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								{lead.telefone}
							</td>
							{/* Add other table cells here */}
							<td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
								<button onClick={() => handleEditClick(lead)}>
									<img src={editIcon} alt="Edit" className="h-5 w-5" />
								</button>
								<button onClick={() => handleViewClick(lead)} className="ml-2">
									<img src={viewIcon} alt="View" className="h-5 w-5" />
								</button>
								<button
									onClick={() => handleDeleteClick(lead)}
									className="ml-2"
								>
									<img src={deleteIcon} alt="Delete" className="h-5 w-5" />
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

LeadList.propTypes = {
	leads: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.number.isRequired,
			nome: PropTypes.string.isRequired,
			cpf: PropTypes.string.isRequired,
			email: PropTypes.string.isRequired,
			telefone: PropTypes.string.isRequired,
			rua: PropTypes.string.isRequired,
			bairro: PropTypes.string.isRequired,
			numero: PropTypes.string.isRequired,
			complemento: PropTypes.string.isRequired,
			cep: PropTypes.string.isRequired,
			cidade: PropTypes.string.isRequired,
			estado: PropTypes.string.isRequired,
			dataRealizacao: PropTypes.string,
		})
	).isRequired,
	refreshLeads: PropTypes.func.isRequired,
};

export default LeadList;
