import React from 'react'
import { animateScroll as scroll } from 'react-scroll'
import { FaFacebook, FaInstagram, FaYoutube, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { FooterContainer, FooterLink, FooterLinkItems, FooterLinksContainer, FooterLinksWrapper, FooterLinkTitle, FooterWrap, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterElements'

const Footer = () => {
    const toggleHome = () => {
        scroll.scrollToTop();
    }
    return (
        <FooterContainer>
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>About Me</FooterLinkTitle>
                               <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Skills</FooterLink>
                               <FooterLink to="/signin">Achievements</FooterLink>                          
                       </FooterLinkItems>
                       <FooterLinkItems>
                           <FooterLinkTitle>Professional Life</FooterLinkTitle>
                           <FooterLink to="/signin">Careers</FooterLink>
                               <FooterLink to="/signin">Skills</FooterLink>
                               <FooterLink to="/signin">Achievements</FooterLink>                       
                       </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                       <FooterLinkItems>
                           <FooterLinkTitle>Contact Me</FooterLinkTitle>
                               <FooterLink to="/signin">Instagram</FooterLink>
                               <FooterLink to="/signin">FaceBook</FooterLink>
                               <FooterLink to="/signin">Instagram</FooterLink>
                               <FooterLink to="/signin">Whatsapp</FooterLink>
                               <FooterLink to="/signin">Github Repo</FooterLink>                          
                       </FooterLinkItems>
                    </FooterLinksWrapper>
                </FooterLinksContainer>
                <SocialMedia>
                    <SocialMediaWrap>
                        <SocialLogo to="/" onClick={toggleHome}>Web Name</SocialLogo>
                        <WebsiteRights>Web Name © {new Date().getFullYear()} 
                         All rights reserved
                        </WebsiteRights>
                        <SocialIcons>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Facebook">
                                <FaFacebook />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Instagram">
                                <FaInstagram />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Youtube">
                                <FaYoutube />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="Twitter">
                                <FaTwitter />
                            </SocialIconLink>
                            <SocialIconLink href="/" target="_blank"
                            aria-label="LinkedIn">
                                <FaLinkedin />
                            </SocialIconLink>
                        </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
