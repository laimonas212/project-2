import { Globe, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const LanguageSwitcher = () => {
	const [open, setOpen] = useState(false);

	const changeLanguage = (lang: string) => {
		// Pirmiausia atnaujiname URL su nauju kalbos parametru
		const url = new URL(window.location.href);
		url.searchParams.set("lang", lang);

		// Pakeičiame naršyklės URL, bet neperkrauname puslapio iškart
		window.history.pushState({}, "", url.toString());

		// Tada nustatome slapuką, kaip tai darėte anksčiau
		document.cookie = `googtrans=/lt/${lang}; path=/`;
		document.cookie = `googtrans=/lt/${lang}; domain=${window.location.hostname}; path=/`;

		// Perkrauname puslapį, kad kalbos pakeitimas įsigaliotų
		window.location.reload();
	};

	useEffect(() => {
		// Tikrina URL parametrus ir nustato kalbą
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

		const style = document.createElement("style");
		style.innerHTML = `
            .goog-te-banner-frame.skiptranslate,
            body > .skiptranslate {
                display: none !important;
            }
            body {
                top: 0px !important;
            }
        `;
		document.head.appendChild(style);

		return () => clearInterval(interval);
	}, []);

	return (
		<div className="relative inline-block p-1 text-left text-white/70  hover:text-electric-blue">
			<button onClick={() => setOpen(!open)} className="">
				{open ? <X /> : <Globe />}
			</button>

			{open && (
				<div className="md:absolute rounded-lg bg-background right-0 mt-2 z-50">
					<button
						onClick={() => changeLanguage("lt")}
						className="block w-full text-left notranslate p-4 text-white/70 rounded hover:text-electric-blue "
					>
						LT
					</button>
					<button
						onClick={() => changeLanguage("en")}
						className="block w-full text-left notranslate p-4 text-white/70 rounded hover:text-electric-blue"
					>
						EN
					</button>
				</div>
			)}

			<div
				id="google_translate_element"
				style={{ display: "none" }}
			></div>
		</div>
	);
};

export default LanguageSwitcher;
