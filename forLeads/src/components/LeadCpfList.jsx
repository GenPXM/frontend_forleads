import React, { useState } from "react";
import { getLeadByCpf } from "../services/LeadServices";

const LeadSearch = () => {
	const [cpf, setCpf] = useState("");
	const [lead, setLead] = useState(null);

	const handleSearch = async (e) => {
		e.preventDefault();
		const result = await getLeadByCpf(cpf);
		setLead(result);
	};

	return (
		<div className="mb-4">
			<form onSubmit={handleSearch}>
				<input
					type="text"
					value={cpf}
					onChange={(e) => setCpf(e.target.value)}
					placeholder="Buscar por CPF"
					className="border p-2 mr-2"
				/>
				<button type="submit" className="bg-blue-500 text-white p-2 rounded">
					Buscar
				</button>
			</form>
			{lead && (
				<div>
					<h3>Resultado da busca:</h3>
					<p>
						{lead.nome} - {lead.email}
					</p>
				</div>
			)}
		</div>
	);
};

export default LeadSearch;
