import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'

export const slideUp = {
	hidden: { y: 100, opacity: 0 },
	visible: (i = 0.3) => ({
		y: 0,
		opacity: 1,
		// transition: {
		// 	ease: 'easeInOut',
		// 	duration: 0.6,
		// 	delay: i,
		// },
	}),
}

export const fadeIn = {
	hidden: { opacity: 0 },
	visible: (i = 0) => ({
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.6,
			delay: i,
		},
	}),
}

export const slideToRight = {
	hidden: { x: -100, opacity: 0 },
	visible: (i = 0) => ({
		x: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.6,
			delay: i,
		},
	}),
}

export const slideToLeft = {
	hidden: { x: 100, opacity: 0 },
	visible: (i = 0) => ({
		x: 0,
		opacity: 1,
		transition: {
			ease: 'easeInOut',
			duration: 0.6,
			delay: i,
		},
	}),
}

export const slideDown = {
	hidden: { y: -100, opacity: 0 },
	visible: (i = 0) => ({
		y: 0,
		opacity: 1,
		// transition: {
		// 	ease: 'easeInOut',
		// 	duration: 0.6,
		// 	delay: i,
		// },
	}),
}

export const animateList = {
	visible: (i = 0.3) => ({
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1,
			delay: i * 1,
		},
	}),
	hidden: {
		opacity: 0,
		transition: {
			when: 'afterChildren',
		},
	},
}

export const itemSlideLeft = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.6,
		},
	},
	hidden: { opacity: 0, x: 100 },
}

export const itemSlideRight = {
	visible: {
		opacity: 1,
		x: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.6,
		},
	},
	hidden: { opacity: 0, x: -100 },
}

export const itemSlideUp = {
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			ease: 'easeInOut',
			duration: 0.6,
		},
	},
	hidden: { opacity: 0, y: 100 },
}

export const ScrollReveal = ({
	children,
	className = null,
	variants,
	custom = 0.1,
}) => {
	const controls = useAnimation()
	const [ref, inView] = useInView({
		threshold: 0.1,
	})

	useEffect(() => {
		if (inView) {
			controls.start('visible')
		}
	}, [controls, inView])

	return (
		<motion.div
			ref={ref}
			animate={controls}
			initial="hidden"
			variants={variants}
			custom={custom}
			className={className}
		>
			{children}
		</motion.div>
	)
}