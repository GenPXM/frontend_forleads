import React from "react";
import { Carousel } from "flowbite-react";
import { Link } from "react-router-dom";
import banner1 from "../assets/banner1.jpg";

const Home = () => {
	return (
		<div className="bg-neutralSilver">
			<div
				className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen"
				id="home"
			>
				<Carousel className="w-full mx-auto">
					<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
						<div className="md:w-1/2">
							<img
								src={banner1}
								alt="Banner 1"
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="md:w-1/2">
							<h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
								Gerando Leads a
								<span className="text-brandPrimary leading-snug">
									{" "}
									mais de 15 anos
								</span>
							</h1>
							<p className="text-neutralGrey text-xl mb-8">
								Gerenciamos os Leads para sua empresa.
							</p>
							<Link
								to="/register"
								className="btn-primary text-xl transition-all duration-300 bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey"
							>
								Cadastre-se
							</Link>
						</div>
					</div>
					<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
						<div className="md:w-1/2">
							<img
								src={banner1}
								alt="Banner 1"
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="md:w-1/2">
							<h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
								Gerando Leads a
								<span className="text-brandPrimary leading-snug">
									{" "}
									mais de 15 anos
								</span>
							</h1>
							<p className="text-neutralGrey  text-xl mb-8">
								Gerenciamos os Leads para sua empresa.
							</p>
							<Link
								to="/register"
								className="btn-primary text-xl transition-all duration-300 bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey"
							>
								Cadastre-se
							</Link>
						</div>
					</div>
					<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-12">
						<div className="md:w-1/2">
							<img
								src={banner1}
								alt="Banner 1"
								className="w-full h-auto object-cover"
							/>
						</div>
						<div className="md:w-1/2">
							<h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
								Gerando Leads a
								<span className="text-brandPrimary leading-snug">
									{" "}
									mais de 15 anos
								</span>
							</h1>
							<p className="text-neutralGrey text-xl mb-8">
								Gerenciamos os Leads para sua empresa.
							</p>
							<Link
								to="/register"
								className="btn-primary text-xl  transition-all duration-300 bg-brandPrimary text-white py-2 px-4 rounded hover:bg-neutralDGrey"
							>
								Cadastre-se
							</Link>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Home;
