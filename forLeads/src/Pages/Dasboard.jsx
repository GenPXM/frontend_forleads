import React, { useState } from "react";
import LeadForm from "../components/LeadForm";
import LeadList from "../components/LeadList";
import { fetchLeads } from "../services/LeadServices";

const Dashboard = () => {
	const [view, setView] = useState("none");
	const [leads, setLeads] = useState([]);
	const [showForm, setShowForm] = useState(false);

	const handleFetchLeads = async () => {
		try {
			const leadsData = await fetchLeads();
			setLeads(leadsData);
		} catch (error) {
			console.error("Error fetching leads:", error);
		}
	};

	const handleAddClick = () => {
		setView("none");
		setShowForm(true);
	};

	const handleListClick = () => {
		handleFetchLeads();
		setView("list");
		setShowForm(false);
	};

	const handleCloseForm = () => {
		setShowForm(false);
	};

	return (
		<div className="min-h-screen bg-gray-100 p-6">
			<div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-md">
				<div className="flex justify-between mb-4">
					<button
						onClick={handleAddClick}
						className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400"
					>
						Cadastrar Leads
					</button>
					<button
						onClick={handleListClick}
						className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-400"
					>
						Listar Leads
					</button>
				</div>

				{showForm && (
					<LeadForm onClose={handleCloseForm} refreshLeads={handleFetchLeads} />
				)}
				{view === "list" && (
					<div className="mt-6">
						<LeadList leads={leads} refreshLeads={handleFetchLeads} />
					</div>
				)}
			</div>
		</div>
	);
};

export default Dashboard;
