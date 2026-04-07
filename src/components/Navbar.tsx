import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import {
	AlignRight,
	X,
	Settings,
	Type,
	Sun,
	Moon,
	Contrast,
	Globe,
} from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../img/amberweb-logo-white.png";

// --- KALBOS KEITIMO LOGIKA ---
const changeLanguage = (lang: string) => {
	const url = new URL(window.location.href);
	url.searchParams.set("lang", lang);
	window.history.pushState({}, "", url.toString());

	document.cookie = `googtrans=/lt/${lang}; path=/`;
	document.cookie = `googtrans=/lt/${lang}; domain=${window.location.hostname}; path=/`;

	window.location.reload();
};

interface NavLinkItem {
	href?: string;
	label: string | React.ReactElement;
	isHighlight?: boolean;
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [desktopSettingsOpen, setDesktopSettingsOpen] = useState(false);
	const [desktopLangOpen, setDesktopLangOpen] = useState(false);
	const [mobileSettingsOpen, setMobileSettingsOpen] = useState(false);
	const [mobileLangOpen, setMobileLangOpen] = useState(false);

	const [fontSize, setFontSize] = useState<"normal" | "large" | "xl">(
		"normal"
	);
	const [isHighContrast, setIsHighContrast] = useState(false);

	const location = useLocation();
	const navRef = useRef<HTMLDivElement>(null);

