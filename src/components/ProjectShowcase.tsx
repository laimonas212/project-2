import { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";

interface ProjectShowcaseProps {
	images?: {
		mobile: string;
		tablet: string;
		desktop: string;
	};
}

export default function ProjectShowcase({ images }: ProjectShowcaseProps) {
	const [lightboxImg, setLightboxImg] = useState<string | null>(null);

	return (
		<>
			<div className="flex justify-center items-end w-full m-auto my-6 sm:my-20">
				{/* Mobile */}
				<motion.div
					initial={{ opacity: 0, x: -30 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0 }}
					className="relative z-10 [perspective:800px] cursor-pointer"
					onClick={() => setLightboxImg(images?.mobile || null)}
				>
					<div className="[transform:rotateY(20deg)_rotateX(4deg)] h-full">
						<img
							src={images?.mobile}
							loading="lazy"
							className="h-full w-full object-cover scale-[0.9] shadow-2xl rounded-xl hover:scale-[0.91] transition-transform duration-300"
						/>
					</div>
				</motion.div>

				{/* Tablet */}
				<motion.div
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					transition={{ duration: 0.6, delay: 0.1 }}
					className="relative z-20 -ml-8 [perspective:800px] scale-95 md:scale-100 cursor-pointer"
					onClick={() => setLightboxImg(images?.tablet || null)}
				>
					<div className="shadow-2xl [transform:rotateY(20deg)_rotateX(3deg)] h-full">
						<img
							src={images?.tablet}
							loading="lazy"
							className="h-full w-full object-cover rounded-xl hover:scale-[1.01] transition-transform duration-300"
						/>
					</div>
				</motion.div>

				{/* Desktop */}
				<motion.div
					initial={{ opacity: 0, x: 70 }}
					whileInView={{ opacity: 1, x: 0 }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="relative z-30 -ml-8 [perspective:800px] cursor-pointer"
					onClick={() => setLightboxImg(images?.desktop || null)}
				>
					<div className="shadow-2xl [transform:rotateY(20deg)_rotateX(2deg)] h-full">
						<img
							src={images?.desktop}
							loading="lazy"
							className="h-full w-full object-cover rounded-xl hover:scale-[1.01] transition-transform duration-300"
						/>
					</div>
				</motion.div>
			</div>

			{/* Lightbox */}
			{lightboxImg && (
				<div
					className="fixed inset-0 bg-black/80 flex items-center justify-center z-[9999]"
					onClick={() => setLightboxImg(null)} // uždaro paspaudus foną
				>
					<div
						className="relative"
						onClick={(e) => e.stopPropagation()} // stabdo bubble ant foto
					>
						{/* Close button on image */}
						<button
							className="absolute top-2 right-2 bg-black/60 hover:bg-black/80 text-white p-1.5 rounded-full transition"
							onClick={() => setLightboxImg(null)}
						>
							<X size={16} />
						</button>

						<img
							src={lightboxImg}
							className="max-h-[90vh] max-w-[90vw] rounded-xl shadow-xl"
						/>
					</div>
				</div>
			)}
		</>
	);
}
