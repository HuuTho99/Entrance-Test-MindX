import React from "react";
import styled from "styled-components";

const StartStyled = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const BannerStyled = styled.img`
  margin-bottom: 3rem;
  width: 99%;
  border: 1px solid #0000001f;
  border-radius: 1rem;
`;

function Start({ children }) {
  return (
    <StartStyled>
      <div>
        <BannerStyled
          src="https://www.horizonhomecareandhospice.org/content/mow%20logo.jpg"
          alt="banner"
        />
        {children}
      </div>
    </StartStyled>
  );
}

export default Start;
