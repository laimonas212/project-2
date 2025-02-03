import { useEffect } from "react";

declare global {
    interface Window {
        dataLayer: any[];
    }
}

const GoogleConsent: React.FC = () => {
    useEffect(() => {
        if (typeof window !== "undefined") {
            window.dataLayer = window.dataLayer || [];
            function gtag(...args: any[]) {
                window.dataLayer.push(args);
            }

            gtag("consent", "default", {
                analytics_storage: "denied",
                ad_storage: "denied",
                functionality_storage: "granted",
                personalization_storage: "denied",
                security_storage: "granted",
            });

            gtag("js", new Date());
            gtag("config", "G-VF8ZYBL09C"); // Replace with your GA4 Measurement ID
        }
    }, []);

    return null; // This component does not render anything
};

export default GoogleConsent;
