'use client';
import { useEffect, useState } from 'react';
import { Box, Hide } from '@chakra-ui/react';
import { useSelector } from 'react-redux';

import { motion } from 'framer-motion';
import { useAppSelector } from '../../hooks';

const CIRCLE_SIZE = '44px';
const CIRCLE_COLOR = 'rgba(11, 197, 234, 0.4)';
const CIRCLE_BLUR = '1.2px';
const POINTER_DISTANCE = 21;
const POINTER_SPEED = 0.2;

const CircleFollow = () => {
	const { size, invert, contrast, hue } = useAppSelector(state => state.cursor);
	const [position, setPosition] = useState({ x: 0, y: 0 });
	const [targetPosition, setTargetPosition] = useState({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const handleMouseMove = event => {
			setTargetPosition({ x: event.clientX, y: event.clientY });
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		let requestId;

		const updatePosition = () => {
			setPosition(prevPosition => ({
				x: prevPosition.x + (targetPosition.x - prevPosition.x) * POINTER_SPEED,
				y: prevPosition.y + (targetPosition.y - prevPosition.y) * POINTER_SPEED,
			}));

			requestId = requestAnimationFrame(updatePosition);
		};

		requestId = requestAnimationFrame(updatePosition);

		return () => cancelAnimationFrame(requestId);
	}, [targetPosition]);

	return (
		<Hide below='md'>
			<Box
				backgroundBlendMode='difference'
				as={motion.div}
				animate={{
					width: size,
					height: size,
					backgroundColor: CIRCLE_COLOR,
					backdropFilter: `blur(${CIRCLE_BLUR}) hue-rotate(${hue}) contrast(${contrast}) invert(${invert}) saturate(0)`,
				}}
				transition={{
					duration: '2s',
					delay: '3s',
					ease: 'easeInOut',
					type: 'spring',
					stiffness: 300,
					damping: '300',
				}}
				borderRadius='full'
				position='fixed'
				zIndex={9999}
				left={position.x - POINTER_DISTANCE}
				top={position.y - POINTER_DISTANCE}
				pointerEvents='none' // This line allows clicks to pass through the circle
			/>
		</Hide>
	);
};

export default CircleFollow;
