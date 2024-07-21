import React from "react";
import { Carousel } from "flowbite-react";
import feedbackImg1 from "../assets/feedback.png";
import feedbackImg2 from "../assets/feedback.png";
import feedbackImg3 from "../assets/feedback.png";
import feedbackImg4 from "../assets/feedback.png";
import feedbackImg5 from "../assets/feedback.png";

const Feedback = () => {
	return (
		<div className=" py-16" id="feedback">
			<div className="px-4 lg:px-14 max-w-screen-2xl mx-auto">
				<h2 className="text-3xl font-semibold text-neutralDGrey mb-8 text-center">
					O que nossos clientes dizem
				</h2>
				<div className="grid h-56 grid-cols-2 gap-4 sm:h-64 xl:h-80 2xl:h-96">
					<Carousel>
						<img
							src={feedbackImg1}
							alt="Feedback 1"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg2}
							alt="Feedback 2"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg3}
							alt="Feedback 3"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg4}
							alt="Feedback 4"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg5}
							alt="Feedback 5"
							className="object-cover w-full h-full"
						/>
					</Carousel>
					<Carousel indicators={false}>
						<img
							src={feedbackImg1}
							alt="Feedback 1"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg2}
							alt="Feedback 2"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg3}
							alt="Feedback 3"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg4}
							alt="Feedback 4"
							className="object-cover w-full h-full"
						/>
						<img
							src={feedbackImg5}
							alt="Feedback 5"
							className="object-cover w-full h-full"
						/>
					</Carousel>
				</div>
			</div>
		</div>
	);
};

export default Feedback;
