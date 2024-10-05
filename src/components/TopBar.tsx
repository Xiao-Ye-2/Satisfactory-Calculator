// components/TopBar.tsx
import { useState } from 'react';
import { useRouter } from 'next/router'; // Import useRouter for navigation
import styles from './TopBar.module.css'; // Import as CSS Module

export const TopBar: React.FC = () => {
	const router = useRouter(); // Initialize router
	const [selectedPage, setSelectedPage] = useState('home');
	const [selectedLanguage, setSelectedLanguage] = useState('en');

	const handlePageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
		const selectedValue = e.target.value;
		setSelectedPage(selectedValue);

		// Use router to navigate to the selected page
		if (selectedValue !== 'home') {
			router.push(`/${selectedValue}`);
		} else {
			router.push('/');
		}
  	};

	const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
			setSelectedLanguage(e.target.value);
			// Logic to change the language can be added here
	};

	return (
		<div className="top-bar">
			<select value={selectedPage} onChange={handlePageChange}>
				<option value="home">Home</option>
				<option value="products">Products</option>
				<option value="recipes">Recipes</option>
				<option value="machines">Machines</option>
			</select>

			<select value={selectedLanguage} onChange={handleLanguageChange}>
				<option value="en">English</option>
				<option value="zh-cn">Simplified Chinese</option>
				{/* Add more languages here */}
			</select>
		</div>
	);
};
