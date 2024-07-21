import React from "react";
import { Carousel } from "flowbite-react";
import banner1 from "../assets/banner1.jpg";
const Home = () => {
	return (
		<div className="bg-neutralSilver">
			<div className="px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen">
				<Carousel className="w-full mx-auto">
					<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between gap-12">
						<div>
							<img src={banner1} alt=""></img>
						</div>
						<div className="md:w-1/2">
							<h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
								Gerando Leads a
								<span className="text-brandPrimary leading-snug">
									mais de 15 anos
								</span>
							</h1>
							<p className="text-neutralGrey text-base mb-8 ">
								Gerenciamos os Leads para sua empresa.
							</p>
							<button className="btn-primary">Cadastre-se</button>
						</div>
					</div>
					<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between gap-12">
						<div>
							<img src={banner1} alt=""></img>
						</div>
						<div className="md:w-1/2">
							<h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
								Gerando Leads a
								<span className="text-brandPrimary leading-snug">
									mais de 15 anos
								</span>
							</h1>
							<p className="text-neutralGrey text-base mb-8 ">
								Gerenciamos os Leads para sua empresa.
							</p>
							<button className="btn-primary">Cadastre-se</button>
						</div>
					</div>
					<div className="my-28 md:my-8 py-12 flex flex-col md:flex-row-reverse  items-center justify-between gap-12">
						<div>
							<img src={banner1} alt=""></img>
						</div>
						<div className="md:w-1/2">
							<h1 className="text-5xl font-semibold mb-4 text-neutralDGrey md:w-3/4 leading-snug">
								Gerando Leads a
								<span className="text-brandPrimary leading-snug">
									mais de 15 anos
								</span>
							</h1>
							<p className="text-neutralGrey text-base mb-8 ">
								Gerenciamos os Leads para sua empresa.
							</p>
							<button className="btn-primary">Cadastre-se</button>
						</div>
					</div>
				</Carousel>
			</div>
		</div>
	);
};

export default Home;
