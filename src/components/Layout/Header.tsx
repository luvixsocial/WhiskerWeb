'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, User } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ShadCN/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ShadCN/sheet';
import {
	DropdownMenu,
	DropdownMenuContent,
	DropdownMenuItem,
	DropdownMenuLabel,
	DropdownMenuSeparator,
	DropdownMenuTrigger
} from '@/components/ShadCN/dropdown-menu';

// WIP
interface Navigation {
	Name: string;
	Href: string;
	Class: string;
	Category: string;
}

const navigation: Navigation[] = [];
const profileNavigation: Navigation[] = [];

const Header = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-40 w-full border-b bg-background">
			<div className="container flex h-16 items-center justify-between">
				<div className="flex items-center gap-2">
					<Sheet open={isOpen} onOpenChange={setIsOpen}>
						<SheetTrigger asChild>
							<Button variant="ghost" size="icon" className="md:hidden">
								<Menu className="h-5 w-5" />
								<span className="sr-only">Toggle menu</span>
							</Button>
						</SheetTrigger>
						<SheetContent side="left" className="pr-0">
							<nav className="grid gap-6 text-lg font-medium">
								<Link
									href="/"
									className="flex items-center gap-2 text-lg font-semibold"
									onClick={() => setIsOpen(false)}
								>
									<Image
										src="/transparent.png"
										alt="Our Logo"
										className="h-8 w-8 rounded-full bg-background"
										width={32}
										height={32}
									/>
									<span>Luvix Social</span>
								</Link>
								<Link
									href="/"
									className="hover:text-foreground/80"
									onClick={() => setIsOpen(false)}
								>
									Home
								</Link>
								<Link
									href="#features"
									className="hover:text-foreground/80"
									onClick={() => setIsOpen(false)}
								>
									Features
								</Link>
								<Link
									href="#pricing"
									className="hover:text-foreground/80"
									onClick={() => setIsOpen(false)}
								>
									Pricing
								</Link>
								<Link
									href="#about"
									className="hover:text-foreground/80"
									onClick={() => setIsOpen(false)}
								>
									About
								</Link>
							</nav>
						</SheetContent>
					</Sheet>
					<Link href="/" className="flex items-center gap-2">
						<Image
							src="/transparent.png"
							alt="Our Logo"
							className="h-8 w-8 rounded-full bg-background"
							width={32}
							height={32}
						/>
						<span className="text-xl font-bold">Luvix Social</span>
					</Link>
				</div>
				<nav className="hidden gap-6 md:flex">
					<Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
						Home
					</Link>
					<Link
						href="#features"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						Features
					</Link>
					<Link
						href="#pricing"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						Pricing
					</Link>
					<Link
						href="#about"
						className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
					>
						About
					</Link>
				</nav>
				<div className="flex items-center gap-2">
					<DropdownMenu>
						<DropdownMenuTrigger asChild>
							<Button variant="ghost" size="icon" className="rounded-full">
								<User className="h-5 w-5" />
								<span className="sr-only">User menu</span>
							</Button>
						</DropdownMenuTrigger>
						<DropdownMenuContent align="end">
							<DropdownMenuLabel>My Account</DropdownMenuLabel>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Profile</DropdownMenuItem>
							<DropdownMenuItem>Settings</DropdownMenuItem>
							<DropdownMenuItem>Billing</DropdownMenuItem>
							<DropdownMenuSeparator />
							<DropdownMenuItem>Logout</DropdownMenuItem>
						</DropdownMenuContent>
					</DropdownMenu>
					<Button className="hidden md:flex">Get Started</Button>
				</div>
			</div>
		</header>
	);
};

export default Header;
