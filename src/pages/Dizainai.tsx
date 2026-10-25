import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
	X,
	ChevronLeft,
	ChevronRight,
	User,
	ShoppingBag,
	Layers,
	MousePointerClick,
	ArrowUpRight,
	Sparkles,
	Monitor,
	ExternalLink,
	ArrowRight,
} from "lucide-react";
import ReactDOM from "react-dom";
import templates from "../components/Templates";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

interface Template {
	id: number;
	title: string;
	type: "asmeninės svetainės" | "el. parduotuvės";
	images: string[];
	description: string;
	url?: string;
}

type TemplateFilter =
	| "rodyti viską"
	| "asmeninės svetainės"
	| "el. parduotuvės";

interface MobilePreviewProps {
	template: Template;
	index: number;
	onClick: (mode: "image" | "live") => void;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({
	template,
	index,
	onClick,
}) => {
	const isPersonal = template.type === "asmeninės svetainės";

	return (
		<motion.article
			initial={{ opacity: 0, y: 24 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.12 }}
			transition={{ duration: 0.45, delay: Math.min(index * 0.06, 0.3) }}
			className="group h-full min-w-0"
		>
			<div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/10 bg-dark-surface-2 transition-colors duration-300 hover:border-white/20">
				<button
					type="button"
					onClick={() => onClick("image")}
					aria-label={`Peržiūrėti dizainą: ${template.title}`}
					className="relative block w-full shrink-0 overflow-hidden text-left"
				>
					<div className="aspect-[4/3] overflow-hidden bg-black/20">
						<img
							src={template.images[0]}
							alt={`${template.title} - svetainės dizaino pavyzdys`}
							loading="lazy"
							className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.035]"
						/>
					</div>

					<div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
						<span className="flex items-center gap-2 rounded-full border border-white/20 bg-black/50 px-5 py-3 text-sm font-medium text-white backdrop-blur-md">
							<MousePointerClick size={17} />
							Peržiūrėti dizainą
						</span>
					</div>

					<div className="absolute left-4 top-4">
						<span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-black/55 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-md">
							{isPersonal ? (
								<User size={14} />
							) : (
								<ShoppingBag size={14} />
							)}
							{isPersonal
								? "Asmeninė svetainė"
								: "El. parduotuvė"}
						</span>
					</div>

					{template.images.length > 1 && (
						<div className="absolute bottom-4 right-4 rounded-full bg-black/55 px-3 py-1.5 text-xs text-white backdrop-blur-md">
							{template.images.length} vaizdai
						</div>
					)}
				</button>

				<div className="flex flex-1 flex-col p-5 sm:p-6">
					<div className="mb-4">
						<h2 className="mb-2 text-xl font-semibold text-white">
							{template.title}
						</h2>

						<p className="line-clamp-3 min-h-[4.5rem] text-sm leading-relaxed text-white/60">
							{template.description}
						</p>
					</div>

					<div className="mt-auto flex flex-wrap gap-2 pt-2">
						<button
							type="button"
							onClick={() => onClick("image")}
							className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-white/15 px-4 py-2.5 text-sm text-white transition hover:border-white/30 hover:bg-white/5"
						>
							Peržiūrėti
							<ArrowUpRight size={16} />
						</button>

						{template.url && (
							<button
								type="button"
								onClick={() => onClick("live")}
								className="button-primary inline-flex flex-1 items-center justify-center gap-2 rounded-full px-4 py-2.5 text-sm text-white"
							>
								Gyva peržiūra
								<ExternalLink size={15} />
							</button>
						)}
					</div>
				</div>
			</div>
		</motion.article>
	);
};

interface LightboxProps {
	template: Template | null;
	mode: "image" | "live";
	onClose: () => void;
}

