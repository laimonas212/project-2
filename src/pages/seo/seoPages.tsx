import data from "./seoPages.json";

export type FaqItem = {
	question: string;
	answer: string | React.ReactNode;
};

export type SeoPage = {
	slug: string;
	type: string;
	location?: string;
	primaryKeyword: string;
	secondaryKeywords?: string[];
	title: string;
	description: string;
	h1: string;
	contentHeading?: string; // Papildomas H2 turinio bloke
	introText: string;
	seoContent: string[];
	contentBlocks?: string[]; // Blokų seka: "services", "process", "technologies" ir t.t.
	relatedPages?: { slug: string; title: string }[]; // Susijusios paslaugos vidiniam linkavimui
	customFaq?: FaqItem[];
};

export const seoPages: SeoPage[] = data as SeoPage[];

export function getSeoPage(slug?: string): SeoPage | undefined {
	return seoPages.find((p) => p.slug === slug);
}
