'use client';
import type React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {
	Book,
	CheckCircle,
	HelpCircle,
	Mail,
	MessageSquare,
	Search,
	Ticket
} from 'lucide-react';
import { Button } from '@/components/ShadCN/button';
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle
} from '@/components/ShadCN/card';
import { Input } from '@/components/ShadCN/input';
import { Textarea } from '@/components/ShadCN/textarea';
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger
} from '@/components/ShadCN/accordion';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ShadCN/tabs';

const Support = () => {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [subject, setSubject] = useState('');
	const [message, setMessage] = useState('');
	const [submitted, setSubmitted] = useState(false);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log({ name, email, subject, message });

		setSubmitted(true);
		// Reset form after submission
		setTimeout(() => {
			setName('');
			setEmail('');
			setSubject('');
			setMessage('');
			setSubmitted(false);
		}, 3000);
	};

	return (
		<div className="min-h-screen bg-background">
			{/* Header */}
			<header className="border-b">
				<div className="container flex h-16 items-center justify-between py-4">
					<div className="flex items-center gap-2">
						<HelpCircle className="h-6 w-6" />
						<span className="text-xl font-bold">Support Center</span>
					</div>
					<nav className="hidden items-center gap-6 md:flex">
						<Link href="#" className="text-sm font-medium underline-offset-4 hover:underline">
							Home
						</Link>
						<Link href="#" className="text-sm font-medium underline-offset-4 hover:underline">
							Knowledge Base
						</Link>
						<Link href="#" className="text-sm font-medium underline-offset-4 hover:underline">
							FAQs
						</Link>
						<Link href="#" className="text-sm font-medium underline-offset-4 hover:underline">
							Contact
						</Link>
					</nav>
					<Button variant="outline" size="sm" className="hidden md:flex">
						Submit a Ticket
					</Button>
				</div>
			</header>

			{/* Hero Section */}
			<section className="bg-muted py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="flex flex-col items-center justify-center mx-auto space-y-4 text-center">
						<div className="space-y-2">
							<h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
								How can we help you today?
							</h1>
							<p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
								Find answers, submit a ticket, or contact our support team for assistance.
							</p>
						</div>
						<div className="w-full max-w-md space-y-2">
							<div className="relative">
								<Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
								<Input
									type="search"
									placeholder="Search for help..."
									className="w-full bg-background pl-8 pr-4"
								/>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Support Options */}
			<section className="py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
						<Card>
							<CardHeader className="flex flex-row items-center gap-4">
								<Book className="h-8 w-8 text-primary" />
								<div>
									<CardTitle>Knowledge Base</CardTitle>
									<CardDescription>Browse our documentation</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									Find detailed guides, tutorials, and documentation to help you get the most out of
									our product.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="outline" className="w-full">
									Browse Articles
								</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center gap-4">
								<MessageSquare className="h-8 w-8 text-primary" />
								<div>
									<CardTitle>Live Chat</CardTitle>
									<CardDescription>Chat with our support team</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									Connect with our support team in real-time for immediate assistance with your
									questions.
								</p>
							</CardContent>
							<CardFooter>
								<Button className="w-full">Start Chat</Button>
							</CardFooter>
						</Card>
						<Card>
							<CardHeader className="flex flex-row items-center gap-4">
								<Ticket className="h-8 w-8 text-primary" />
								<div>
									<CardTitle>Submit a Ticket</CardTitle>
									<CardDescription>Get help from our team</CardDescription>
								</div>
							</CardHeader>
							<CardContent>
								<p className="text-sm text-muted-foreground">
									Create a support ticket and our team will get back to you as soon as possible.
								</p>
							</CardContent>
							<CardFooter>
								<Button variant="outline" className="w-full">
									Create Ticket
								</Button>
							</CardFooter>
						</Card>
					</div>
				</div>
			</section>

			{/* FAQs */}
			<section className="bg-muted py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-3xl space-y-8">
						<div className="space-y-2 text-center">
							<h2 className="text-3xl font-bold tracking-tighter">Frequently Asked Questions</h2>
							<p className="text-muted-foreground">
								Find answers to the most common questions about our product and services.
							</p>
						</div>
						<Accordion type="single" collapsible className="w-full">
							<AccordionItem value="item-1">
								<AccordionTrigger>How do I reset my password?</AccordionTrigger>
								<AccordionContent>
									To reset your password, click on the "Forgot Password" link on the login page.
									You'll receive an email with instructions to create a new password.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-2">
								<AccordionTrigger>How do I upgrade my subscription?</AccordionTrigger>
								<AccordionContent>
									You can upgrade your subscription by going to your account settings and selecting
									the "Subscription" tab. From there, you can choose a new plan and complete the
									payment process.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-3">
								<AccordionTrigger>Can I cancel my subscription at any time?</AccordionTrigger>
								<AccordionContent>
									Yes, you can cancel your subscription at any time from your account settings. Your
									access will continue until the end of your current billing period.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-4">
								<AccordionTrigger>How do I download my data?</AccordionTrigger>
								<AccordionContent>
									You can download your data by going to your account settings and selecting the
									"Data" tab. From there, you can request a data export which will be emailed to
									you.
								</AccordionContent>
							</AccordionItem>
							<AccordionItem value="item-5">
								<AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
								<AccordionContent>
									We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and
									bank transfers for annual plans.
								</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</div>
			</section>

			{/* Contact Form and Info */}
			<section className="py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-5xl">
						<div className="grid gap-10 md:grid-cols-2">
							<div className="space-y-6">
								<div className="space-y-2">
									<h2 className="text-3xl font-bold tracking-tighter">Get in Touch</h2>
									<p className="text-muted-foreground">
										Have a specific question or need personalized help? Reach out to our support
										team.
									</p>
								</div>
								<div className="space-y-4">
									<div className="flex items-center gap-3">
										<Mail className="h-5 w-5 text-primary" />
										<span>support@purrquinox.com</span>
									</div>
								</div>
							</div>
							<div>
								<Tabs defaultValue="contact" className="w-full">
									<TabsList className="grid w-full grid-cols-2">
										<TabsTrigger value="contact">Contact Form</TabsTrigger>
										<TabsTrigger value="ticket">Support Ticket</TabsTrigger>
									</TabsList>
									<TabsContent value="contact" className="space-y-4 pt-4">
										<form onSubmit={handleSubmit} className="space-y-4">
											<div className="grid gap-4 sm:grid-cols-2">
												<div className="space-y-2">
													<label
														htmlFor="name"
														className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													>
														Name
													</label>
													<Input
														id="name"
														value={name}
														onChange={(e) => setName(e.target.value)}
														required
													/>
												</div>
												<div className="space-y-2">
													<label
														htmlFor="email"
														className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													>
														Email
													</label>
													<Input
														id="email"
														type="email"
														value={email}
														onChange={(e) => setEmail(e.target.value)}
														required
													/>
												</div>
											</div>
											<div className="space-y-2">
												<label
													htmlFor="subject"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Subject
												</label>
												<Input
													id="subject"
													value={subject}
													onChange={(e) => setSubject(e.target.value)}
													required
												/>
											</div>
											<div className="space-y-2">
												<label
													htmlFor="message"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Message
												</label>
												<Textarea
													id="message"
													value={message}
													onChange={(e) => setMessage(e.target.value)}
													className="min-h-[120px]"
													required
												/>
											</div>
											<Button type="submit" className="w-full">
												{submitted ? (
													<span className="flex items-center gap-2">
														<CheckCircle className="h-4 w-4" />
														Message Sent
													</span>
												) : (
													'Send Message'
												)}
											</Button>
										</form>
									</TabsContent>
									<TabsContent value="ticket" className="space-y-4 pt-4">
										<form className="space-y-4">
											<div className="grid gap-4 sm:grid-cols-2">
												<div className="space-y-2">
													<label
														htmlFor="ticket-name"
														className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													>
														Name
													</label>
													<Input id="ticket-name" required />
												</div>
												<div className="space-y-2">
													<label
														htmlFor="ticket-email"
														className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
													>
														Email
													</label>
													<Input id="ticket-email" type="email" required />
												</div>
											</div>
											<div className="space-y-2">
												<label
													htmlFor="ticket-subject"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Subject
												</label>
												<Input id="ticket-subject" required />
											</div>
											<div className="space-y-2">
												<label
													htmlFor="ticket-priority"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Priority
												</label>
												<select
													id="ticket-priority"
													className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
												>
													<option value="low">Low</option>
													<option value="medium">Medium</option>
													<option value="high">High</option>
													<option value="urgent">Urgent</option>
												</select>
											</div>
											<div className="space-y-2">
												<label
													htmlFor="ticket-description"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Description
												</label>
												<Textarea id="ticket-description" className="min-h-[120px]" required />
											</div>
											<div className="space-y-2">
												<label
													htmlFor="ticket-attachment"
													className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
												>
													Attachments (optional)
												</label>
												<Input id="ticket-attachment" type="file" />
											</div>
											<Button type="submit" className="w-full">
												Submit Ticket
											</Button>
										</form>
									</TabsContent>
								</Tabs>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Knowledge Base Preview */}
			<section className="bg-muted py-12 md:py-24">
				<div className="container px-4 md:px-6">
					<div className="mx-auto max-w-5xl space-y-8">
						<div className="space-y-2 text-center">
							<h2 className="text-3xl font-bold tracking-tighter">
								Popular Knowledge Base Articles
							</h2>
							<p className="text-muted-foreground">
								Browse our most popular help articles and tutorials.
							</p>
						</div>
						<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
							{[
								{
									title: 'Getting Started Guide',
									description: 'Learn the basics of our platform and how to set up your account.',
									views: 1245
								},
								{
									title: 'Advanced Features Tutorial',
									description: 'Discover advanced features and how to use them effectively.',
									views: 982
								},
								{
									title: 'API Documentation',
									description: 'Complete documentation for our API endpoints and usage examples.',
									views: 876
								},
								{
									title: 'Troubleshooting Common Issues',
									description: 'Solutions for the most common problems users encounter.',
									views: 754
								},
								{
									title: 'Security Best Practices',
									description: 'Learn how to keep your account and data secure.',
									views: 621
								},
								{
									title: 'Billing and Subscription FAQ',
									description: 'Answers to common questions about billing and subscriptions.',
									views: 543
								}
							].map((article, index) => (
								<Card key={index} className="overflow-hidden">
									<CardHeader>
										<CardTitle>{article.title}</CardTitle>
										<CardDescription>{article.description}</CardDescription>
									</CardHeader>
									<CardFooter className="flex justify-between text-sm text-muted-foreground">
										<span>{article.views} views</span>
										<Button variant="link" className="p-0">
											Read More
										</Button>
									</CardFooter>
								</Card>
							))}
						</div>
						<div className="flex justify-center">
							<Button variant="outline">View All Articles</Button>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default Support;
