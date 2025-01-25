import Images from "../img/Images";

export interface Template {
    id: number;
    title: string;
    type: 'personal' | 'e-shop';
    images: string[];
    description: string;
}

export const templates: Template[] = [
    {
        id: 1,
        title: 'Portfolio One',
        type: 'personal',
        images: [
            'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
            'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
        ],
        description: 'Minimalist portfolio template for creatives',
    },
    {
        id: 2,
        title: 'Portfolio Two',
        type: 'personal',
        images: [
            'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
        ],
        description: 'Dynamic portfolio with 3D elements',
    },
    {
        id: 3,
        title: 'E-Shop One',
        type: 'e-shop',
        images: [
            'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
            'https://images.unsplash.com/photo-1522542550221-31fd19575a2d',
        ],
        description: 'E-commerce template with a focus on product presentation',
    },
    // Add the rest of the templates...
];