	// Nustatome aktyvią kalbą iš URL arba slapuko
	const getCurrentLang = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const langParam = urlParams.get("lang");
		if (langParam) return langParam;

		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("googtrans="));
		if (cookie) return cookie.split("/").pop() || "lt";

		return "lt";
	};

	const currentLang = getCurrentLang();

	// Click Outside logic
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setDesktopSettingsOpen(false);
				setDesktopLangOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const urlLinks: NavLinkItem[] = [
		{ href: "/projektai", label: "Projektai" },
		{ href: "/paruosti-dizainai", label: "Dizainai" },
		{ href: "/kainos", label: "Kainos" },
		{ href: "/blog", label: "Straipsniai" },
		{ href: "/kontaktai", label: "Kontaktai" },
	];

	const highlightLink: NavLinkItem = {
		href: "/svetaine-per-24h",
		label: "Svetainė per 24h",
		isHighlight: true,
	};

	// ACCESSIBILITY LOGIKA
	const handleFontSizeChange = (size: "normal" | "large" | "xl") => {
		setFontSize(size);
		const root = document.documentElement;
		root.classList.remove("text-lg", "text-xl");
		if (size === "large") root.classList.add("text-lg");
		if (size === "xl") root.classList.add("text-xl");
	};

	const handleContrastToggle = (mode: "normal" | "high") => {
		const isHigh = mode === "high";
		setIsHighContrast(isHigh);
		const root = document.documentElement;
		if (isHigh) {
			root.classList.add("high-contrast");
			root.style.filter = "contrast(120%)";
		} else {
			root.classList.remove("high-contrast");
			root.style.filter = "none";
		}
	};

	// --- SKYDELIAI ---
	const AccessibilityPanel = () => (
		<div className="flex flex-col gap-5 min-w-[220px]">
			<div className="flex flex-col gap-2">
				<span className="text-white/50 text-[10px] uppercase tracking-widest flex items-center gap-2">
					<Type size={12} /> Šrifto dydis
				</span>
				<div className="flex bg-white/5 rounded-xl p-1 border border-white/5">
					{(["normal", "large", "xl"] as const).map((size) => (
						<button
							key={size}
							onClick={() => handleFontSizeChange(size)}
							className={cn(
								"flex-1 h-9 flex items-center justify-center rounded-lg font-bold transition-all text-sm",
								fontSize === size
									? "bg-white/15 text-white shadow-sm"
									: "text-white/30 hover:text-white/60"
							)}
						>
							{size === "normal"
								? "A"
								: size === "large"
								? "A+"
								: "A++"}
						</button>
					))}
				</div>
			</div>
			<div className="flex flex-col gap-2">
				<span className="text-white/50 text-[10px] uppercase tracking-widest flex items-center gap-2">
					<Contrast size={12} /> Kontrastas
				</span>
				<div className="flex bg-white/5 rounded-xl p-1 gap-1 border border-white/5">
					<button
						onClick={() => handleContrastToggle("normal")}
						className={cn(
							"flex-1 h-9 flex items-center justify-center rounded-lg transition-all",
							!isHighContrast
								? "bg-white/15 text-white"
								: "text-white/30 hover:text-white/60"
						)}
					>
						<Sun size={18} />
					</button>
					<button
						onClick={() => handleContrastToggle("high")}
						className={cn(
							"flex-1 h-9 flex items-center justify-center rounded-lg transition-all",
							isHighContrast
								? "bg-white/15 text-white"
								: "text-white/30 hover:text-white/60"
						)}
					>
						<Moon size={18} />
					</button>
				</div>
			</div>
		</div>
	);

	const LanguagePanel = () => (
		<div className="flex flex-col gap-2 min-w-[200px]">
			<span className="text-white/50 text-[10px] uppercase tracking-widest flex items-center gap-2">
				<Globe size={12} /> Kalba / Language
			</span>
			<div className="flex bg-white/5 rounded-xl p-1 border border-white/5">
				<button
					onClick={() => changeLanguage("lt")}
					className={cn(
						"flex-1 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-all",
						currentLang === "lt"
							? "bg-white/15 text-white shadow-sm"
							: "text-white/30 hover:text-white/60"
					)}
				>
					LT{" "}
					<span
						className={cn(
							"ml-2 text-[10px] font-normal",
							currentLang === "lt"
								? "text-white/60"
								: "opacity-30"
						)}
					>
						Lietuvių
					</span>
				</button>
				<button
					onClick={() => changeLanguage("en")}
					className={cn(
						"flex-1 h-10 flex items-center justify-center rounded-lg font-bold text-sm transition-all",
						currentLang === "en"
							? "bg-white/15 text-white shadow-sm"
							: "text-white/30 hover:text-white/60"
					)}
				>
					EN{" "}
					<span
						className={cn(
							"ml-2 text-[10px] font-normal",
							currentLang === "en"
								? "text-white/60"
								: "opacity-30"
						)}
					>
						English
					</span>
				</button>
			</div>
		</div>
	);

	return (
		<div ref={navRef}>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				className="fixed top-4 left-0 right-0 mx-auto z-50 w-[95%] max-w-5xl rounded-full border border-white/10 shadow-2xl backdrop-blur-md bg-[#0a0a0a]/80 px-4 py-3"
			>
				<div className="flex items-center justify-between">
					<Link to="/" className="flex items-center gap-2 pl-2">
						<img src={logo} alt="Amberweb" className="h-8" />
					</Link>

					{/* DESKTOP LINKS */}
					<div className="hidden lg:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
						{urlLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href || ""}
								className={cn(
									"text-sm font-medium transition-colors hover:text-electric-blue",
									location.pathname === link.href
										? "text-electric-blue"
										: "text-white/70"
								)}
							>
								{link.label}
							</Link>
						))}
					</div>

					{/* DESKTOP ACTIONS */}
					<div className="hidden lg:flex items-center gap-4">
						<div className="flex items-center gap-2 relative">
							{/* Settings */}
							<div className="relative">
								<button
									onClick={() => {
										setDesktopSettingsOpen(
											!desktopSettingsOpen
										);
										setDesktopLangOpen(false);
									}}
									className={cn(
										"p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors",
										desktopSettingsOpen &&
											"text-white bg-white/10"
									)}
								>
									<Settings size={20} />
								</button>
								<AnimatePresence>
									{desktopSettingsOpen && (
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
												scale: 0.95,
											}}
											animate={{
												opacity: 1,
												y: 0,
												scale: 1,
											}}
											exit={{
												opacity: 0,
												y: 10,
												scale: 0.95,
											}}
											className="absolute top-full right-0 mt-4 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl p-5 shadow-xl z-50 backdrop-blur-xl"
										>
											<AccessibilityPanel />
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* Globe */}
							<div className="relative">
								<button
									onClick={() => {
										setDesktopLangOpen(!desktopLangOpen);
										setDesktopSettingsOpen(false);
									}}
									className={cn(
										"p-2 rounded-full hover:bg-white/10 text-white/70 hover:text-white transition-colors flex items-center gap-1",
										desktopLangOpen &&
											"text-white bg-white/10"
									)}
								>
									<Globe size={20} />
									<span className="text-[10px] font-bold uppercase opacity-50 px-1">
										{currentLang}
									</span>
								</button>
								<AnimatePresence>
									{desktopLangOpen && (
										<motion.div
											initial={{
												opacity: 0,
												y: 10,
												scale: 0.95,
											}}
											animate={{
												opacity: 1,
												y: 0,
												scale: 1,
											}}
											exit={{
												opacity: 0,
												y: 10,
												scale: 0.95,
											}}
											className="absolute top-full right-0 mt-4 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl p-4 shadow-xl z-50 backdrop-blur-xl min-w-[220px]"
										>
											<LanguagePanel />
										</motion.div>
									)}
								</AnimatePresence>
							</div>
						</div>

						<Link
							to={highlightLink.href || ""}
							className="button-primary px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-electric-blue/20 hover:scale-105 transition-transform"
						>
							{highlightLink.label}
						</Link>
					</div>

					{/* MOBILE TOGGLE */}
					<div className="lg:hidden flex items-center">
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-white/80 hover:text-white p-2"
						>
							{isOpen ? (
								<X size={24} />
							) : (
								<AlignRight size={24} />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* MOBILE MENU */}
			<AnimatePresence>
				{isOpen && (
					<div className="fixed top-24 left-0 right-0 bottom-6 mx-auto w-[95%] max-w-5xl z-40 pointer-events-none flex flex-col gap-3">
						<div className="overflow-y-auto pointer-events-auto flex flex-col gap-3 pb-6 scrollbar-hide">
							<motion.div
								initial={{ opacity: 0, scale: 0.95, y: -10 }}
								animate={{ opacity: 1, scale: 1, y: 0 }}
								exit={{ opacity: 0, scale: 0.95, y: -10 }}
								className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-6 shadow-2xl"
							>
								<div className="flex flex-col gap-4 text-center">
									{urlLinks.map((link) => (
										<Link
											key={link.href}
											to={link.href || ""}
											onClick={() => setIsOpen(false)}
											className="text-lg font-medium text-white/80 hover:text-electric-blue py-2"
										>
											{link.label}
										</Link>
									))}
									<Link
										to={highlightLink.href || ""}
										onClick={() => setIsOpen(false)}
										className="button-primary py-4 rounded-2xl text-sm font-bold mt-2"
									>
										{highlightLink.label}
									</Link>
								</div>
							</motion.div>

							{/* Įrankių burbulas (Apatinis) */}
							<motion.div
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								exit={{ opacity: 0, y: -10 }}
								transition={{ delay: 0.1 }}
								className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden"
							>
								<div className="flex justify-center items-center gap-12 py-1">
									<button
										onClick={() => {
											setMobileSettingsOpen(
												!mobileSettingsOpen
											);
											setMobileLangOpen(false);
										}}
										className={cn(
											"p-3 rounded-full transition-all duration-300",
											mobileSettingsOpen
												? "bg-electric-blue text-white shadow-lg shadow-electric-blue/20"
												: "text-white/40 hover:bg-white/5"
										)}
									>
										<Settings size={22} />
									</button>
									<button
										onClick={() => {
											setMobileLangOpen(!mobileLangOpen);
											setMobileSettingsOpen(false);
										}}
										className={cn(
											"p-3 rounded-full transition-all duration-300 flex items-center gap-1",
											mobileLangOpen
												? "bg-electric-blue text-white shadow-lg shadow-electric-blue/20"
												: "text-white/40 hover:bg-white/5"
										)}
									>
										<Globe size={22} />
										<span
											className={cn(
												"text-[10px] font-bold uppercase",
												mobileLangOpen
													? "text-white"
													: "opacity-40"
											)}
										>
											{currentLang}
										</span>
									</button>
								</div>

								<AnimatePresence>
									{(mobileSettingsOpen || mobileLangOpen) && (
										<motion.div
											initial={{ height: 0, opacity: 0 }}
											animate={{
												height: "auto",
												opacity: 1,
											}}
											exit={{ height: 0, opacity: 0 }}
											className="overflow-hidden"
										>
											<div className="pt-6 mt-4 border-t border-white/10 px-1 pb-2">
												{mobileSettingsOpen ? (
													<AccessibilityPanel />
												) : (
													<LanguagePanel />
												)}
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						</div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
