import React from 'react';
import Link from 'next/link';
import { Button as ButtonUse } from '../ShadCN/button';

interface ButtonInt {
	Name: string;
	Function: () => void;
}

interface ErrorPageProps {
	Status?: number;
	Message?: string;
	SubText?: string;
	Button?: ButtonInt | null;
}

const ErrorComp: React.FC<ErrorPageProps> = ({
	Status = 0,
	Message = 'Unknown',
	SubText = 'Unknown Error!',
	Button = null
}) => {
	return (
		<section className="flex h-screen items-center p-16">
			<div className="container mx-auto my-8 flex flex-col items-center justify-center px-5">
				<div className="max-w-md text-center">
					<h2 className="mb-8 font-monster text-9xl font-extrabold">
						<span className="sr-only">Error</span>
						{Status}
					</h2>
					<p className="font-monster text-2xl font-semibold md:text-3xl">{Message}</p>
					<p className="mb-8 mt-4 font-cabin text-foreground/50">{SubText}</p>

					{Button ? (
						<ButtonUse onClick={Button.Function}>{Button.Name}</ButtonUse>
					) : (
						<Link href="/">
							<ButtonUse>Back Home!</ButtonUse>
						</Link>
					)}
				</div>
			</div>
		</section>
	);
};

export default ErrorComp;
