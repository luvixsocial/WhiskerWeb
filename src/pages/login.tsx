import SEO from '@/components/SEO/SEO';
import { LoginForm } from '@/components/ShadCN/login-form';

const Login = () => {
	return (
		<>
			<SEO title="Login | Luvix Social" />

			<div className="flex flex-col items-center justify-center gap-6 p-6 md:p-10">
				<LoginForm />
			</div>
		</>
	);
};

export default Login;
