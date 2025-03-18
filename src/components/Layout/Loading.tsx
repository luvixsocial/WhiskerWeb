'use client';
import Image from 'next/image';
import { useEffect } from 'react';

interface LoadingProps {
	onClose: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onClose }) => {
    useEffect(() => {
		document.body.addEventListener('click', onClose);
		return () => document.body.removeEventListener('click', onClose);
	}, []);

	return (
		<>
			<div className="min-h-screen bg-background">
				<div className="flex min-h-screen flex-col items-center justify-center">
					<div className="flex flex-col items-center gap-6">
						<div className="relative h-24 w-24">
							<Image
								src="/transparent.png"
								alt="Logo"
								width={96}
								height={96}
								className="h-full w-full object-contain"
							/>
						</div>

						{/* Bubbling dots */}
						<div className="flex space-x-2">
							<div className="animate-bubble-1 h-3 w-3 rounded-full bg-primary"></div>
							<div className="animate-bubble-2 h-3 w-3 rounded-full bg-primary"></div>
							<div className="animate-bubble-3 h-3 w-3 rounded-full bg-primary"></div>
						</div>
					</div>
				</div>

				<style jsx global>{`
					@keyframes spin-slow {
						0% {
							transform: rotate(0deg);
						}
						100% {
							transform: rotate(360deg);
						}
					}

					@keyframes bubble {
						0%,
						100% {
							transform: translateY(0);
						}
						50% {
							transform: translateY(-10px);
						}
					}

					@keyframes fadeIn {
						from {
							opacity: 0;
						}
						to {
							opacity: 1;
						}
					}

					.animate-spin-slow {
						animation: spin-slow 3s linear infinite;
					}

					.animate-bubble-1 {
						animation: bubble 1.2s ease-in-out infinite;
					}

					.animate-bubble-2 {
						animation: bubble 1.2s ease-in-out 0.2s infinite;
					}

					.animate-bubble-3 {
						animation: bubble 1.2s ease-in-out 0.4s infinite;
					}

					.animate-fade-in {
						opacity: 0;
						animation: fadeIn 0.5s ease-in-out forwards;
					}
				`}</style>
			</div>
		</>
	);
};

export default Loading;
