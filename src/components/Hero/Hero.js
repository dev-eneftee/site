import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, MainHeading } from '../../globalStyles';
import { GiCosmicEgg } from 'react-icons/gi';
import { useInView } from 'react-intersection-observer';
import Modal from '../Modal/Modal';
import { HeroVideo, HeroSection, HeroText, ButtonWrapper, HeroButton, HeroButton2, HeroHeading, MainHeadingAnimated, ButtonWrapper2, ButtonContainer } from './HeroStyles.js';



const Hero = () => {

    const [showModal, setShowModal] = useState(false);

	const toggleModal = () => {
		if (!showModal) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = 'visible';
		}

		setShowModal(!showModal);
	};

    const initial = {
		y: 40,
		opacity: 0,
	};
	const animate = {
		y: 0,
		opacity: 1,
	};

    const { ref, inView } = useInView({
		rootMargin: '-100px',
	});

	useEffect(() => {
		console.log(inView);
	}, [inView]);

    return (
        <>
            <HeroSection>
                <HeroVideo src="./assets/pa-4.mp4" autoPlay muted loop/>
                <Container>
                    <HeroHeading>HASHZILLAZ</HeroHeading>
                    <MainHeadingAnimated
                        initial={initial}
                        animate={animate}
                        transition={{ duration: 10 * 0.17 }}
                    >
                        <MainHeading>#ZILLAZ</MainHeading>
                    </MainHeadingAnimated>
                    <HeroText>Coming Soon</HeroText>
                    <ButtonWrapper>
                        <Link to="signup">  
                            <Button>Discord</Button>
                        </Link>
                        <HeroButton><a href="https://twitter.com/HashZillaz" target="_blank" rel="noreferrer" >Twitter</a></HeroButton>
                    </ButtonWrapper>
                    <ButtonContainer ref={ref}>
						<ButtonWrapper2>
							<HeroButton2 onClick={toggleModal} className={inView ? '' : 'corner'}>
								{inView ? (
									<>?</>
								) : (
									<GiCosmicEgg color="white" size="1.4rem" />
								)}
							</HeroButton2>
						</ButtonWrapper2>
					</ButtonContainer>
                </Container>
            </HeroSection>
            <Modal showModal={showModal} toggleModal={toggleModal} />
        </>
    );
};

export default Hero;

