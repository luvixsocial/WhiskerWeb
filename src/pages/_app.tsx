import '@/styles/globals.css';
import Footer from '@/components/Layout/Footer';
import Header from '@/components/Layout/Header';
import Loading from '@/components/Layout/Loading';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import type { AppProps } from 'next/app';
import SEO from '@/components/SEO/SEO';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
config.autoAddCss = false;

const App = ({ Component, pageProps }: AppProps) => {
	const [isLoading, setIsLoading] = useState(true);
	const router = useRouter();

	useEffect(() => {
		if (router.pathname !== '/') {
			setIsLoading(false);
			return;
		}

		const handleRouteChangeStart = () => setIsLoading(true);
		const handleRouteChangeComplete = () => setTimeout(() => setIsLoading(false), 3000);

		router.events.on('routeChangeStart', handleRouteChangeStart);
		router.events.on('routeChangeComplete', handleRouteChangeComplete);
		router.events.on('routeChangeError', handleRouteChangeComplete);

		setTimeout(() => setIsLoading(false), 3000);

		return () => {
			router.events.off('routeChangeStart', handleRouteChangeStart);
			router.events.off('routeChangeComplete', handleRouteChangeComplete);
			router.events.off('routeChangeError', handleRouteChangeComplete);
		};
	}, [router.pathname]);

	return (
		<div className="bg-background text-foreground">
			{isLoading ? (
				<>
					<SEO />
					<Loading onClose={() => setIsLoading(false)} />
				</>
			) : (
				<div className="flex min-h-screen flex-col">
					<div className="grow">
						<Header />

						<main className="mt-3">
							<Component {...pageProps} />
						</main>
					</div>

					<Footer />
				</div>
			)}
		</div>
	);
};

export default App;
