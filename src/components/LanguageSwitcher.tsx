import { Globe, X } from "lucide-react";
import React, { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion"; // Pridėjau animacijas, kad būtų solidžiau

const LanguageSwitcher = () => {
	const [open, setOpen] = useState(false);
	const dropdownRef = useRef<HTMLDivElement>(null);

	// Uždaryti paspaudus šalia
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (
				dropdownRef.current &&
				!dropdownRef.current.contains(event.target as Node)
			) {
				setOpen(false);
			}
		};
		document.addEventListener("mousedown", handleClickOutside);
		return () =>
			document.removeEventListener("mousedown", handleClickOutside);
	}, []);

	const changeLanguage = (lang: string) => {
		const url = new URL(window.location.href);
		url.searchParams.set("lang", lang);
		window.history.pushState({}, "", url.toString());

		document.cookie = `googtrans=/lt/${lang}; path=/`;
		document.cookie = `googtrans=/lt/${lang}; domain=${window.location.hostname}; path=/`;

		window.location.reload();
	};

	useEffect(() => {
		const urlParams = new URLSearchParams(window.location.search);
		const langParam = urlParams.get("lang");
		if (langParam && ["lt", "en"].includes(langParam)) {
			document.cookie = `googtrans=/lt/${langParam}; path=/`;
			document.cookie = `googtrans=/lt/${langParam}; domain=${window.location.hostname}; path=/`;
		}

		const interval = setInterval(() => {
			if (
				(window as any).google &&
				(window as any).google.translate &&
				(window as any).google.translate.TranslateElement
			) {
				clearInterval(interval);
				try {
					new (window as any).google.translate.TranslateElement(
						{
							pageLanguage: "lt",
							autoDisplay: false,
							includedLanguages: "lt,en",
							layout: (window as any).google.translate
								.TranslateElement.InlineLayout.SIMPLE,
						},
						"google_translate_element"
					);
				} catch (e) {
					console.error("Google Translate init error:", e);
				}
			}
		}, 100);

		const script = document.createElement("script");
		script.src =
			"https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
		script.async = true;
		document.body.appendChild(script);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative inline-block" ref={dropdownRef}>
			{/* Mygtukas su suvienodintu dydžiu */}
			<button
				onClick={() => setOpen(!open)}
				className="p-2 flex items-center justify-center rounded-full text-white/70 hover:text-electric-blue hover:bg-white/5 transition-all outline-none"
			>
				{/* ČIA SUTVARKYTI DYDŽIAI (size={20}) */}
				{open ? <X size={20} /> : <Globe size={20} />}
			</button>

			<AnimatePresence>
				{open && (
					<motion.div
						initial={{ opacity: 0, y: 10, scale: 0.95 }}
						animate={{ opacity: 1, y: 0, scale: 1 }}
						exit={{ opacity: 0, y: 10, scale: 0.95 }}
						className="absolute right-0 mt-3 w-28 bg-[#0a0a0a] border border-white/10 rounded-xl shadow-2xl z-50 overflow-hidden backdrop-blur-xl"
					>
						<button
							onClick={() => changeLanguage("lt")}
							className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors notranslate"
						>
							Lietuvių <span>LT</span>
						</button>
						<button
							onClick={() => changeLanguage("en")}
							className="flex items-center justify-between w-full px-4 py-3 text-sm font-medium text-white/70 hover:bg-white/10 hover:text-white transition-colors notranslate border-t border-white/5"
						>
							English <span>EN</span>
						</button>
					</motion.div>
				)}
			</AnimatePresence>

			<div
				id="google_translate_element"
				style={{ display: "none" }}
			></div>
		</div>
	);
};

export default LanguageSwitcher;
