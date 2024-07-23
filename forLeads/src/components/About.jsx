import React from "react";
import aboutImg from "../assets/clip-944.png";

const About = () => {
	return (
		<div>
			<div className="px-4 lg:px-14 max-w-screen-2xl mx-auto my-8" id="about">
				<div className="md:w-11/12 mx-auto flex flex-col md:flex-row justify-between items-center gap-12">
					<div>
						<img
							src={aboutImg}
							alt="About Image"
							className="w-full max-w-lg h-auto"
						/>
					</div>
					<div className="md:w-3/5 mx-auto">
						<h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-4/5">
							Esse Texto pode ser uma amostra de todos os benefícios que a
							ForLeads pode gerar
						</h2>
						<p className="md:w-3/4 text-xl text-neutralDGrey mb-8">
							Esse Texto pode ser uma amostra de todos os benefícios que a
							ForLeads pode gerar. Esse Texto pode ser uma amostra de todos os
							benefícios que a ForLeads pode gerar. Esse Texto pode ser uma
							amostra de todos os benefícios que a ForLeads pode gerar.
						</p>
						<button className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:bg-blue-600">
							Saber Mais
						</button>
					</div>
				</div>
			</div>

			<div className="px-4 lg:px-14 max-w-screen-2xl mx-auto bg-neutralSilver py-16">
				<div className="flex flex-col md:flex-row justify-between items-center gap-8">
					<div className="md:w-1/2">
						<h2 className="text-4xl text-neutralDGrey font-semibold mb-4 md:w-2/3">
							Escreva aqui mais coisas
							<br />
							<span>loren ipsun loren ipsun loren </span>
						</h2>
						<p className="text-brandPrimary text-xl ">
							Loren ipsun loren ipsun loren ipsun loren loren ipsun loren
						</p>
					</div>
					<div className="md:w-3/4 mx-auto flex flex-col items-center gap-12 mt-12">
						<div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
							<div className="flex items-center gap-4">
								<img
									src="./src/assets/icons/member.png"
									alt="Membros Icon"
									className="w-35 h-35"
								/>
								<div>
									<h4 className="text-2xl text-neutralDGrey font-semibold">
										8.3245
									</h4>
									<p>Membros</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<img
									src="./src/assets/icons/club2.png"
									alt="Clubes Icon"
									className="w-35 h-35"
								/>
								<div>
									<h4 className="text-2xl text-neutralDGrey font-semibold">
										55.55856
									</h4>
									<p>Clubes</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<img
									src="./src/assets/icons/payment.png"
									alt="Pagamentos Icon"
									className="w-35 h-35"
								/>
								<div>
									<h4 className="text-2xl text-neutralDGrey font-semibold">
										235.2255
									</h4>
									<p>Pagamentos</p>
								</div>
							</div>
							<div className="flex items-center gap-4">
								<img
									src="./src/assets/icons/eventos.png"
									alt="Eventos Icon"
									className="w-12 h-12"
								/>
								<div>
									<h4 className="text-2xl text-neutralDGrey font-semibold">
										10.000
									</h4>
									<p>Eventos</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
