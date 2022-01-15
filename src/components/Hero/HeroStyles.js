import styled from 'styled-components';
import { Button, Heading } from '../../globalStyles';
import { motion } from 'framer-motion';

export const HeroSection = styled.section`
	height: 100vh;
	background-position: center;
	background-size: cover;
	padding-top: clamp(70px, 25vh, 220px);
	box-shadow: inset 0 0 0 1000px rgba (0, 0, 0, 0.2);
	margin-top: 75px;
`;

export const HeroVideo = styled.video`
	object-fit: cover;
	width: 100%;
	height: 100%;
	top: 0;
	position: fixed;
	z-index: -1;
	opacity: 1;

	@media screen and (max-width: 960px) {
		width:auto%;
        height: 100%;
	}
	
`;

export const MainHeadingAnimated = styled(motion.div)`
	display: flex;
	flex-flow: column;
	justify-content: center;
	align-items: center;
	background: none;
	border-radius: 20px;
`;

export const HeroText = styled.p`
	margin-bottom: 20px;
	font-size: clamp(0.9rem, 2vw, 1.5rem);
	line-height: 24px;
	text-align: center;
	letter-spacing: 2px;
	color: #333;
	
`;

export const HeroHeading = styled(Heading)`
	margin-bottom: 2px;
	font-size: clamp(0.9rem, 1.5vw, 1.0rem);
	line-height: 20px;
	text-align: center;
	letter-spacing: 20px;
	color: #333;
	
`;

export const ButtonWrapper = styled.div`
	width: 100%;
	display: flex;
	justify-content: center;
	flex-flow: wrap;
	gap: 0.5rem;
`;

export const HeroButton = styled(Button)`
	color: black;
	border: 333;

	&:before {
		background: #fff;
		height: 500%;
	}

	&:hover:before {
		height: 0%;
	}

	&:hover {
		color: white;
	}
`;


export const ButtonContainer = styled.div`
	position: relative;
	display: flex;
	height: 170px;
`;

export const ButtonWrapper2 = styled.div`
	position: absolute;
	height: 100vh;
	width: 100%;
	left: 0;
	top: 0;
`;

export const HeroButton2 = styled(motion.button)`
	position: absolute;
	width: 10px;
	height: 10px;
	margin: 0 auto;
	padding-bottom: 100px
	bottom: calc(100vh - 100px);
	right: 92%;
	bottom: 90%;
	transform: translate(50%);
	font-weight: 700;
	font-size: 0.688rem;
	line-height: 18px;
	letter-spacing: 1.54px;
	text-transform: uppercase;
	border-radius: 50%;
	border: none;
	background-color: rgba(255,255,255, 0.75);
	color: #800000;
	cursor: pointer;
	transition: all 0.4s ease-in;
	&.corner {
		position: fixed;
		bottom: 3rem;
		right: 3rem;
		width: 24px;
		height: 24px;
		padding: 0px;
		background-color: #660066;
		border-radius: 50%;
	}
	&:hover {
		box-shadow: 0 0 9px 9px #5238b1;
		transition: box-shadow 0.3s ease-in;
	}
`;