import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import ParticlesBackground from "./ParticlesBackground";

const NotFoundPage: React.FC = () => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ duration: 0.6 }}
			className="flex flex-col items-center justify-center min-h-screen bg-background text-center px-4 relative"
		>
			{/* Background particles */}
			<ParticlesBackground />

			{/* Gradient Overlays */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
			</div>

			{/* Content */}
			<div className="z-10 relative">
				<motion.h1
					className="text-9xl font-black text-electric-blue mb-4"
					initial={{ scale: 0.9 }}
					animate={{ scale: 1 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					404
				</motion.h1>

				<motion.p
					className="text-lg text-white/70 mb-8"
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.2, duration: 0.5 }}
				>
					O ne! Toks puslapis neegzistuoja.
				</motion.p>

				<Link to="/" className="button-primary">
					Grįžti į pagrindinį
				</Link>
			</div>
		</motion.div>
	);
};

export default NotFoundPage;