const Lightbox: React.FC<LightboxProps> = ({ template, onClose, mode }) => {
	const [currentImageIndex, setCurrentImageIndex] = useState(0);

	useEffect(() => {
		setCurrentImageIndex(0);
	}, [template]);

	useEffect(() => {
		if (!template) return;

		const previousOverflow = document.body.style.overflow;

		const handleKeydown = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();

			if (mode === "image" && e.key === "ArrowRight") {
				setCurrentImageIndex(
					(prev) => (prev + 1) % template.images.length,
				);
			}

			if (mode === "image" && e.key === "ArrowLeft") {
				setCurrentImageIndex(
					(prev) =>
						(prev - 1 + template.images.length) %
						template.images.length,
				);
			}
		};

		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeydown);

		return () => {
			document.body.style.overflow = previousOverflow;
			window.removeEventListener("keydown", handleKeydown);
		};
	}, [template, mode, onClose]);

	if (!template) return null;

	const hasMultipleImages = template.images.length > 1;

	const modalContent = (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{ opacity: 1 }}
			exit={{ opacity: 0 }}
			className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 p-3 backdrop-blur-md sm:p-6"
			onClick={onClose}
			role="dialog"
			aria-modal="true"
			aria-label={`${template.title} peržiūra`}
		>
			<button
				type="button"
				onClick={onClose}
				aria-label="Uždaryti peržiūrą"
				className="absolute right-4 top-4 z-[10001] rounded-full border border-white/15 bg-white/10 p-3 text-white transition hover:bg-white/20 sm:right-6 sm:top-6"
			>
				<X size={22} />
			</button>

			<motion.div
				initial={{ scale: 0.97, y: 10 }}
				animate={{ scale: 1, y: 0 }}
				exit={{ scale: 0.97 }}
				transition={{ duration: 0.2 }}
				className="relative w-full max-w-7xl overflow-hidden rounded-2xl border border-white/10 bg-dark-surface-2 shadow-2xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="flex items-center justify-between gap-4 border-b border-white/10 px-5 py-3">
					<div>
						<p className="font-semibold text-white">
							{template.title}
						</p>
						<p className="text-xs text-white/50">
							{mode === "live"
								? "Veikianti demonstracinė versija"
								: "Dizaino peržiūra"}
						</p>
					</div>

					{mode === "live" && template.url && (
						<a
							href={template.url}
							target="_blank"
							rel="noopener noreferrer"
							className="mr-12 inline-flex items-center gap-2 text-sm text-white/70 transition hover:text-white"
						>
							Atidaryti naujame lange
							<ExternalLink size={15} />
						</a>
					)}
				</div>

				{mode === "live" && template.url ? (
					<div className="h-[75vh] w-full bg-white">
						<iframe
							src={template.url}
							title={`${template.title} - gyva peržiūra`}
							className="h-full w-full"
							style={{ border: "none" }}
							loading="lazy"
							allow="fullscreen"
						/>
					</div>
				) : (
					<div className="relative flex h-[75vh] items-center justify-center bg-black/30 p-4">
						{hasMultipleImages && (
							<>
								<button
									type="button"
									onClick={() =>
										setCurrentImageIndex(
											(prev) =>
												(prev -
													1 +
													template.images.length) %
												template.images.length,
										)
									}
									aria-label="Ankstesnis vaizdas"
									className="absolute left-3 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-white transition hover:bg-black/90 sm:left-6"
								>
									<ChevronLeft size={28} />
								</button>

								<button
									type="button"
									onClick={() =>
										setCurrentImageIndex(
											(prev) =>
												(prev + 1) %
												template.images.length,
										)
									}
									aria-label="Kitas vaizdas"
									className="absolute right-3 z-10 rounded-full border border-white/10 bg-black/60 p-2 text-white transition hover:bg-black/90 sm:right-6"
								>
									<ChevronRight size={28} />
								</button>
							</>
						)}

						<img
							src={template.images[currentImageIndex]}
							alt={`${template.title} - ${currentImageIndex + 1}`}
							className="max-h-full max-w-full object-contain"
						/>

						{hasMultipleImages && (
							<div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-4 py-2 text-xs text-white">
								{currentImageIndex + 1} /{" "}
								{template.images.length}
							</div>
						)}
					</div>
				)}

				<div className="flex flex-wrap items-center justify-between gap-3 border-t border-white/10 px-5 py-3">
					<p className="text-sm text-white/50">
						Domina šis dizainas?
					</p>
					<Link
						to="/kontaktai"
						onClick={onClose}
						className="inline-flex items-center gap-2 text-sm font-medium text-electric-blue transition hover:gap-3"
					>
						Aptarkime jūsų projektą
						<ArrowRight size={16} />
					</Link>
				</div>
			</motion.div>
		</motion.div>
	);

	return ReactDOM.createPortal(modalContent, document.body);
};

