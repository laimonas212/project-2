import React, { useMemo, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link, useParams } from "react-router-dom";
import {
	ArrowRight,
	Check,
	CheckCircle2,
	Clock3,
	Code2,
	Layers3,
	Menu,
	Share2,
	Smartphone,
	Zap,
} from "lucide-react";

import blogEntries from "../../components/blogEntries";
import CTA from "../../components/CTA";
import BlogNavigation from "../../components/BlogNavigation";

const iconMap = {
	speed: Zap,
	code: Code2,
	mobile: Smartphone,
	layers: Layers3,
};

const slugify = (text = "") =>
	text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");

// Senieji įrašai turi tekstą "excerpt" lauke. Paverčiame jį į tuos pačius
// vizualinius turinio blokus, kuriuos naudoja naujas Divi 5 straipsnis.
const excerptToBlocks = (excerpt = "") => {
	const chunks = excerpt
		.replace(/\r\n/g, "\n")
		.split(/\n\s*\n/)
		.map((chunk) => chunk.trim())
		.filter(Boolean);

	return chunks.map((chunk, index) => {
		const lines = chunk
			.split("\n")
			.map((line) => line.trim())
			.filter(Boolean);
		const firstLine = lines[0] || "";
		const numberedHeading = /^(\d+\.)\s+(.+)$/.exec(firstLine);

		if (numberedHeading && firstLine.length < 110) {
			return {
				type: "heading",
				level: 2,
				id: slugify(numberedHeading[2]),
				text: firstLine,
			};
		}

		if (
			lines.length === 1 &&
			firstLine.length < 90 &&
			(firstLine.endsWith("?") || firstLine.endsWith(":"))
		) {
			return {
				type: "heading",
				level: 2,
				id: slugify(firstLine),
				text: firstLine.replace(/:$/, ""),
			};
		}

		// Kai pastraipoje yra keli atskiri trumpi punktai, rodome juos kaip sąrašą.
		if (
			lines.length >= 2 &&
			lines.length <= 8 &&
			lines.every((line) => line.length < 180)
		) {
			return {
				type: "list",
				items: lines.map((line) => line.replace(/^[-•]\s*/, "")),
			};
		}

		return {
			type: index === 0 ? "paragraph" : "paragraph",
			text: lines.join(" "),
		};
	});
};

