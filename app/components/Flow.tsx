import React from 'react';
import { Container } from './ui/Container';
import { flowSteps, whatToBring, flowInfo, flowConfig } from '../data/flow';

export const Flow: React.FC = () => {
	return (
		<section id='flow' className={flowConfig.styles.container}>
			<Container>
				{/* Hero Section */}
				<div className={flowConfig.styles.hero.container}>
					<h2 className={flowConfig.styles.hero.title}>
						{flowConfig.hero.title}
					</h2>
					<p className={flowConfig.styles.hero.subtitle}>
						{flowConfig.hero.subtitle}
					</p>
				</div>

				{/* Timeline */}
				<div className={flowConfig.styles.timeline.container}>
					{/* Timeline Line */}
					<div className={flowConfig.styles.timeline.line} />

					<div className={flowConfig.styles.timeline.stepsContainer}>
						{flowSteps.map((step, index) => (
							<div
								key={step.number}
								className={flowConfig.styles.step.container}
							>
								{/* Step Number */}
								<div className={flowConfig.styles.step.number}>
									{step.number}
								</div>

								{/* Step Content */}
								<div className={flowConfig.styles.step.content}>
									<h3 className={flowConfig.styles.step.title}>{step.title}</h3>
									<p className={flowConfig.styles.step.description}>
										{step.description}
									</p>
									<p className={flowConfig.styles.step.details}>
										{step.details}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>

				{/* What to Bring & Info */}
				<div className={flowConfig.styles.info.container}>
					{/* What to Bring - Big Card */}
					<div className={flowConfig.styles.info.bigCard}>
						<h3 className={flowConfig.styles.info.title}>Что взять с собой</h3>
						<div className={flowConfig.styles.whatToBring.container}>
							{whatToBring.map((item, index) => (
								<div key={index} className={flowConfig.styles.whatToBring.item}>
									<div className={flowConfig.styles.whatToBring.bullet} />
									<div className='flex-1'>
										<div className={flowConfig.styles.whatToBring.itemTitle}>
											{item.item}
										</div>
										<div
											className={flowConfig.styles.whatToBring.itemDescription}
										>
											{item.description}
										</div>
									</div>
								</div>
							))}
						</div>
					</div>

					{/* Info Cards Container - 4 Small Cards */}
					<div className={flowConfig.styles.info.smallCardsContainer}>
						{flowInfo.map((info, index) => (
							<div key={index} className={flowConfig.styles.info.smallCard}>
								<div className='flex items-center space-x-2 mb-2'>
									<span className='text-lg sm:text-xl'>{info.icon}</span>
									<h4 className={flowConfig.styles.info.smallTitle}>
										{info.title}
									</h4>
								</div>
								<p className='text-xs sm:text-sm text-earth-brown leading-relaxed'>
									{info.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</Container>
		</section>
	);
};
