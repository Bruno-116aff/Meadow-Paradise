export const scrollToSection = (sectionId: string, offset: number = 80) => {
	const element = document.getElementById(sectionId);
	if (element) {
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.pageYOffset - offset;

		window.scrollTo({
			top: offsetPosition,
			behavior: 'smooth',
		});
	}
};

export const debounce = <T extends (...args: any[]) => any>(
	func: T,
	wait: number
): ((...args: Parameters<T>) => void) => {
	let timeout: NodeJS.Timeout;
	return (...args: Parameters<T>) => {
		clearTimeout(timeout);
		timeout = setTimeout(() => func(...args), wait);
	};
};
