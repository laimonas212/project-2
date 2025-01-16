import React, { useState } from 'react';
// import './TemplatesShowcase.css'; // For styling

const templates = [
  {
    id: 1,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/projects/brangus-auto.png',
      'src/img/projects/eriola.png',
      'src/img/projects/evakuacine-kuprine.png',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 1,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 2,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 3,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 4,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  // Add more templates as needed

  {
    id: 5,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 6,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 7,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 8,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creatives',
  },
  {
    id: 9,
    title: 'Portfolio One',
    type: 'personal',
    image: 'src/img/templates/acai-bowl-landing-page-533x2357.jpg',
    gallery: [
      'src/img/templates/acai-bowl-1.jpg',
      'src/img/templates/acai-bowl-2.jpg',
      'src/img/templates/acai-bowl-3.jpg',
    ],
    description: 'Minimalist portfolio template for creat ives',
  }
];

const TemplatesShowcase = () => {
  const [lightbox, setLightbox] = useState({ isOpen: false, gallery: [], currentIndex: 0 });

  const openLightbox = (gallery, index) => {
    setLightbox({ isOpen: true, gallery, currentIndex: index });
  };

  const closeLightbox = () => {
    setLightbox({ isOpen: false, gallery: [], currentIndex: 0 });
  };

  const nextImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex + 1) % prev.gallery.length,
    }));
  };

  const prevImage = () => {
    setLightbox((prev) => ({
      ...prev,
      currentIndex: (prev.currentIndex - 1 + prev.gallery.length) % prev.gallery.length,
    }));
  };

  return (
    <div className="templates-container">
      {templates.map((template, index) => (
        <div
          className="template-card"
          key={template.id}
          onClick={() => openLightbox(template.gallery, index)}
        >
          <div className="image-wrapper">
            <img src={template.image} alt={template.title} />
          </div>
          <h3>{template.title}</h3>
          <p>{template.description}</p>
        </div>
      ))}

      {lightbox.isOpen && (
        <div className="lightbox">
          <button className="close-btn" onClick={closeLightbox}>
            ×
          </button>
          <button className="prev-btn" onClick={prevImage}>
            ‹
          </button>
          <img src={lightbox.gallery[lightbox.currentIndex]} alt="Gallery" />
          <button className="next-btn" onClick={nextImage}>
            ›
          </button>
        </div>
      )}
    </div>
  );
};

export default TemplatesShowcase;
