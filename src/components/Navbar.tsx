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
} from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../img/amberweb-logo-white.png";
import LanguageSwitcher from "../components/LanguageSwitcher";

interface NavLinkItem {
	href?: string;
	label: string | React.ReactElement;
	isButton?: boolean;
	isHighlight?: boolean;
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);

	// Desktop dropdown būsenos
	const [desktopSettingsOpen, setDesktopSettingsOpen] = useState(false);

	// Mobile nustatymų būsena (tik Settings mygtukui)
	const [mobileSettingsOpen, setMobileSettingsOpen] = useState(false);

	// UI Būsenos (Accessibility)
	const [fontSize, setFontSize] = useState<"normal" | "large" | "xl">(
		"normal"
	);
	const [isHighContrast, setIsHighContrast] = useState(false);

	const location = useLocation();
	const navRef = useRef<HTMLDivElement>(null);

	// Click Outside logic
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				navRef.current &&
				!navRef.current.contains(event.target as Node)
			) {
				setDesktopSettingsOpen(false);
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

	// SCROLL & RESIZE
	useEffect(() => {
		const handleScroll = () => setScrolled(window.scrollY > 20);
		window.addEventListener("scroll", handleScroll);

		const handleResize = () => {
			if (window.innerWidth >= 1024 && isOpen) {
				setIsOpen(false);
				setMobileSettingsOpen(false);
			}
		};
		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("scroll", handleScroll);
			window.removeEventListener("resize", handleResize);
		};
	}, [isOpen]);

	// --- ACCESSIBILITY LOGIKA ---
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

	// --- PANELĖ (Accessibility) ---
	const AccessibilityPanel = () => (
		<div className="flex flex-col gap-4 min-w-[200px]">
			<div className="flex flex-col gap-2">
				<span className="text-white/60 text-xs flex items-center gap-2">
					<Type size={14} /> Šrifto dydis
				</span>
				<div className="flex bg-white/5 rounded-lg p-1">
					{(["normal", "large", "xl"] as const).map((size) => (
						<button
							key={size}
							onClick={() => handleFontSizeChange(size)}
							className={cn(
								"flex-1 h-8 flex items-center justify-center rounded-md font-bold transition-all",
								fontSize === size
									? "bg-white/20 text-white"
									: "text-white/40 hover:text-white/70",
								size === "normal"
									? "text-xs"
									: size === "large"
									? "text-sm"
									: "text-lg"
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
				<span className="text-white/60 text-xs flex items-center gap-2">
					<Contrast size={14} /> Kontrastas
				</span>
				<div className="flex bg-white/5 rounded-lg p-1 gap-1">
					<button
						onClick={() => handleContrastToggle("normal")}
						className={cn(
							"flex-1 h-8 flex items-center justify-center rounded-md transition-all",
							!isHighContrast
								? "bg-white/20 text-white"
								: "text-white/40 hover:text-white/70"
						)}
					>
						<Sun size={16} />
					</button>
					<button
						onClick={() => handleContrastToggle("high")}
						className={cn(
							"flex-1 h-8 flex items-center justify-center rounded-md transition-all",
							isHighContrast
								? "bg-white/20 text-white"
								: "text-white/40 hover:text-white/70"
						)}
					>
						<Moon size={16} />
					</button>
				</div>
			</div>
		</div>
	);

	return (
		<div ref={navRef}>
			<motion.nav
				initial={{ y: -100, opacity: 0 }}
				animate={{ y: 0, opacity: 1 }}
				transition={{ duration: 0.5 }}
				className={cn(
					"fixed top-4 left-0 right-0 mx-auto z-50",
					"w-[95%] max-w-5xl",
					"rounded-full",
					"border border-white/10 shadow-2xl shadow-black/50",
					"backdrop-blur-md bg-[#0a0a0a]/80",
					"px-4 py-3"
				)}
			>
				<div className="flex items-center justify-between">
					{/* LOGO */}
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
						<div className="flex items-center gap-2 text-white/70 relative">
							{/* A. SETTINGS (Nustatymai) */}
							<div className="relative">
								<button
									onClick={() =>
										setDesktopSettingsOpen(
											!desktopSettingsOpen
										)
									}
									className={cn(
										"p-2 rounded-full hover:bg-white/10 hover:text-white transition-colors",
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
											className="absolute top-full right-0 mt-4 bg-[#0a0a0a] border border-white/10 rounded-2xl p-4 shadow-xl z-50 w-64"
										>
											<AccessibilityPanel />
										</motion.div>
									)}
								</AnimatePresence>
							</div>

							{/* B. LANGUAGE (Kalba) - DIRECT RENDER */}
							{/* Mes nededame jokio wrapper button. Tiesiog įdedame komponentą. 
                                Jis atsistos šalia Settings mygtuko. */}
							<div className="flex items-center justify-center p-1">
								<LanguageSwitcher />
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
					<div className="lg:hidden flex items-center gap-3">
						<Link
							to={highlightLink.href || ""}
							className="button-primary px-5 py-2 rounded-full text-xs font-bold shadow-lg shadow-electric-blue/20 hover:scale-105 transition-transform"
						>
							{highlightLink.label}
						</Link>
						<button
							onClick={() => setIsOpen(!isOpen)}
							className="text-white/80 hover:text-white p-1"
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
					<div className="fixed top-24 left-0 right-0 mx-auto w-[95%] max-w-5xl z-40 flex flex-col gap-3">
						{/* 1. Nuorodos */}
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
							</div>
						</motion.div>

						{/* 2. Įrankių burbulas (Apatinis) */}
						<motion.div
							initial={{ opacity: 0, y: -10 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: -10 }}
							transition={{ delay: 0.1 }}
							className="bg-[#0a0a0a]/95 backdrop-blur-xl border border-white/10 rounded-3xl p-4 shadow-2xl overflow-hidden"
						>
							{/* Čia mes panaikinome TABUS. Dedame elementus vieną šalia kito. */}
							<div className="flex justify-center items-center gap-8">
								{/* 1. Settings Mygtukas - veikia kaip jungiklis apačiai */}
								<button
									onClick={() =>
										setMobileSettingsOpen(
											!mobileSettingsOpen
										)
									}
									className={cn(
										"p-3 rounded-full transition-all duration-300 flex items-center gap-2",
										mobileSettingsOpen
											? "bg-electric-blue text-white shadow-lg shadow-electric-blue/20"
											: "text-white/60 hover:text-white hover:bg-white/5"
									)}
								>
									<Settings size={22} />
								</button>

								{/* 2. Language Switcher - Tiesioginis atvaizdavimas */}
								{/* Vartotojas iškart mato tavo komponento ikoną. Paspaudus - veikia tavo komponento logika. */}
								<div className="p-1">
									<LanguageSwitcher />
								</div>
							</div>

							{/* Iššokantis turinys TIK nustatymams (Settings) */}
							<AnimatePresence>
								{mobileSettingsOpen && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										className="overflow-hidden"
									>
										<div className="pt-6 mt-4 border-t border-white/10">
											<AccessibilityPanel />
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
