import axios from "axios";
const getAuthHeaders = () => {
	const token = localStorage.getItem("token");
	return token ? { Authorization: `Bearer ${token}` } : {};
};
export const fetchLeads = async () => {
	try {
		const response = await axios.get(
			"https://localhost:44369/Leads/listarLeads"
		);
		if (response.data.codigo === 200) {
			// Retorna a lista de leads da resposta
			return response.data.retorno;
		} else {
			throw new Error(response.data.resposta || "Erro ao buscar leads");
		}
	} catch (error) {
		console.error("Error fetching leads:", error);
		throw error;
	}
};
export const createLead = async (lead) => {
	try {
		const response = await fetch(
			"https://localhost:44369/Leads/cadastrarLeads",
			{
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					...getAuthHeaders(),
				},
				body: JSON.stringify(lead),
			}
		);
		return await response.json();
	} catch (error) {
		console.error("Failed to create lead:", error);
	}
};

export const deleteLead = async (id) => {
	try {
		await fetch(`https://localhost:44369/Leads/deletarLeads?id=${id}`, {
			method: "DELETE",
			headers: getAuthHeaders(),
		});
	} catch (error) {
		console.error("Failed to delete lead:", error);
	}
};

export const updateLead = async (id, leadData) => {
	const response = await fetch(
		`https://localhost:44369/Leads/atualizarLeads?id=${id}`,
		{
			method: "PUT",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(leadData),
		}
	);
	if (!response.ok) {
		const errorText = await response.text(); // Ler o texto da resposta de erro
		throw new Error(`Failed to update lead: ${errorText}`);
	}
	return response.json();
};
