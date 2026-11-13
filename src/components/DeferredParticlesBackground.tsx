import { lazy, Suspense, useEffect, useState } from "react";

const ParticlesBackground = lazy(() => import("./ParticlesBackground"));

const DeferredParticlesBackground = () => {
	const [shouldRender, setShouldRender] = useState(false);

	useEffect(() => {
		let idleCallbackId: number | undefined;
		let timeoutId: number | undefined;

		const loadParticles = () => setShouldRender(true);

		if ("requestIdleCallback" in window) {
			idleCallbackId = window.requestIdleCallback(loadParticles, {
				timeout: 2500,
			});
		} else {
			timeoutId = window.setTimeout(loadParticles, 1500);
		}

		return () => {
			if (idleCallbackId !== undefined) {
				window.cancelIdleCallback(idleCallbackId);
			}
			if (timeoutId !== undefined) {
				window.clearTimeout(timeoutId);
			}
		};
	}, []);

	if (!shouldRender) return null;

	return (
		<Suspense fallback={null}>
			<ParticlesBackground />
		</Suspense>
	);
};

export default DeferredParticlesBackground;
