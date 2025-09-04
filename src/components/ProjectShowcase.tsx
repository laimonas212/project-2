import { motion } from "framer-motion";

interface ProjectShowcaseProps {
	images?: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
}

export default function ProjectShowcase({ images }: ProjectShowcaseProps) {
	return (
		<div className="flex justify-center items-end w-full m-auto my-6 sm:my-20">
			{/* Mobile */}
			<motion.div
				initial={{ opacity: 0, x: -30 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0 }}
				className="relative z-10 [perspective:800px] group"
			>
				<div className="transition-transform [transform:rotateY(20deg)_rotateX(4deg)] h-full">
					<img
						src={images?.mobile}
						loading="lazy"
						className="h-full w-full object-cover scale-[0.9] shadow-2xl rounded-xl"
					/>
				</div>
			</motion.div>

			{/* Tablet */}
			<motion.div
				initial={{ opacity: 0, scale: 0.8 }}
				whileInView={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.6, delay: 0.1 }}
				className="relative z-20 -ml-8 [perspective:800px] scale-95 md:scale-100 group"
			>
				<div className="shadow-2xl transition-transform [transform:rotateY(20deg)_rotateX(3deg)] h-full">
					<img
						src={images?.tablet}
						loading="lazy"
						className="h-full w-full object-cover rounded-xl"
					/>
				</div>
			</motion.div>

			{/* Desktop */}
			<motion.div
				initial={{ opacity: 0, x: 70 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				className="relative z-30 -ml-8 [perspective:800px] group"
			>
				<div className="shadow-2xl transition-transform [transform:rotateY(20deg)_rotateX(2deg)] h-full">
					<img
						src={images?.desktop}
						loading="lazy"
						className="h-full w-full object-cover rounded-xl"
					/>
				</div>
			</motion.div>
		</div>
	);
}
