import { Container, Divider, Grid } from "@material-ui/core";
import {
  Facebook,
  GitHub,
  LinkedIn,
  Twitter,
  YouTube,
} from "@material-ui/icons";
import React from "react";
import styled from "styled-components";

const BoxStyled = styled.div`
  width: 100%;
  background: #484545;
  margin-top: 2rem;
  padding: 2rem 0;
`;

const TitleStyled = styled.p`
  font-size: 2rem;
  font-weight: 800;
  color: #ffffffe0;
`;

const ContentStyled = styled.p`
  color: #ffffffe0;
`;

const ReferenceLinkStyled = styled.a`
  font-size: 1.5rem;
  font-weight: 600;
  color: #ffffffe0;
  display: block;
  margin-bottom: 1rem;
`;

const RegisterTitleStyled = styled.p`
  margin: 0.5rem 1rem;
  font-size: 2rem;
  font-weight: 500;
  color: #ffffffe0;
  @media (max-width: 414px) {
    font-size: 1.5rem;
    margin-left: 0;
  }
`;

const SignUpBoxStyled = styled.div`
  display: flex;
  justify-content: center;
`;

const SignUpButtonStyled = styled.button`
  border: none;
  font-size: 1.5rem;
  font-weight: 800;
  background: orange;
  color: white;
  border-radius: 1rem;
  cursor: pointer;
  padding: 0 2rem;
  transition: 0.4s;
  outline: none;
  &:hover {
    background: #ff2f00;
  }
`;

const SocialButtonStyled = styled.div`
  padding: 0.7rem;
  background: #3a589e;
  border-radius: 50%;
  margin-right: 0.5rem;
  cursor: pointer;
  transition: 0.4s;
  &:hover {
    transform: scale(1.3);
  }
`;

function Footer() {
  return (
    <BoxStyled>
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item sm={6}>
            <TitleStyled>RANDOM MEALS</TitleStyled>
            <ContentStyled>
              Millions of our grandmothers and grandfathers are setting the
              table for one this holiday season. They are more isolated and more
              alone than ever. Older adults are unable to see their own friends,
              family, neighbors and loved ones as they try to stay protected
              from COVID-19 – which shows no signs of slowing. You can deliver
              humanity to struggling seniors with a gift today.
            </ContentStyled>
          </Grid>
          <Grid item sm={6}>
            <TitleStyled>REFERENCE SOURCES</TitleStyled>
            <ReferenceLinkStyled
              target="blank"
              href="https://vi-vn.facebook.com/"
            >
              FaceBook
            </ReferenceLinkStyled>
            <ReferenceLinkStyled target="blank" href="https://www.youtube.com/">
              Youtube
            </ReferenceLinkStyled>
            <ReferenceLinkStyled target="blank" href="https://twitter.com/">
              Twitter
            </ReferenceLinkStyled>
          </Grid>
        </Grid>
      </Container>
      <Divider
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
        light={false}
      />
      <SignUpBoxStyled>
        <RegisterTitleStyled>Register For Free</RegisterTitleStyled>
        <SignUpButtonStyled>Sign Up</SignUpButtonStyled>
      </SignUpBoxStyled>
      <Divider
        style={{ marginBottom: "1rem", marginTop: "1rem" }}
        light={false}
      />
      <SignUpBoxStyled>
        <SocialButtonStyled>
          <Facebook
            style={{ color: "white", background: "#3a589e" }}
            fontSize="large"
          />
        </SocialButtonStyled>
        <SocialButtonStyled style={{ background: "#e62117" }}>
          <YouTube
            style={{ color: "white", background: "#e62117" }}
            fontSize="large"
          />
        </SocialButtonStyled>
        <SocialButtonStyled style={{ background: "#08a0e9" }}>
          <Twitter
            style={{ color: "white", background: "#08a0e9" }}
            fontSize="large"
          />
        </SocialButtonStyled>
        <SocialButtonStyled style={{ background: "#0077b5" }}>
          <LinkedIn
            style={{ color: "white", background: "#0077b5" }}
            fontSize="large"
          />
        </SocialButtonStyled>
        <SocialButtonStyled style={{ background: "#211f1f" }}>
          <GitHub
            style={{ color: "white", background: "#211f1f" }}
            fontSize="large"
          />
        </SocialButtonStyled>
      </SignUpBoxStyled>
    </BoxStyled>
  );
}

export default Footer;
