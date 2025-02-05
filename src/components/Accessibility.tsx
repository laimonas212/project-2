import React, { useState, useEffect, useRef } from 'react';
import { Settings2, X, Type, Contrast,  } from 'lucide-react';

const AccessibilityPanel: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [textSize, setTextSize] = useState('medium');
    const [contrast, setContrast] = useState('normal');
    const panelRef = useRef<HTMLDivElement>(null);

    const togglePanel = () => setIsOpen(!isOpen);

    // Close panel when clicking outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };
        if (isOpen) document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    const adjustTextSize = (size: 'small' | 'medium' | 'large') => {
        setTextSize(size);
        document.documentElement.style.fontSize = size === 'small' ? '1rem' : size === 'large' ? '1.5rem' : '1.2rem';
    };

    const adjustContrast = (level: 'normal' | 'high') => {
        setContrast(level);

        const content = document.querySelector('main') || document.documentElement;

        if (level === 'high') {
            content.style.filter = 'contrast(1.5)';
        } else {
            content.style.removeProperty('filter');
        }
    };

    return (
        <div className="relative">
            {/* Toggle Button */}
            <button
                className="p-1 text-white/70 hover:text-electric-blue transition"
                onClick={togglePanel}
                onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault(); // Neleidžia puslapiui slinkti paspaudus "Space"
                        togglePanel();
                    }
                }}
                aria-label={isOpen ? "Uždaryti prieinamumo nustatymų panelę" : "Atidaryti prieinamumo nustatymų panelę"}
                aria-expanded={isOpen}
                aria-controls="accessibility-panel"
            >
                {isOpen ? <X size={24} /> : <Settings2 size={24} />}
            </button>


            {/* Accessibility Panel */}
            {isOpen && (
                <div
                    id="accessibility-panel"
                    ref={panelRef}
                    className="md:absolute top-full right-0 mt-2 bg-background backdrop-blur-lg p-4 rounded-lg shadow-lg w-64 space-y-3 z-50"
                    role="dialog"
                    aria-labelledby="accessibility-panel-title"
                >
                    <h3 id="accessibility-panel-title" className="text-lg font-semibold">
                        Prieinamumo nustatymai
                    </h3>

                    {/* Text Size */}
                    <div className="flex items-center gap-3">
                        <Type size={20} /> Šrifto dydis:
                        <button onClick={() => adjustTextSize('small')}>
                            <Type size={14} className={textSize === 'small' ? 'text-primary' : ''} />
                        </button>
                        <button onClick={() => adjustTextSize('medium')}>
                            <Type size={18} className={textSize === 'medium' ? 'text-primary' : ''} />
                        </button>
                        <button onClick={() => adjustTextSize('large')}>
                            <Type size={22} className={textSize === 'large' ? 'text-primary' : ''} />
                        </button>
                    </div>

                    {/* Contrast */}
                    <div className="flex items-center gap-3">
                        <Contrast size={20} /> Kontrastas:
                        <button onClick={() => adjustContrast('normal')}>
                            <Contrast size={20} className={contrast === 'normal' ? 'text-primary' : ''} />
                        </button>
                        <button onClick={() => adjustContrast('high')} className="text-yellow-500">
                            <Contrast size={24} className={contrast === 'high' ? 'text-yellow-500' : ''} />
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default AccessibilityPanel;
