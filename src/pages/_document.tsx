import { Html, Head, Main, NextScript } from 'next/document';

const Document = () => {
	return (
		<Html lang="en" className="dark">
			<Head>
				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
				<link
					href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
					rel="stylesheet"
				/>
				<link
					href="https://fonts.googleapis.com/css2?family=Cabin:ital,wght@0,400..700;1,400..700&display=swap"
					rel="stylesheet"
				/>
			</Head>

			<body id="luvix" className="bg-background font-monster font-bold text-foreground">
				<Main />
				<NextScript />
			</body>
		</Html>
	);
};

export default Document;