const TemplatesPage: React.FC = () => {
	const [selectedType, setSelectedType] =
		useState<TemplateFilter>("rodyti viską");
	const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
		null,
	);
	const [mode, setMode] = useState<"image" | "live">("image");

	const filteredTemplates = templates.filter(
		(template) =>
			selectedType === "rodyti viską" || template.type === selectedType,
	) as Template[];

	const filters: {
		type: TemplateFilter;
		label: string;
		icon: React.ReactNode;
	}[] = [
		{
			type: "rodyti viską",
			label: "Visi dizainai",
			icon: <Layers size={16} />,
		},
		{
			type: "asmeninės svetainės",
			label: "Asmeninės svetainės",
			icon: <User size={16} />,
		},
		{
			type: "el. parduotuvės",
			label: "El. parduotuvės",
			icon: <ShoppingBag size={16} />,
		},
	];

	return (
		<div className="relative min-h-screen overflow-hidden">
			<Helmet>
				<title>Paruošti svetainių dizainai | Amberweb</title>
				<meta
					name="description"
					content="Atraskite paruoštus svetainių ir el. parduotuvių dizainus. Pasirinkite patinkantį variantą, peržiūrėkite demonstraciją ir pradėkite greičiau."
				/>
				<link
					rel="canonical"
					href="https://amberweb.lt/paruosti-dizainai"
				/>
			</Helmet>

			{/* Fono akcentai */}
			<div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
				<div className="absolute left-1/2 top-0 h-[600px] w-[900px] -translate-x-1/2 rounded-full bg-electric-blue/10 blur-[140px]" />
				<div className="absolute right-[-200px] top-[700px] h-[500px] w-[500px] rounded-full bg-purple-500/10 blur-[130px]" />
			</div>

			<div className="container relative mx-auto px-4 pb-24">
				{/* Hero */}
				<section className="mx-auto max-w-4xl pb-12 pt-32 text-center md:pb-16 md:pt-44">
					<motion.div
						initial={{ opacity: 0, y: 18 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.5 }}
					>
						<div className="mb-6 inline-flex items-center gap-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 px-4 py-2 text-xs font-medium uppercase tracking-[0.16em] text-electric-blue">
							<Sparkles size={15} />
							Greitesnis kelias į internetą
						</div>

						<h1 className="mb-6 text-4xl font-bold leading-tight text-white md:text-6xl">
							Paruošti dizainai.
							<br />
							<span className="bg-gradient-to-r from-electric-blue to-purple-400 bg-clip-text text-transparent">
								Jūsų verslo pradžiai.
							</span>
						</h1>

						<p className="mx-auto max-w-2xl text-base leading-relaxed text-white/65 md:text-lg">
							Išsirinkite patinkantį svetainės ar el. parduotuvės
							dizainą. Pritaikysime jį jūsų veiklai, turiniui ir
							prekės ženklui - be ilgo projektavimo nuo nulio.
						</p>
					</motion.div>

					<div className="mt-10 flex flex-wrap items-center justify-center gap-3">
						{filters.map((filter) => {
							const isActive = selectedType === filter.type;

							return (
								<button
									key={filter.type}
									type="button"
									onClick={() => setSelectedType(filter.type)}
									aria-pressed={isActive}
									className={`inline-flex items-center gap-2 rounded-full border px-5 py-3 text-sm font-medium transition-all duration-300 ${
										isActive
											? "border-electric-blue bg-electric-blue text-white shadow-lg shadow-electric-blue/20"
											: "border-white/10 bg-white/[0.03] text-white/65 hover:border-white/25 hover:bg-white/[0.07] hover:text-white"
									}`}
								>
									{filter.icon}
									{filter.label}
								</button>
							);
						})}
					</div>

					<p className="mt-5 text-xs text-white/40">
						{filteredTemplates.length}{" "}
						{filteredTemplates.length === 1
							? "dizainas"
							: "dizainai"}{" "}
						rodoma
					</p>
				</section>

				{/* Šablonų sąrašas */}
				<section aria-label="Paruošti svetainių dizainai">
					<AnimatePresence mode="wait">
						<motion.div
							key={selectedType}
							initial={{ opacity: 0, y: 12 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -8 }}
							transition={{ duration: 0.25 }}
							className="grid grid-cols-1 items-stretch gap-7 sm:grid-cols-2 xl:grid-cols-3"
						>
							{filteredTemplates.map((template, index) => (
								<MobilePreview
									key={template.id}
									template={template}
									index={index}
									onClick={(clickMode) => {
										setSelectedTemplate(template);
										setMode(clickMode);
									}}
								/>
							))}
						</motion.div>
					</AnimatePresence>

					{filteredTemplates.length === 0 && (
						<div className="rounded-2xl border border-white/10 bg-white/[0.03] px-6 py-16 text-center">
							<Monitor
								className="mx-auto mb-4 text-white/30"
								size={32}
							/>
							<h2 className="mb-2 text-xl font-semibold text-white">
								Dizainų dar nėra
							</h2>
							<p className="text-sm text-white/50">
								Šioje kategorijoje šiuo metu nėra paruoštų
								dizainų.
							</p>
						</div>
					)}
				</section>

				{/* CTA */}
				<section className="relative mt-24 overflow-hidden rounded-3xl border border-white/10 bg-dark-surface-2 px-6 py-12 text-center sm:px-12 md:py-16">
					<div className="pointer-events-none absolute -right-20 -top-32 h-80 w-80 rounded-full bg-electric-blue/15 blur-[100px]" />

					<div className="relative mx-auto max-w-2xl">
						<div className="mb-5 inline-flex rounded-full border border-white/10 bg-white/5 p-3 text-electric-blue">
							<Sparkles size={22} />
						</div>

						<h2 className="mb-4 text-2xl font-bold text-white md:text-4xl">
							Nerandate tinkamo dizaino?
						</h2>

						<p className="mb-8 leading-relaxed text-white/60">
							Kiekvienas verslas skirtingas. Sukurkime individualų
							sprendimą, kuris atspindės jūsų prekės ženklą ir
							padės pasiekti verslo tikslus.
						</p>

						<Link
							to="/kontaktai"
							className="button-primary inline-flex items-center gap-2 rounded-full px-7 py-3.5 font-medium text-white transition hover:gap-3"
						>
							Aptarkime jūsų projektą
							<ArrowRight size={18} />
						</Link>
					</div>
				</section>
			</div>

			<AnimatePresence>
				{selectedTemplate && (
					<Lightbox
						template={selectedTemplate}
						mode={mode}
						onClose={() => setSelectedTemplate(null)}
					/>
				)}
			</AnimatePresence>
		</div>
	);
};

export default TemplatesPage;
