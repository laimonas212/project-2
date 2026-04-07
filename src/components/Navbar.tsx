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
	ChevronLeft,
} from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../img/amberweb-logo-white.png";

const changeLanguage = (lang: string) => {
	const url = new URL(window.location.href);
	url.searchParams.set("lang", lang);
	window.history.pushState({}, "", url.toString());
	document.cookie = `googtrans=/lt/${lang}; path=/`;
	document.cookie = `googtrans=/lt/${lang}; domain=${window.location.hostname}; path=/`;
	window.location.reload();
};

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [activeTab, setActiveTab] = useState<"menu" | "settings" | "lang">(
		"menu"
	);

	// Desktop dropdown būsenos
	const [desktopSettingsOpen, setDesktopSettingsOpen] = useState(false);
	const [desktopLangOpen, setDesktopLangOpen] = useState(false);

	const [fontSize, setFontSize] = useState<"normal" | "large" | "xl">(
		"normal"
	);
	const [isHighContrast, setIsHighContrast] = useState(false);

	const location = useLocation();
	const navRef = useRef<HTMLDivElement>(null);

	const getCurrentLang = () => {
		const urlParams = new URLSearchParams(window.location.search);
		const langParam = urlParams.get("lang");
		if (langParam) return langParam;
		const cookie = document.cookie
			.split("; ")
			.find((row) => row.startsWith("googtrans="));
		return cookie ? cookie.split("/").pop() : "lt";
	};

	const currentLang = getCurrentLang();

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

	// Uždaryti meniu pasikeitus puslapiui
	useEffect(() => {
		setIsOpen(false);
		setActiveTab("menu");
	}, [location]);

	const urlLinks = [
		{ href: "/projektai", label: "Projektai" },
		{ href: "/paruosti-dizainai", label: "Dizainai" },
		{ href: "/kainos", label: "Kainos" },
		{ href: "/blog", label: "Straipsniai" },
		{ href: "/kontaktai", label: "Kontaktai" },
	];

	const AccessibilityPanel = () => (
		<div className="flex flex-col gap-6 w-full">
			<div className="flex flex-col gap-3">
				<span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold text-center">
					Šrifto dydis
				</span>
				<div className="flex bg-white/5 rounded-2xl p-1 border border-white/5">
					{(["normal", "large", "xl"] as const).map((size) => (
						<button
							key={size}
							onClick={() => {
								setFontSize(size);
								const root = document.documentElement;
								root.classList.remove("text-lg", "text-xl");
								if (size === "large")
									root.classList.add("text-lg");
								if (size === "xl")
									root.classList.add("text-xl");
							}}
							className={cn(
								"flex-1 h-12 flex items-center justify-center rounded-xl font-bold transition-all",
								fontSize === size
									? "bg-white/15 text-white shadow-lg"
									: "text-white/30"
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
			<div className="flex flex-col gap-3">
				<span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold text-center">
					Kontrastas
				</span>
				<div className="flex bg-white/5 rounded-2xl p-1 gap-1 border border-white/5">
					<button
						onClick={() => {
							setIsHighContrast(false);
							document.documentElement.classList.remove(
								"high-contrast"
							);
							document.documentElement.style.filter = "none";
						}}
						className={cn(
							"flex-1 h-12 flex items-center justify-center rounded-xl transition-all",
							!isHighContrast
								? "bg-white/15 text-white"
								: "text-white/30"
						)}
					>
						<Sun size={20} />
					</button>
					<button
						onClick={() => {
							setIsHighContrast(true);
							document.documentElement.classList.add(
								"high-contrast"
							);
							document.documentElement.style.filter =
								"contrast(120%)";
						}}
						className={cn(
							"flex-1 h-12 flex items-center justify-center rounded-xl transition-all",
							isHighContrast
								? "bg-white/15 text-white"
								: "text-white/30"
						)}
					>
						<Moon size={20} />
					</button>
				</div>
			</div>
		</div>
	);

	const LanguagePanel = () => (
		<div className="flex flex-col gap-4 w-full">
			<span className="text-white/40 text-[10px] uppercase tracking-[0.2em] font-bold text-center">
				Kalba / Language
			</span>
			<div className="flex flex-col gap-2">
				<button
					onClick={() => changeLanguage("lt")}
					className={cn(
						"w-full h-14 flex items-center justify-between px-6 rounded-2xl font-bold transition-all border border-white/5",
						currentLang === "lt"
							? "bg-electric-blue/20 text-white border-electric-blue/30"
							: "bg-white/5 text-white/40"
					)}
				>
					Lietuvių <span className="text-xs opacity-50">LT</span>
				</button>
				<button
					onClick={() => changeLanguage("en")}
					className={cn(
						"w-full h-14 flex items-center justify-between px-6 rounded-2xl font-bold transition-all border border-white/5",
						currentLang === "en"
							? "bg-electric-blue/20 text-white border-electric-blue/30"
							: "bg-white/5 text-white/40"
					)}
				>
					English <span className="text-xs opacity-50">EN</span>
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
								to={link.href}
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
							<button
								onClick={() => {
									setDesktopSettingsOpen(
										!desktopSettingsOpen
									);
									setDesktopLangOpen(false);
								}}
								className={cn(
									"p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors",
									desktopSettingsOpen &&
										"text-white bg-white/10"
								)}
							>
								<Settings size={20} />
							</button>
							<AnimatePresence>
								{desktopSettingsOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										className="absolute top-full right-0 mt-4 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl p-5 shadow-xl z-50 backdrop-blur-xl min-w-[240px]"
									>
										<AccessibilityPanel />
									</motion.div>
								)}
							</AnimatePresence>

							<button
								onClick={() => {
									setDesktopLangOpen(!desktopLangOpen);
									setDesktopSettingsOpen(false);
								}}
								className={cn(
									"p-2 rounded-full hover:bg-white/10 text-white/70 transition-colors flex items-center gap-1",
									desktopLangOpen && "text-white bg-white/10"
								)}
							>
								<Globe size={20} />
								<span className="text-[10px] font-bold opacity-50 uppercase">
									{currentLang}
								</span>
							</button>
							<AnimatePresence>
								{desktopLangOpen && (
									<motion.div
										initial={{ opacity: 0, y: 10 }}
										animate={{ opacity: 1, y: 0 }}
										exit={{ opacity: 0, y: 10 }}
										className="absolute top-full right-0 mt-4 bg-[#0a0a0a]/95 border border-white/10 rounded-2xl p-5 shadow-xl z-50 backdrop-blur-xl min-w-[240px]"
									>
										<LanguagePanel />
									</motion.div>
								)}
							</AnimatePresence>
						</div>
						<Link
							to="/svetaine-per-24h"
							className="button-primary px-5 py-2 rounded-full text-xs font-bold transition-transform hover:scale-105"
						>
							Svetainė per 24h
						</Link>
					</div>

					{/* MOBILE TOGGLE */}
					<div className="lg:hidden flex items-center">
						<button
							onClick={() => {
								setIsOpen(!isOpen);
								setActiveTab("menu");
							}}
							className="text-white/80 p-2"
						>
							{isOpen ? (
								<X size={26} />
							) : (
								<AlignRight size={26} />
							)}
						</button>
					</div>
				</div>
			</motion.nav>

			{/* MOBILE MENU */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						animate={{ opacity: 1, y: 0 }}
						exit={{ opacity: 0, y: 10 }}
						className="fixed top-24 left-0 right-0 mx-auto w-[92%] z-40"
					>
						<div className="bg-[#0a0a0a]/95 backdrop-blur-2xl border border-white/10 rounded-[2.5rem] p-6 shadow-2xl overflow-hidden relative">
							<AnimatePresence mode="wait">
								{activeTab === "menu" ? (
									<motion.div
										key="menu"
										initial={{ x: -20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: -20, opacity: 0 }}
										className="flex flex-col gap-2"
									>
										{urlLinks.map((link) => (
											<Link
												key={link.href}
												to={link.href}
												className="text-xl font-semibold text-white/90 py-3 px-4 rounded-2xl hover:bg-white/5 active:bg-white/10 transition-all"
											>
												{link.label}
											</Link>
										))}
										<Link
											to="/svetaine-per-24h"
											className="button-primary py-4 rounded-2xl text-center font-bold mt-4 shadow-lg shadow-electric-blue/20"
										>
											Svetainė per 24h
										</Link>

										{/* Apatinė įrankių juosta meniu viduje */}
										<div className="flex items-center justify-between mt-6 pt-6 border-t border-white/5">
											<button
												onClick={() =>
													setActiveTab("settings")
												}
												className="flex flex-col items-center gap-1 flex-1 text-white/40"
											>
												<Settings size={22} />
												<span className="text-[10px] uppercase font-bold">
													Nustatymai
												</span>
											</button>
											<button
												onClick={() =>
													setActiveTab("lang")
												}
												className="flex flex-col items-center gap-1 flex-1 text-white/40"
											>
												<Globe size={22} />
												<span className="text-[10px] uppercase font-bold">
													Kalba ({currentLang})
												</span>
											</button>
										</div>
									</motion.div>
								) : (
									<motion.div
										key="panel"
										initial={{ x: 20, opacity: 0 }}
										animate={{ x: 0, opacity: 1 }}
										exit={{ x: 20, opacity: 0 }}
										className="flex flex-col"
									>
										<button
											onClick={() => setActiveTab("menu")}
											className="flex items-center gap-2 text-electric-blue mb-6 font-bold uppercase text-xs tracking-widest"
										>
											<ChevronLeft size={18} /> Atgal į
											meniu
										</button>
										{activeTab === "settings" ? (
											<AccessibilityPanel />
										) : (
											<LanguagePanel />
										)}
									</motion.div>
								)}
							</AnimatePresence>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default Navbar;
