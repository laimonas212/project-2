import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { LayoutGrid, AlignRight, X } from "lucide-react";
import { cn } from "../lib/utils";
import logo from "../img/amberweb-logo-white.png";
import Accessibility from "../components/Accessibility";
import LanguageSwitcher from "../components/LanguageSwitcher";

// Define a type for your link objects to improve type safety
interface NavLinkItem {
	href?: string; // Optional for buttons
	label: string | React.ReactElement;
	isButton?: boolean;
	isHighlight?: boolean;
}

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const [showAccessibilityMenu, setShowAccessibilityMenu] = useState(false);
	const location = useLocation();

	// Define regular URL links separately
	const urlLinks: NavLinkItem[] = [
		{ href: "/projektai", label: "Projektai" },
		{ href: "/paruosti-dizainai", label: "Dizainai" },
		{ href: "/kainos", label: "Kainos" },
		{ href: "/blog", label: "Straipsniai" },
		{ href: "/kontaktai", label: "Kontaktai" },
	];

	// The 'Svetainė per 24h' link
	const highlightLink: NavLinkItem = {
		href: "/svetaine-per-24h",
		label: "Svetainė per 24h",
		isHighlight: true,
	};

	// The Accessibility button link
	const accessibilityLink: NavLinkItem = {
		label: <Accessibility />,
		isButton: true,
	};

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const handleAccessibilityToggle = () => {
		setShowAccessibilityMenu(!showAccessibilityMenu);

		// nuimti hash iš URL jei buvo uždėtas
		if (window.location.hash === "#accessibility") {
			history.replaceState(null, "", window.location.pathname);
		}
	};

	return (
		<nav
			className={cn(
				"fixed w-full z-50 transition-all duration-300",
				scrolled ? "pt-4 bg-background/80 backdrop-blur-lg" : "py-6"
			)}
		>
			<div className="container mx-auto px-4">
				<div className="flex items-center justify-between">
					<Link
						to="/"
						className="flex items-center space-x-2 logo-wrapper"
					>
						<img src={logo} alt="Amberweb" className="w-10 h-10" />
					</Link>

					{/* Desktop Navigation */}
					<div className="hidden lg:flex items-center space-x-8">
						{/* All URL links */}
						{urlLinks.map((link) => (
							<Link
								key={link.href}
								to={link.href || ""}
								className={cn(
									"font-medium transition-colors",
									location.pathname === link.href
										? "text-electric-blue"
										: "text-white/80 hover:text-electric-blue"
								)}
							>
								{link.label}
							</Link>
						))}

						{/* 24h button */}
						<Link
							key={highlightLink.href}
							to={highlightLink.href || ""}
							className={cn(
								"font-medium transition-colors button-primary rounded-full animate-gradient-x"
							)}
						>
							{highlightLink.label}
						</Link>

						{/* Accessibility button */}
						<button
							key="accessibility"
							onClick={handleAccessibilityToggle}
							className="text-white/80 hover:text-electric-blue transition-colors"
						>
							{accessibilityLink.label}
						</button>

						<LanguageSwitcher />
					</div>

					{/* Mobile Menu Button and Highlight Button (in header) */}
					<div className="lg:hidden flex items-center space-x-4">
						<Link
							key={highlightLink.href}
							to={highlightLink.href || ""}
							className={cn(
								"font-medium transition-colors button-primary rounded-full animate-gradient-x",
								"adaptive-button-font"
							)}
						>
							{highlightLink.label}
						</Link>
						<button onClick={() => setIsOpen(!isOpen)}>
							{isOpen ? <X /> : <AlignRight />}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation (Dropdown Menu) */}
			<motion.div
				initial={false}
				animate={
					isOpen
						? { height: "auto", opacity: 1 }
						: { height: 0, opacity: 0 }
				}
				className="lg:hidden mt-4 overflow-hidden bg-dark-surface"
			>
				<div className="container mx-auto px-4 py-4">
					{/* All URL links for mobile menu */}
					{urlLinks.map((link) => (
						<Link
							key={link.href}
							to={link.href || ""}
							className={cn(
								"block py-2 font-medium transition-colors",
								location.pathname === link.href
									? "text-electric-blue"
									: "text-white/80 hover:text-electric-blue"
							)}
							onClick={() => setIsOpen(false)}
						>
							{link.label}
						</Link>
					))}

					{/* Accessibility button for mobile menu */}
					<button
						key="accessibility-mobile"
						onClick={() => {
							handleAccessibilityToggle();
						}}
						className="block py-2 w-full text-left text-white/80 hover:text-electric-blue"
					>
						{accessibilityLink.label}
					</button>

					<LanguageSwitcher />
				</div>

				<div className="h-0.5 w-full bg-gradient-to-r from-electric-blue to-neon-purple animate-gradient-x" />
			</motion.div>
		</nav>
	);
};

export default Navbar;
