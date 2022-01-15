import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Button } from '../../globalStyles';
import {
	ContentRow,
	TextWrapper,
	TopLine,
	Heading,
	Subtitle,
	ImgWrapper,
	Img,
	BigColumn,
	SmallColumn,
	Box,
    ContentSection,
	Heading2,
} from './ContentStyles.js';
import { useInView } from 'react-intersection-observer';
import { useAnimation } from 'framer-motion';


export const heroOne = {
	id: 'about',
	inverse: true,
	bigImage: true,
	topLine: {
		text: '#ZILLAZ',
		extraText: 'ABOUT',
	},
	headline: 'GENESIS',
	description:
		'The collection will start with a mint of 333 Genesis Zillaz, each granting its holder access to special perks and accesses. Genesis Zillaz are protectors of Hedera, guardians of rare OmniCores, which can be used to breed new Zillaz. Zillaz will have a wide variety of traits, types, and different aesthetics. Holding a Genesis Zilla will reserve you a throne as a Guardian of the Metaverse.',
	buttonLabel: 'Adopt a Zilla',
	imgStart: 'start',
	img: './assets/z.png',
	bottomImg: '',
	start: 'true',
};

const Content = (props) => {
	const {
		primary,
		topLine,
		headline,
		description,
		buttonLabel,
		img,
		alt,
		start,
		bottomImg,
		linkTo,
		inverse,
		reverse,
		bigImage,
		id,
	} = props;

	const initial = { opacity: 0, y: 30 };
	const transition = { delay: 0.3, duration: 0.6 };
	const animation = useAnimation();

	const { ref, inView } = useInView({
		threshold: 0.2,
	});

	useEffect(() => {
		if (inView) {
			animation.start({
				opacity: 1,
				y: 0,
			});

			return;
		}

		animation.start({
			opacity: 0,
			y: 30,
			transition: {
				duration: 0.2,
			},
		});
	}, [inView, animation]);

	return (
		<>
			<ContentSection padding="160px 0" ref={ref} id={id}>
				<Container>
					<ContentRow reverse={reverse}>
						<SmallColumn bigImage={bigImage}>
							<TextWrapper>
							<TopLine
									initial={initial}
									transition={{ delay: 0.3, duration: 0.6 }}
									animate={animation}
								>
									{topLine.text && (
										<Box>
											<Box>{topLine.extraText}</Box>
											{topLine.text}
										</Box>
									)}
								</TopLine>
								<Heading
									initial={initial}
									transition={transition}
									animate={animation}
									inverse={inverse}
								>
									{headline}
								</Heading>
								<Subtitle
									initial={initial}
									transition={{ delay: 0.7, duration: 0.6 }}
									animate={animation}
									inverse={inverse}
								>
									{description}
								</Subtitle>

								{bottomImg ? (
									<Img
										initial={initial}
										transition={{ delay: 1, duration: 0.6 }}
										animate={animation}
										alt=""
										src={bottomImg}
									/>
								) : (
									<Link to={linkTo}>
										<Button
											initial={initial}
											transition={{ delay: 1, duration: 0.6 }}
											animate={animation}
											inbig
											fontBig
											primary={primary}
										>
											{buttonLabel}
										</Button>
									</Link>
								)}
							</TextWrapper>
						</SmallColumn>
						<BigColumn
							initial={initial}
							transition={transition}
							animate={animation}
							bigImage={bigImage}
						>
							<ImgWrapper start={start}>
								<Img src={img} alt={alt} />
							</ImgWrapper>
						</BigColumn>
					</ContentRow>
					<Heading2 inverse="inverse" id="roadmap">ROADMAP <p>Take me home country roads to the place i belong.</p></Heading2>
				</Container>
			</ContentSection>
		</>
	);
};

export default Content;