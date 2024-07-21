import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
	return (
		<footer className="bg-gray-800 text-white py-8">
			<div className="container mx-auto px-4" id="faq">
				<div className="flex flex-wrap justify-between items-center">
					<div className="w-full md:w-1/3 mb-4 md:mb-0">
						<h2 className="text-xl font-bold">Sobre Nós</h2>
						<p className="mt-2">Especializada em gerenciamento de Leads.</p>
					</div>
					<div className="w-full md:w-1/3 mb-4 md:mb-0">
						<h2 className="text-xl font-bold">Links Rápidos</h2>
						<ul className="mt-2">
							<li className="mt-1">
								<a href="#" className="hover:underline">
									Home
								</a>
							</li>
							<li className="mt-1">
								<a href="#" className="hover:underline">
									Serviços
								</a>
							</li>
							<li className="mt-1">
								<a href="#" className="hover:underline">
									Sobre
								</a>
							</li>
							<li className="mt-1">
								<a href="#" className="hover:underline">
									Contato
								</a>
							</li>
						</ul>
					</div>
					<div className="w-full md:w-1/3">
						<h2 className="text-xl font-bold">Contato</h2>
						<p className="mt-2">Email: contato@exemplo.com</p>
						<p className="mt-1">Telefone: (99) 99999-9999</p>
						<div className="flex mt-4">
							<a href="#" className="mr-4 hover:text-gray-400">
								<FaFacebook size="24" />
							</a>
							<a href="#" className="mr-4 hover:text-gray-400">
								<FaTwitter size="24" />
							</a>
							<a href="#" className="mr-4 hover:text-gray-400">
								<FaInstagram size="24" />
							</a>
							<a href="#" className="hover:text-gray-400">
								<FaLinkedin size="24" />
							</a>
						</div>
					</div>
				</div>
				<div className="text-center mt-8">
					<p>
						&copy; {new Date().getFullYear()} ForLeads. Todos os direitos
						reservados.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
