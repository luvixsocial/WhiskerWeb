import Link from 'next/link';
import Image from 'next/image';
import { Separator } from '@/components/ShadCN/separator';

interface Navigation {
	name: string;
	href?: string | null;
	class?: string | null;
	onClick?: () => void;
}

const navigation: Navigation[] = [
	{
		name: 'About',
		href: '/about'
	},
	{
		name: 'Careers',
		href: '/careers'
	},
	{
		name: 'Blog',
		href: '/blog'
	},
	{
		name: 'Support',
		href: '/support'
	}
];
const otherNavigation: Navigation[] = [
	{
		name: 'Terms',
		href: '/terms'
	},
	{
		name: 'Privacy',
		href: '/privacy'
	},
	{
		name: 'Cookies',
		href: '/cookies'
	}
];

export function Footer() {
	return (
		<footer className="bg-muted/40 py-6">
			<div className="container mx-auto px-4">
				<div className="flex flex-col space-y-5">
					<div className="flex flex-col items-start justify-between space-y-4 md:flex-row md:items-center md:space-y-0">
						<div className="flex items-center space-x-2">
							<Image
								src="/transparent.png"
								alt="Our Logo"
								className="h-8 w-8 rounded-full"
								width={32}
								height={32}
							/>
							<span className="text-base font-bold">Luvix Social</span>
						</div>

						<nav className="hidden space-x-8 md:flex">
							{navigation.map((i) => {
								const className = `${i.class || ''} text-sm hover:text-primary`;
								return (
									<>
										<Link
											href={i.href || ''}
											className={className}
											onClick={() => {
												if (i.onClick) i.onClick();
											}}
										>
											{i.name}
										</Link>
									</>
								);
							})}
						</nav>
					</div>

					<nav className="flex flex-wrap justify-center gap-5 md:hidden">
						{navigation.map((i) => {
							const className = `${i.class || ''} text-sm hover:text-primary`;
							return (
								<>
									<Link
										href={i.href || ''}
										className={className}
										onClick={() => {
											if (i.onClick) i.onClick();
										}}
									>
										{i.name}
									</Link>
								</>
							);
						})}
					</nav>

					<Separator className="my-3" />

					<div className="flex flex-col-reverse items-center justify-between gap-3 md:flex-row">
						<p className="text-center text-sm text-muted-foreground md:text-left">
							© {new Date().getFullYear()} Purrquinox. All rights reserved.
						</p>

						<div className="flex gap-6">
							{otherNavigation.map((i) => {
								const className = `${i.class || ''} text-sm hover:text-primary`;
								return (
									<>
										<Link
											href={i.href || ''}
											className={className}
											onClick={() => {
												if (i.onClick) i.onClick();
											}}
										>
											{i.name}
										</Link>
									</>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
