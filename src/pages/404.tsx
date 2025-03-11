import ErrorComp from '@/components/Layout/Error';
import SEO from '@/components/SEO/SEO';

const ErrorPage = () => {
	return (
		<>
			<SEO title="Page Not Found - Luvix Social" />
			<ErrorComp
				Status={404}
				Message="Page Not Found"
				SubText="The page you're looking for doesn't exist."
			/>
		</>
	);
};

export default ErrorPage;