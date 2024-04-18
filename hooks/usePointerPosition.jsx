'use client';
import React, { useState, useEffect } from 'react';
import { useMotionValue, useSpring, useTransform } from 'framer-motion';

const usePointerPosition = () => {
	const x = useMotionValue(0);
	const y = useMotionValue(0);

	const springConfig = { damping: 100, stiffness: 300 }; // Adjust these values to change the animation

	const springX = useSpring(x, springConfig);
	const springY = useSpring(y, springConfig);

	const springXValue = useTransform(springX, (value) => value);

	const [position, setPosition] = useState({ x: 0, y: 0 });

	useEffect(() => {
		const handleMouseMove = (e) => {
			x.set(e.clientX);
			y.set(e.clientY);
		};

		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);

	useEffect(() => {
		return springX.on('change', (latest) => {
			setPosition((prev) => ({ ...prev, x: latest }));
		});
	}, []);

	return {
		x: Math.round(springX.get()),
		y: Math.round(springY.get()),
	};
};

export default usePointerPosition;
