import ReactGA from "react-ga4";

const GA_MEASUREMENT_ID = "G-VF8ZYBL09C";

export const initGA = () => {
	ReactGA.initialize(GA_MEASUREMENT_ID);
};

export const logPageView = () => {
	ReactGA.send("pageview");
};
