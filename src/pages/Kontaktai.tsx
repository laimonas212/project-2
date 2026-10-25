import { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";
import {
	ArrowRight,
	Clock3,
	Phone,
	MessageCircle,
	UserCheck,
	ShieldCheck,
	Sparkles,
	Briefcase,
	Smartphone,
	Headset,
} from "lucide-react";
import ParticlesBackground from "../components/ParticlesBackground";

interface FormData {
	name: string;
	email: string;
	phone: string;
	message: string;
}

interface Errors {
	name?: string;
	email?: string;
	phone?: string;
	message?: string;
}

const Kontaktai = () => {
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		phone: "",
		message: "",
	});

	const [errors, setErrors] = useState<Errors>({});
	const [isSubmitting, setIsSubmitting] = useState(false);

	const validateField = (name: string, value: string): string | undefined => {
		switch (name) {
			case "name":
				return value.trim() ? undefined : "Įveskite savo vardą";

			case "email":
				return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
					? undefined
					: "Įveskite galiojantį el. paštą";

			case "phone":
				return /^\+?\d{7,15}$/.test(value.replace(/[\s()-]/g, ""))
					? undefined
					: "Įveskite galiojantį telefono numerį";

			case "message":
				return value.trim() ? undefined : "Parašykite žinutę";

			default:
				return undefined;
		}
	};

	const validate = (): boolean => {
		const newErrors: Errors = {};

		(["name", "email", "phone", "message"] as const).forEach((field) => {
			const error = validateField(field, formData[field]);
			if (error) newErrors[field] = error;
		});

		setErrors(newErrors);

		return Object.keys(newErrors).length === 0;
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
	): void => {
		const { name, value } = e.target;

		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));

		setErrors((prevErrors) => ({
			...prevErrors,
			[name]: validateField(name, value),
		}));
	};

	const submitHandler = (e: React.FormEvent<HTMLFormElement>): void => {
		e.preventDefault();

		if (isSubmitting || !validate()) return;

		setIsSubmitting(true);

		const myForm = document.getElementById(
			"contact-form",
		) as HTMLFormElement;

		// Original Netlify form submission mechanism
		const netlifyFormData = new FormData(myForm);

		fetch("/", {
			method: "POST",
			headers: {
				"Content-Type": "application/x-www-form-urlencoded",
			},
			body: new URLSearchParams(netlifyFormData as any).toString(),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Form submission failed");
				}

				return Swal.fire({
					icon: "success",
					title: "Ačiū už užklausą!",
					text: "Jūsų žinutę gavome. Netrukus su Jumis susisieksime.",
					confirmButtonText: "Puiku!",
					background: "#12121a",
					color: "#ffffff",
					customClass: {
						popup: "bg-dark-surface",
						title: "text-electric-blue",
						confirmButton:
							"bg-gradient-to-r from-blue-500 to-purple-500 text-white",
					},
				});
			})
			.then(() => {
				setFormData({
					name: "",
					email: "",
					phone: "",
					message: "",
				});

				setErrors({});
				myForm.reset();
			})
			.catch(() => {
				Swal.fire({
					icon: "error",
					title: "Įvyko klaida",
					text: "Prašome pabandyti dar kartą arba susisiekti telefonu.",
					confirmButtonText: "Gerai",
					background: "#12121a",
					color: "#ffffff",
					customClass: {
						popup: "bg-dark-surface",
						title: "text-electric-blue",
						confirmButton:
							"bg-gradient-to-r from-red-500 to-orange-500 text-white",
					},
				});
			})
			.finally(() => {
				setIsSubmitting(false);
			});
	};

	const inputClass = (field: keyof Errors) =>
		`w-full bg-white/[0.04] text-white border ${
			errors[field] ? "border-red-500" : "border-white/10"
		} rounded-xl py-3.5 px-4 outline-none transition-all duration-300 focus:border-electric-blue focus:bg-white/[0.07] placeholder:text-white/30`;

	return (
		<div className="relative min-h-screen overflow-hidden">
			<ParticlesBackground />

			{/* Background */}
			<div className="fixed inset-0 z-0 pointer-events-none">
				<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(60,80,200,0.20)_0%,transparent_65%)]" />
			</div>

			<Helmet>
				<title>Kontaktai – Gaukite pasiūlymą | Amber Web</title>
				<meta
					name="description"
					content="Susisiekite su Amber Web dėl internetinės svetainės ar el. parduotuvės kūrimo. Aptarkime Jūsų projektą ir paruoškime individualų pasiūlymą."
				/>
				<link rel="canonical" href="https://amberweb.lt/kontaktai" />
			</Helmet>

			<main className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 py-16 md:py-24">
				{/* HERO */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="max-w-3xl mx-auto text-center mb-14 md:mb-20"
				>
					<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-electric-blue/20 bg-electric-blue/10 text-electric-blue text-xs font-semibold mb-6">
						<Sparkles size={14} />
						PRADĖKIME NUO POKALBIO
					</div>

					<h1 className="text-4xl md:text-6xl font-bold text-white leading-tight mb-6">
						Turite idėją?
						<br />
						<span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-blue to-purple-500">
							Paverskime ją realybe.
						</span>
					</h1>

					<p className="text-white/60 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
						Papasakokite apie savo projektą. Įvertinsime poreikius,
						pasiūlysime tinkamiausią sprendimą ir padėsime žengti
						kitą žingsnį internete.
					</p>
				</motion.div>

				{/* MAIN CONTENT */}
				<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
					{/* CONTACT FORM */}
					<motion.section
						initial={{ opacity: 0, y: 25 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.1 }}
						className="lg:col-span-7 relative rounded-2xl p-[1px] bg-gradient-to-br from-electric-blue/50 via-purple-500/30 to-transparent"
					>
						<div className="bg-[#12121a] rounded-2xl p-6 sm:p-9 md:p-10 h-full">
							<div className="mb-8">
								<span className="text-electric-blue text-sm font-semibold tracking-wider">
									UŽKLAUSA
								</span>

								<h2 className="text-2xl md:text-3xl font-bold text-white mt-3 mb-3">
									Papasakokite apie savo projektą
								</h2>

								<p className="text-white/50 text-sm leading-relaxed">
									Užpildykite trumpą formą ir mes susisieksime
									su Jumis aptarti galimus sprendimus.
								</p>
							</div>

							<form
								id="contact-form"
								name="contact-form"
								method="POST"
								action="/kontaktai"
								data-netlify="true"
								netlify-honeypot="bot-field"
								onSubmit={submitHandler}
								className="space-y-5"
							>
								{/* Netlify hidden form name */}
								<input
									type="hidden"
									name="form-name"
									value="contact-form"
								/>

								{/* Netlify honeypot */}
								<p className="hidden">
									<label>
										Don’t fill this out if you’re human:
										<input name="bot-field" />
									</label>
								</p>

								<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
									<div>
										<label className="block text-sm text-white/70 mb-2">
											Jūsų vardas *
										</label>

										<input
											type="text"
											name="name"
											placeholder="Vardas"
											required
											value={formData.name}
											onChange={handleChange}
											className={inputClass("name")}
										/>

										{errors.name && (
											<p className="text-red-400 text-xs mt-2">
												{errors.name}
											</p>
										)}
									</div>

									<div>
										<label className="block text-sm text-white/70 mb-2">
											El. paštas *
										</label>

										<input
											type="email"
											name="email"
											placeholder="vardas@imone.lt"
											required
											value={formData.email}
											onChange={handleChange}
											className={inputClass("email")}
										/>

										{errors.email && (
											<p className="text-red-400 text-xs mt-2">
												{errors.email}
											</p>
										)}
									</div>
								</div>

								<div>
									<label className="block text-sm text-white/70 mb-2">
										Telefono numeris *
									</label>

									<input
										type="tel"
										name="phone"
										placeholder="+370 611 18874"
										required
										value={formData.phone}
										onChange={handleChange}
										className={inputClass("phone")}
									/>

									{errors.phone && (
										<p className="text-red-400 text-xs mt-2">
											{errors.phone}
										</p>
									)}
								</div>

								<div>
									<label className="block text-sm text-white/70 mb-2">
										Žinutė *
									</label>

									<textarea
										name="message"
										placeholder="Trumpai papasakokite, kokios svetainės ar sprendimo ieškote..."
										rows={5}
										required
										value={formData.message}
										onChange={handleChange}
										className={`${inputClass("message")} resize-y min-h-[140px]`}
									/>

									{errors.message && (
										<p className="text-red-400 text-xs mt-2">
											{errors.message}
										</p>
									)}
								</div>

								<button
									type="submit"
									disabled={isSubmitting}
									className="button-primary w-full flex items-center justify-center gap-3 py-4 rounded-xl font-bold transition-all duration-300 hover:scale-[1.01] disabled:opacity-50 disabled:cursor-not-allowed"
								>
									{isSubmitting
										? "Siunčiama..."
										: "Siųsti užklausą"}

									<ArrowRight size={18} />
								</button>

								<p className="text-center text-white/35 text-xs">
									Jūsų pateikta informacija naudojama tik
									susisiekti dėl projekto.
								</p>
							</form>
						</div>
					</motion.section>

					{/* RIGHT COLUMN */}
					<div className="lg:col-span-5 flex flex-col gap-6">
						{/* CONTACT INFORMATION */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.2 }}
							className="rounded-2xl border border-white/10 bg-white/[0.03] p-7 md:p-8"
						>
							<span className="text-electric-blue text-xs font-semibold tracking-wider">
								SUSISIEKIME
							</span>

							<h2 className="text-2xl font-bold text-white mt-3 mb-3">
								Patogiau pasikalbėti?
							</h2>

							<p className="text-white/50 text-sm leading-relaxed mb-7">
								Jeigu turite klausimų arba norite greičiau
								aptarti savo idėją, susisiekite tiesiogiai.
							</p>

							<a
								href="tel:+37061118874"
								className="flex items-center gap-4 p-4 rounded-xl bg-white/[0.04] border border-white/10 hover:border-electric-blue/50 transition-all group"
							>
								<div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue shrink-0">
									<Phone size={22} />
								</div>

								<div className="flex-1 min-w-0">
									<p className="text-xs text-white/40 mb-1">
										Skambinkite
									</p>
									<p className="text-white font-semibold">
										+370 611 18874
									</p>
								</div>

								<ArrowRight
									className="text-white/30 group-hover:text-electric-blue transition-colors"
									size={18}
								/>
							</a>

							<div className="flex items-center gap-3 mt-6 text-sm text-white/50">
								<Clock3
									className="text-electric-blue shrink-0"
									size={19}
								/>

								<div>
									<p>Darbo laikas</p>
									<p className="text-white font-medium mt-1">
										I–V: 10:00–18:00
									</p>
								</div>
							</div>
						</motion.div>

						{/* WORK PROCESS */}
						<motion.div
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.3 }}
							className="rounded-2xl border border-white/10 bg-gradient-to-br from-electric-blue/[0.09] to-purple-500/[0.06] p-7 md:p-8"
						>
							<div className="flex items-center gap-3 mb-7">
								<div className="w-11 h-11 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue">
									<Briefcase size={22} />
								</div>

								<div>
									<span className="text-electric-blue text-xs font-semibold tracking-wider">
										PAPRASTA IR AIŠKU
									</span>

									<h3 className="text-xl font-bold text-white mt-1">
										Kaip dirbame?
									</h3>
								</div>
							</div>

							<div className="space-y-6">
								{[
									{
										number: "01",
										title: "Išklausome Jūsų poreikius",
										text: "Išsiaiškiname projekto tikslus, idėjas ir lūkesčius.",
									},
									{
										number: "02",
										title: "Paruošiame pasiūlymą",
										text: "Pateikiame sprendimą, darbų apimtį ir aiškią kainą.",
									},
									{
										number: "03",
										title: "Įgyvendiname projektą",
										text: "Kuriame, deriname detales ir paruošiame svetainę paleidimui.",
									},
								].map((step) => (
									<div
										key={step.number}
										className="flex gap-4"
									>
										<div className="w-9 h-9 shrink-0 rounded-full border border-electric-blue/30 bg-electric-blue/10 flex items-center justify-center text-electric-blue text-xs font-bold">
											{step.number}
										</div>

										<div>
											<h4 className="text-white font-semibold text-sm mb-1">
												{step.title}
											</h4>

											<p className="text-white/45 text-sm leading-relaxed">
												{step.text}
											</p>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>

				{/* FULL WIDTH TRUST FEATURES */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.4 }}
					className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8"
				>
					{[
						{
							icon: UserCheck,
							title: "Tiesioginis bendravimas",
							text: "Bendraujate tiesiogiai su žmogumi, kuris įgyvendina Jūsų projektą.",
						},
						{
							icon: ShieldCheck,
							title: "Skaidri kainodara",
							text: "Aiški darbų apimtis, sutarta kaina ir jokių paslėptų mokesčių.",
						},
						{
							icon: Smartphone,
							title: "Pritaikyta visiems įrenginiams",
							text: "Patogi ir funkcionali svetainė kompiuteriuose bei telefonuose.",
						},
						{
							icon: Headset,
							title: "Pagalba po paleidimo",
							text: "Techninė pagalba ir konsultacijos po projekto įgyvendinimo.",
						},
					].map((item, index) => {
						const Icon = item.icon;

						return (
							<div
								key={index}
								className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all duration-300 hover:border-electric-blue/40 hover:bg-white/[0.05]"
							>
								<div className="w-12 h-12 rounded-xl bg-electric-blue/10 flex items-center justify-center text-electric-blue mb-5 group-hover:scale-110 transition-transform">
									<Icon size={24} />
								</div>

								<h3 className="text-white font-semibold text-base mb-2">
									{item.title}
								</h3>

								<p className="text-white/45 text-sm leading-relaxed">
									{item.text}
								</p>
							</div>
						);
					})}
				</motion.div>

				{/* BOTTOM CTA */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.5 }}
					className="mt-20 md:mt-28 text-center border-t border-white/10 pt-14 pb-8"
				>
					<MessageCircle
						size={30}
						className="text-electric-blue mx-auto mb-5"
					/>

					<h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
						Dar tik svarstote?
					</h2>

					<p className="text-white/50 max-w-xl mx-auto mb-7 leading-relaxed">
						Nebūtina turėti paruoštą planą. Pradėkime nuo paprasto
						pokalbio ir kartu išsiaiškinkime, ko reikia Jūsų
						verslui.
					</p>

					<a
						href="tel:+37061118874"
						className="inline-flex items-center gap-3 button-primary px-7 py-3.5 rounded-xl font-semibold"
					>
						Pasikalbėkime
						<ArrowRight size={18} />
					</a>
				</motion.div>
			</main>
		</div>
	);
};

export default Kontaktai;
