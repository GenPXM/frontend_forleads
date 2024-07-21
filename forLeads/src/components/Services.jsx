import React from "react";

const Services = () => {
	const services = [
		{
			id: 1,
			title: "Membros Organizacionais",
			description: "Grandes organizações de vendas diretas",
			image: "./src/assets/icons/mebroIcon.png",
		},
		{
			id: 2,
			title: "Membros Organizacionais",
			description: "Grandes organizações de vendas diretas",
			image: "./src/assets/icons/mebroIcon2.png",
		},
		{
			id: 3,
			title: "Membros Organizacionais",
			description: "Grandes organizações de vendas diretas",
			image: "./src/assets/icons/mebroIcon.png",
		},
	];
	return (
		<div className="md: px-14 px-4 y-16 max-w-screen-2xl mx-auto" id="service">
			<div className="text-center my-8">
				<h2 className="text-4xl text-neutralDGrey font-semibold mb-2">
					Nossos Clientes
				</h2>
				<p className="text-neutralGrey">Alguns de nossos Parceiros!</p>
				<div className="my-12 flex flex-wrap justify-between items-center gap-8">
					<img src="./src/assets/icons/cliente1.png" alt="" />
					<img src="./src/assets/icons/cliente2.png" alt="" />
					<img src="./src/assets/icons/cliente3.png" alt="" />
					<img src="./src/assets/icons/cliente4.png" alt="" />
				</div>
			</div>
			<div className="mt-20 md:w-1/2 mx-auto text-center">
				<h2 className="text-4xl text-neutralDGrey font-semibold mb-3">
					Gerencie todos os seus Leads em um só sistema.
				</h2>
				<p className="text-neutralGrey">Para quem o ForLeads é recomendado?</p>
			</div>
			<div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
				{services.map((service) => (
					<div
						key={service.id}
						className="px-4 py-8 text-center md:w-[300px] mx-auto md:h-80
						rounded-md shadow cursor-pointer hover:-translate-y-5 hover:border-b-4 hover:border-indigo-700 transition-all duration-300
						flex items-center justify-center h-full"
					>
						<div>
							<div className="bg-[#e8f5e9] mb-4 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl">
								<img src={service.image} alt="" className="-ml-5" />
							</div>
							<h4 className="text-2xl font-bold text-neutralDGrey mb-2 px-2 ">
								{service.title}
							</h4>
							<p className="text-sm text-neutralDGrey">{service.description}</p>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Services;
