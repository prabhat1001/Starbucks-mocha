import React from "react";
import styled from "styled-components";

const FooterContainer = styled.footer`
  background-color: #082920;
  color: #cdfb4f;
  display: flex;
  justify-content: space-between;
  padding: 20px;
`;

const FooterLinks = styled.div`
  display: flex;
`;

const FooterLink = styled.a`
  color: #cdfb4f;
  margin-right: 20px;
  text-decoration: none;

  &:hover {
    color: #f1c40f;
  }
`;

const FooterText = styled.p`
  margin: 0;
`;

const Footer = () => (
  <FooterContainer>
    <FooterLinks>
      <FooterLink href="#">About Us</FooterLink>
      <FooterLink href="#">Contact Us</FooterLink>
      <FooterLink href="#">Privacy Policy</FooterLink>
    </FooterLinks>
    <FooterText>&copy; Starbucks {new Date().getFullYear()}</FooterText>
  </FooterContainer>
);

export default Footer;
