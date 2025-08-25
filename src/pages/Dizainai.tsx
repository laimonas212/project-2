import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  User,
  ShoppingBag,
  Layers,
  MousePointerClick,
} from "lucide-react";
import ReactDOM from "react-dom";
import templates from "../components/Templates"; // tavo template objektas
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async"; // Importuojame Helmet

interface Template {
  id: number;
  title: string;
  type: "asmeninės svetainės" | "el. parduotuvės";
  images: string[];
  description: string;
  url?: string; // Live demo URL
}

interface MobilePreviewProps {
  template: Template;
  onClick: (mode: "image" | "live") => void;
}

const MobilePreview: React.FC<MobilePreviewProps> = ({ template, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="group"
    >
      {/* Nuotraukos preview */}
      <div
        className="relative mx-auto aspect-[1/2] sm:aspect-[3/4] md:aspect-[1/2] w-[280px] sm:w-[300px] md:w-[280px] max-w-full rounded-[3rem] border-[7px] border-dark-surface-2 overflow-hidden shadow-xl transition-transform duration-300 hover:scale-105 cursor-pointer"
        onClick={() => onClick("image")}
      >
        <img
          src={template.images[0]}
          alt={template.title}
          className="w-full h-[200%] object-cover"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-white/60 text-black/80 backdrop-blur-sm z-50 opacity-0 group-hover:opacity-100 flex flex-col items-center justify-center transition-opacity duration-300 space-y-2 text-center">
          <span className="text-sm">Peržiūrėti</span>
          <span className="text-lg font-semibold">{template.title}</span>
          <MousePointerClick className="w-6 h-6 animate-carousel-ping" />
        </div>
      </div>

      <div className="mt-4 text-center">
        {/* Live Demo mygtukas ant fotkės, centre apačioje */}
        {template.url && (
          <button
            onClick={(e) => {
              e.stopPropagation(); // kad nepaleistų carousel click
              onClick("live");
            }}
            className=" bottom-4  px-3 py-1 button-primary text-white text-sm sm:text-base"
          >
            Peržiūra gyvai
            <MousePointerClick className="inline-block h-4 ml-1 animate-carousel-ping" />
          </button>
        )}
        <h3 className="text-xl font-bold mb-1 flex items-center justify-center gap-2">
          {template.title}
          {template.type === "asmeninės svetainės" ? (
            <User className="inline-block h-5" />
          ) : (
            <ShoppingBag className="inline-block h-5" />
          )}
        </h3>
        <p className="text-white/70 text-sm">{template.description}</p>
      </div>
    </motion.div>
  );
};

interface LightboxProps {
  template: Template | null;
  mode: "image" | "live";
  onClose: () => void;
  setMode: (mode: "image" | "live") => void;
}

const Lightbox: React.FC<LightboxProps> = ({
  template,
  onClose,
  mode,
  setMode,
}) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNextImage = () => {
    if (template)
      setCurrentImageIndex((prev) => (prev + 1) % template.images.length);
  };

  const handlePrevImage = () => {
    if (template)
      setCurrentImageIndex(
        (prev) => (prev - 1 + template.images.length) % template.images.length
      );
  };

  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") handlePrevImage();
      else if (e.key === "ArrowRight") handleNextImage();
      else if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeydown);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", handleKeydown);
      document.body.style.overflow = "";
    };
  }, [template]);

  if (!template) return null;

  const modalContent = (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-background/90 backdrop-blur-sm z-[9999] flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-[10000] p-3 bg-dark rounded-full"
      >
        <X className="w-6 h-6" />
      </button>

      <motion.div
        className="relative max-w-6xl w-full rounded-lg overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {mode === "live" && template.url ? (
          <div className="relative w-full h-[80vh]">
            <iframe
              src={template.url}
              className="w-full h-full"
              style={{ border: "none" }}
            />
            <div className="absolute bottom-0 left-0 w-full h-[60px] bg-background">
              <div className="flex items-center justify-center h-full text-white/70 text-sm">
                <Link
                  to={"/kontaktai"}
                  className="ml-2 text-electric-blue hover:underline"
                >
                  Nemokama konsultacija
                  <MousePointerClick className="inline-block h-4 ml-1 animate-carousel-ping" />
                </Link>
              </div>
            </div>
          </div>
        ) : (
          <>
            <div className="flex justify-between items-center absolute top-1/2 w-full transform -translate-y-1/2 px-4 z-10">
              <button
                onClick={handlePrevImage}
                className="bg-dark-surface/60 p-2 text-white rounded-full hover:bg-dark-surface/80"
              >
                <ChevronLeft className="w-8 h-8" />
              </button>
              <button
                onClick={handleNextImage}
                className="bg-dark-surface/60 p-2 text-white rounded-full hover:bg-dark-surface/80"
              >
                <ChevronRight className="w-8 h-8" />
              </button>
            </div>
            <img
              src={template.images[currentImageIndex]}
              alt={template.title}
              className="w-full h-auto max-h-[80vh] object-contain"
            />
          </>
        )}
      </motion.div>
    </motion.div>
  );

  return ReactDOM.createPortal(modalContent, document.body);
};

const TemplatesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<
    "rodyti viską" | "asmeninės svetainės" | "el. parduotuvės"
  >("rodyti viską");
  const [selectedTemplate, setSelectedTemplate] = useState<Template | null>(
    null
  );
  const [mode, setMode] = useState<"image" | "live">("image");

  const filteredTemplates = templates.filter(
    (t) => selectedType === "rodyti viską" || t.type === selectedType
  );

  return (
    <div className="pt-4 md:pt-36 min-h-screen">
      <Helmet>
        <title>Paruošti dizainai - Svetainių šablonai | Amberweb</title>
        <meta
          name="description"
          content="Peržiūrėkite mūsų paruoštus dizainus asmeninėms svetainėms ir el. parduotuvėms. Greitas startas jūsų verslui."
        />
        <link rel="canonical" href="https://amberweb.lt/paruosti-dizainai" />
      </Helmet>

      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="fixed inset-0 z-0 bg-[radial-gradient(circle_at_center,rgba(60,80,200,0.25)_0%,transparent_70%)]" />
      </div>
      <div className="container relative mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Paruošti dizainai
          </h1>
          <div className="flex justify-center gap-4">
            {[
              { type: "rodyti viską", icon: <Layers /> },
              { type: "asmeninės svetainės", icon: <User /> },
              { type: "el. parduotuvės", icon: <ShoppingBag /> },
            ].map(({ type, icon }) => (
              <button
                key={type}
                onClick={() => setSelectedType(type as typeof selectedType)}
                className={`px-6 py-2 rounded-full transition-colors text-xs ${
                  selectedType === type
                    ? "button-primary"
                    : "bg-dark-surface-2 text-white/70 hover:text-white"
                } flex items-center gap-2`}
              >
                {icon}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8 mb-32">
          {filteredTemplates.map((template) => (
            <MobilePreview
              key={template.id}
              template={template as Template}
              onClick={(clickMode) => {
                setSelectedTemplate(template as Template);
                setMode(clickMode); // image arba live
              }}
            />
          ))}
        </div>
      </div>

      {selectedTemplate && (
        <Lightbox
          template={selectedTemplate}
          onClose={() => setSelectedTemplate(null)}
          mode={mode}
          setMode={setMode}
        />
      )}
    </div>
  );
};

export default TemplatesPage;
