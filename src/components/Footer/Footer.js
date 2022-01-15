import React from 'react';
import {
	FooterLogo,
	FooterRights,
	FooterSocialIcon,
	FooterWrapper,
	FooterColumn,
	FooterGrid,
} from './FooterStyles';
import { footerSocialData } from '../../data/FooterData';
import { Row, Section } from '../../globalStyles';

function Footer() {
	return (
		<Section padding="4rem 0 2rem 0">
			<FooterWrapper>
				<FooterGrid justify="space-between">
					<FooterColumn id="footerLogo">
						<Row align="center" margin="auto  0 0 0" gap="1rem">
							{footerSocialData.map((social, index) => (
								<FooterSocialIcon
									key={index}
									href="/"
									target="_blank"
									aria-label={social.name}
								>
									{social.icon}
								</FooterSocialIcon>
							))}
						</Row>
						<FooterLogo to="/">
							#ZILLAZ
						</FooterLogo>
					</FooterColumn>
				</FooterGrid>
				<FooterRights> © 2021 #ZILLAZ - NFTs minted on Hedera</FooterRights>
			</FooterWrapper>
		</Section>
	);
}

export default Footer;
