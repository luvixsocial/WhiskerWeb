import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

interface MetaProps {
	title?: string;
	description?: string;
	logo?: string;
	image?: string;
}

const Meta = ({
	title = 'Luvix Social | Redefining Connection in a Seamless, Privacy-Focused World.',
	description = 'Luvix Social is a next-generation platform built for authentic connections and seamless sharing. With a focus on privacy, creativity, and real-time engagement, it redefines social interaction for a connected world.',
	logo = '/transparent.png',
	image = '/banner.jpg'
}: MetaProps) => {
	const router = useRouter();
	const [fullUrl, setFullUrl] = useState('');

	useEffect(() => {
		if (typeof window !== 'undefined') {
			const url = `${window.location.protocol}//${window.location.host}${router.asPath}`;
			setFullUrl(url);
		}
	}, [router.asPath]);

	return (
		<Head>
			<title>{title}</title>
			<meta name="description" content={description} />
			<meta
				name="keywords"
				content="Luvix Social, privacy-focused social media, secure social network, decentralized social media, ad-free social platform, encrypted messaging, private social networking, open-source social media, social media alternative, data privacy social network"
			/>
			<meta name="viewport" content="width=device-width, initial-scale=1.0" />

			{/* Open Graph Meta Tags */}
			<meta property="og:title" content={title} />
			<meta property="og:site_name" content="Luvix Social" />
			<meta property="og:locale" content="en_US" />
			<meta property="og:type" content="website" />
			{fullUrl && <meta property="og:url" content={fullUrl} />}
			<meta property="og:image" content={logo} />
			<meta property="og:image:alt" content="Luvix Social" />
			<meta property="og:description" content={description} />
			<meta property="author" content="Luvix Social" />
			{image && <meta property="image" content={image} />}

			{/* Preload Assets */}
			<link rel="preload" href={logo} as="image" />

			{/* Twitter Meta Tags */}
			<meta name="twitter:card" content="summary" />
			<meta name="twitter:title" content={title} />
			<meta name="twitter:description" content={description} />
			<meta name="twitter:image" content={logo} />
			<meta name="twitter:image:alt" content="Luvix Social" />

			{/* Favicon */}
			<link rel="icon" type="image/x-icon" href="/transparent.png" />

			{/* Theme Colors */}
			<meta name="theme-color" content="#710AF5" />
			<meta name="apple-mobile-web-app-status-bar" content="#710AF5" />

			{/* Sitemap */}
			<link rel="sitemap" type="application/xml" href="/sitemap.xml" />
		</Head>
	);
};

export default Meta;
