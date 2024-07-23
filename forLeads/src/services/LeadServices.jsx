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
			return response.data.retorno;
		} else {
			throw new Error(response.data.resposta || "Erro ao buscar leads");
		}
	} catch (error) {
		console.error("Error fetching leads:", error);
		throw error;
	}
};
export const verificarCpf = async (cpf) => {
	try {
		const response = await fetch(
			`https://localhost:44369/Leads/verificarCpfLeads?cpf=${cpf}`,
			{
				method: "GET",
				headers: {
					"Content-Type": "application/json",
					...getAuthHeaders(),
				},
			}
		);
		const data = await response.json();

		return {
			existe: data.codigo === 640,
			mensagem: data.resposta,
		};
	} catch (error) {
		console.error("Failed to verify CPF:", error);
		return { existe: false, mensagem: "Erro ao verificar CPF" };
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
		const result = await response.json();

		if (response.ok && result.codigo === 200) {
			return { sucesso: true, mensagem: result.resposta };
		} else {
			return {
				sucesso: false,
				mensagem: result.resposta || "Erro ao criar lead",
			};
		}
	} catch (error) {
		console.error("Failed to create lead:", error);
		return { sucesso: false, mensagem: "Erro ao criar lead" };
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
		const errorText = await response.text();
		throw new Error(`Failed to update lead: ${errorText}`);
	}
	return response.json();
};