function BlogPost() {
	const { slug } = useParams();
	const [copied, setCopied] = useState(false);
	const [mobileTocOpen, setMobileTocOpen] = useState(false);

	const entry = blogEntries.find(
		(item) => item?.url?.replace(/^\/blog\//, "") === slug,
	);

	const contentBlocks = useMemo(
		() =>
			entry?.content?.length
				? entry.content
				: excerptToBlocks(entry?.excerpt || ""),
		[entry],
	);

	const headings = useMemo(
		() =>
			(contentBlocks || [])
				.filter((block) => block.type === "heading")
				.map((block) => ({
					text: block.text,
					id: block.id || slugify(block.text),
					level: block.level || 2,
				})),
		[entry],
	);

	if (!entry) {
		return (
			<main className="min-h-[60vh] flex flex-col items-center justify-center bg-dark-surface px-6 text-center">
				<span className="text-sm font-semibold uppercase tracking-[0.2em] text-electric-blue">
					Amber Web tinklaraštis
				</span>
				<h1 className="mt-4 text-4xl font-bold text-white">
					Straipsnis nerastas
				</h1>
				<p className="mt-4 max-w-lg text-slate-300">
					Deja, tokio straipsnio rasti nepavyko. Galbūt nuoroda
					pasikeitė.
				</p>
				<Link
					to="/blog"
					className="mt-8 inline-flex items-center gap-2 rounded-full bg-dark-surface-2 px-6 py-3 font-semibold text-white transition hover:bg-electric-blue hover:text-background"
				>
					Visi straipsniai <ArrowRight size={18} />
				</Link>
			</main>
		);
	}

	const canonical = `https://amberweb.lt${entry.url}`;
	const description =
		entry.metaDescription ||
		entry.excerpt?.replace(/\s+/g, " ").slice(0, 155);

	const handleShare = async () => {
		try {
			if (navigator.share) {
				await navigator.share({
					title: entry.title,
					url: window.location.href,
				});
			} else {
				await navigator.clipboard.writeText(window.location.href);
				setCopied(true);
				window.setTimeout(() => setCopied(false), 2000);
			}
		} catch (error) {
			// Dalinimosi langas uždarytas arba kopijavimas nepavyko.
		}
	};

	const renderBlock = (block, index) => {
		const key = block.id || `${block.type}-${index}`;

		switch (block.type) {
			case "heading": {
				const id = block.id || slugify(block.text);
				const HeadingTag = block.level === 3 ? "h3" : "h2";

				return (
					<HeadingTag
						key={key}
						id={id}
						className={
							block.level === 3
								? "scroll-mt-28 mt-5 pt-1 text-lg font-semibold leading-snug tracking-tight text-white md:mt-7 md:text-xl"
								: "scroll-mt-28 mt-10 pt-2 text-2xl font-bold leading-tight tracking-tight text-white md:mt-14 md:text-3xl"
						}
					>
						{block.text}
					</HeadingTag>
				);
			}

			case "paragraph":
				return (
					<p
						key={key}
						className="text-[16px] leading-[1.9] text-slate-300 md:text-[17px]"
					>
						{block.text}
					</p>
				);

			case "highlight":
				return (
					<div
						key={key}
						className="my-8 rounded-2xl border border-electric-blue/15 bg-dark-surface-2 p-6 shadow-[0_0_30px_rgba(0,240,255,0.035)] md:p-8"
					>
						<div className="mb-3 flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-electric-blue">
							<Zap size={17} />
							{block.label || "Svarbu žinoti"}
						</div>
						{block.title && (
							<h3 className="mb-2 text-xl font-bold text-white">
								{block.title}
							</h3>
						)}
						<p className="text-[16px] leading-8 text-slate-300">
							{block.text}
						</p>
					</div>
				);

			case "cards":
				return (
					<div key={key} className="my-8 grid gap-4 sm:grid-cols-2">
						{block.items.map((item, cardIndex) => {
							const Icon = iconMap[item.icon] || CheckCircle2;

							return (
								<div
									key={cardIndex}
									className="group rounded-2xl border border-white/[0.07] bg-dark-surface-2 p-6 shadow-lg shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-electric-blue/35 hover:shadow-[0_12px_35px_rgba(0,240,255,0.06)]"
								>
									<div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-electric-blue/10 to-neon-purple/10 text-electric-blue transition group-hover:from-electric-blue/20 group-hover:to-neon-purple/20 group-hover:text-electric-blue">
										<Icon size={21} />
									</div>
									<h3 className="mb-2 text-lg font-bold text-white">
										{item.title}
									</h3>
									<p className="text-sm leading-7 text-slate-300">
										{item.text}
									</p>
								</div>
							);
						})}
					</div>
				);

			case "list":
				return (
					<div
						key={key}
						className="my-6 rounded-2xl border border-white/[0.07] bg-dark-surface-2 p-6 md:p-8"
					>
						{block.title && (
							<h3 className="mb-5 text-lg font-bold text-white">
								{block.title}
							</h3>
						)}
						<ul className="space-y-4">
							{block.items.map((item, itemIndex) => (
								<li key={itemIndex} className="flex gap-3">
									<span className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-electric-blue/10 text-electric-blue">
										<Check size={13} strokeWidth={3} />
									</span>
									<span className="leading-7 text-slate-300">
										{item}
									</span>
								</li>
							))}
						</ul>
					</div>
				);

			case "quote":
				return (
					<blockquote
						key={key}
						className="my-10 border-l-2 border-electric-blue py-2 pl-6 md:pl-8"
					>
						<p className="text-xl font-medium leading-relaxed text-slate-200 md:text-2xl">
							„{block.text}“
						</p>
						{block.author && (
							<cite className="mt-4 block text-sm not-italic text-slate-400">
								{block.author}
							</cite>
						)}
					</blockquote>
				);

			case "image":
				return (
					<figure key={key} className="my-10">
						<img
							src={block.src}
							alt={block.alt || ""}
							loading="lazy"
							className="w-full rounded-2xl object-cover"
						/>
						{block.caption && (
							<figcaption className="mt-3 text-center text-sm text-slate-400">
								{block.caption}
							</figcaption>
						)}
					</figure>
				);

			default:
				return null;
		}
	};

	return (
		<>
			<Helmet>
				<title>{entry.seoTitle || `${entry.title} | Amberweb`}</title>
				<meta name="description" content={description} />
				<link rel="canonical" href={canonical} />

				<meta property="og:type" content="article" />
				<meta property="og:title" content={entry.title} />
				<meta property="og:description" content={description} />
				<meta property="og:url" content={canonical} />
				{entry.ogImage && (
					<meta property="og:image" content={entry.ogImage} />
				)}
			</Helmet>

			<main className="min-h-screen overflow-hidden bg-background text-white">
				{/* HERO */}
				<section className="relative overflow-hidden bg-background">
					<div className="absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full bg-electric-blue/10 blur-3xl" />
					<div className="absolute -bottom-48 -left-40 h-[500px] w-[500px] rounded-full bg-neon-purple/10 blur-3xl" />

					<div className="relative mx-auto max-w-7xl px-5 pb-12 pt-20 md:px-8 md:pb-16 md:pt-28">
						<div className="max-w-4xl">
							<Link
								to="/blog"
								className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition hover:text-electric-blue"
							>
								<ArrowRight className="rotate-180" size={16} />
								Visi straipsniai
							</Link>

							<div className="mb-6 flex flex-wrap items-center gap-3">
								<span className="rounded-full border border-electric-blue/20 bg-gradient-to-r from-electric-blue/10 to-neon-purple/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.15em] text-electric-blue">
									{entry.category || "Technologijos"}
								</span>
								{entry.date && (
									<span className="text-sm text-slate-400">
										{entry.date}
									</span>
								)}
								{entry.readTime && (
									<span className="flex items-center gap-2 text-sm text-slate-400">
										<Clock3 size={15} />
										{entry.readTime} min. skaitymo
									</span>
								)}
							</div>

							<h1 className="max-w-4xl text-4xl font-bold leading-[1.12] tracking-tight text-white md:text-6xl lg:text-7xl">
								{entry.title}
							</h1>

							<p className="mt-7 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
								{entry.intro || description}
							</p>

							<div className="mt-8 flex items-center gap-4">
								<button
									onClick={handleShare}
									className="inline-flex items-center gap-2 rounded-full border border-white/20 px-5 py-3 text-sm font-semibold text-white transition hover:border-electric-blue/60 hover:bg-electric-blue/5 hover:text-electric-blue"
								>
									{copied ? (
										<Check size={17} />
									) : (
										<Share2 size={17} />
									)}
									{copied
										? "Nuoroda nukopijuota"
										: "Dalintis straipsniu"}
								</button>
							</div>
						</div>

						{entry.image && (
							<div className="mt-12 overflow-hidden rounded-3xl border border-white/10 shadow-2xl md:mt-16">
								<img
									src={entry.image}
									alt={entry.imageAlt || entry.title}
									className="max-h-[560px] w-full object-cover"
									fetchpriority="high"
								/>
							</div>
						)}
					</div>
				</section>

				{/* ARTICLE */}
				<section className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-5 py-14 md:grid-cols-[minmax(0,1fr)_280px] md:px-8 md:py-20">
					<article className="min-w-0">
						<div className="space-y-6">
							{contentBlocks.map(renderBlock)}
						</div>

						{/* ARTICLE FOOTER */}
						<div className="mt-16 border-t border-white/[0.08] pt-8">
							<div className="flex flex-wrap items-center justify-between gap-4">
								<p className="font-semibold text-white">
									Patiko straipsnis? Pasidalinkite juo.
								</p>
								<button
									onClick={handleShare}
									className="inline-flex items-center gap-2 rounded-full bg-dark-surface-2 px-5 py-3 text-sm font-semibold text-white transition hover:bg-electric-blue hover:text-background"
								>
									<Share2 size={16} />
									Dalintis
								</button>
							</div>
						</div>
					</article>

					{/* DESKTOP TABLE OF CONTENTS */}
					{headings.length > 0 && (
						<aside className="hidden md:block">
							<div className="sticky top-28 rounded-2xl border border-white/[0.07] bg-dark-surface-2 p-6">
								<p className="mb-5 text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
									Straipsnio turinys
								</p>
								<nav className="space-y-1">
									{headings.map((heading, index) => (
										<a
											key={heading.id}
											href={`#${heading.id}`}
											className={`group flex gap-3 rounded-lg py-2 pr-2 text-sm leading-6 text-slate-300 transition hover:bg-white/5 hover:text-electric-blue ${heading.level === 3 ? "pl-7" : "pl-2"}`}
										>
											<span className="font-semibold text-slate-500 group-hover:text-electric-blue">
												{String(index + 1).padStart(
													2,
													"0",
												)}
											</span>
											{heading.text}
										</a>
									))}
								</nav>
							</div>
						</aside>
					)}

					{/* MOBILE TABLE OF CONTENTS */}
					{headings.length > 0 && (
						<div className="order-first md:hidden">
							<button
								onClick={() => setMobileTocOpen(!mobileTocOpen)}
								className="flex w-full items-center justify-between rounded-xl border border-white/[0.07] bg-dark-surface-2 p-4 font-semibold text-slate-200"
							>
								<span className="flex items-center gap-2">
									<Menu size={18} />
									Straipsnio turinys
								</span>
								<span>{mobileTocOpen ? "−" : "+"}</span>
							</button>

							{mobileTocOpen && (
								<nav className="mt-2 space-y-1 rounded-xl border border-white/[0.07] bg-dark-surface-2 p-3">
									{headings.map((heading, index) => (
										<a
											key={heading.id}
											href={`#${heading.id}`}
											onClick={() =>
												setMobileTocOpen(false)
											}
											className={`block rounded-lg py-2 pr-3 text-sm text-slate-300 hover:bg-white/5 hover:text-electric-blue ${heading.level === 3 ? "pl-7" : "pl-3"}`}
										>
											{index + 1}. {heading.text}
										</a>
									))}
								</nav>
							)}
						</div>
					)}
				</section>

				<div className="mx-auto max-w-7xl px-5 md:px-8">
					<BlogNavigation blogEntries={blogEntries} />
				</div>

				<CTA />
			</main>
		</>
	);
}

export default BlogPost;
