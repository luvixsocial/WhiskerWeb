'use client';
import { useState, useEffect } from 'react';

interface LoadingProps {
	onClose: () => void;
}

const Loading: React.FC<LoadingProps> = ({ onClose }) => {
	const words: string[] = [
		'Hello',
		'નમસ્તે',
		'CIAO',
		'こんにちは',
		'Hola',
		'안녕',
		'Bonjour',
		'Olá',
		'Hallo',
		'你好',
		'नमस्ते'
	];

	const [index, setIndex] = useState(0);
	const [word, setWord] = useState(words[index]);
	const [intervalDuration, setIntervalDuration] = useState(200);

	useEffect(() => {
		const switchWord = () => {
			setIntervalDuration(200 - index * 10);

			if (index >= words.length - 1) {
				setTimeout(() => {
					onClose();
				}, 2000);
			} else setIndex((prevIndex) => prevIndex + 1);

			setWord(words[index]);
		};

		const run = setInterval(switchWord, intervalDuration);
		return () => clearInterval(run);
	}, [index, intervalDuration, words]);

	useEffect(() => {
		document.body.addEventListener('click', onClose);
		return () => document.body.removeEventListener('click', onClose);
	}, []);

	return (
		<div className="overflow-none grid min-h-screen place-items-center">
			<ol className="list-disc">
				<li className="non-italic text-5xl font-extrabold">{word}</li>
			</ol>
		</div>
	);
};

export default Loading;