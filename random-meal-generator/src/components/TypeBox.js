import React from "react";
import styled from "styled-components";

const ImageStyled = styled.img`
  width: 30%;
`;

const TitleStyled = styled.p`
  font-weight: 700;
  margin-top: 0;
  margin-bottom: 0;
  font-size: 2rem;
  color: #000000c2;
`;

const ContentStyled = styled.p`
  margin-top: 0;
  text-decoration: underline;
`;

function TypeBox({ image, title, content, width }) {
  return (
    <div style={{ textAlign: "center" }}>
      <ImageStyled src={image} alt="category icon" style={{ width }} />
      <TitleStyled>{title}</TitleStyled>
      <ContentStyled>{content}</ContentStyled>
    </div>
  );
}

export default TypeBox;
