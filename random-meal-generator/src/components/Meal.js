import React, { useEffect, useState } from "react";
import { Container, Divider, Grid } from "@material-ui/core";
import styled from "styled-components";
import TypeBox from "./TypeBox";
import ReactPlayer from "react-player";

const ImageStyled = styled.img`
  width: 100%;
  border-radius: 1rem;
`;

const TitleStyled = styled.h2`
  color: #000000c2;
  font-size: 2rem;
  margin-top: 0;
  text-align: center;
`;

const ContentStyled = styled.p`
  font-size: 1.5rem;
  letter-spacing: -1px;
  text-shadow: 0px 1px 0px rgba(255, 255, 255, 1);
`;

const IngredientLeftStyled = styled.p`
  text-align: left;
  border: 1px solid #00000029;
  padding: 1rem;
  font-size: 1.5rem;
  border-top-right-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  color: #000000c2;
  margin: 0;
`;
const IngredientRightStyled = styled.p`
  text-align: right;
  border: 1px solid #00000029;
  padding: 1rem;
  font-size: 1.5rem;
  border-top-left-radius: 1rem;
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
  color: #000000c2;
  margin: 0;
`;

function Meal({ children, meal }) {
  const [widthYtb, setWidthYtb] = useState(window.screen.width);
  const arr = [
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
    10,
    11,
    12,
    13,
    14,
    15,
    16,
    17,
    18,
    19,
  ];
  useEffect(() => {
    window.addEventListener("resize", function () {
      setWidthYtb(window.screen.width);
    });
    return () => {
      window.removeEventListener("resize", function () {
        setWidthYtb(window.screen.width);
      });
    };
  }, [widthYtb]);
  return (
    <Container maxWidth="md">
      {children}
      <Grid container spacing={6}>
        <Grid item sm={6}>
          <ImageStyled src={meal.strMealThumb} alt="tho" />
        </Grid>
        <Grid item sm={6}>
          <TitleStyled>{meal.strMeal}</TitleStyled>
          <ContentStyled>{meal.strInstructions}</ContentStyled>
        </Grid>
      </Grid>
      <Divider style={{ marginBottom: "1rem" }} />
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4}>
          <TypeBox
            image="https://img.icons8.com/ios/452/run-command.png"
            title="Category"
            content={meal.strCategory}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TypeBox
            image="https://freeiconshop.com/wp-content/uploads/edd/location-marker-outline.png"
            title="Area"
            content={meal.strArea}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TypeBox
            image="https://images.creativemarket.com/0.1.0/ps/7546781/300/200/m2/fpnw/wm0/label-tag-ticket-sticker-billhead-card-trademark-price-mark-badge-price-.jpg?1578371228&s=04811cefb6c21e6a848d56c68b7f7611"
            title="Tags"
            content={meal.strTags}
            width="8rem"
          />
        </Grid>
      </Grid>
      <Divider style={{ marginBottom: "1rem" }} />
      <TitleStyled>Ingredients</TitleStyled>
      <Grid container spacing={2}>
        {arr.map((item, index) => {
          let result = null;
          if (meal[`strIngredient${index}`]) {
            if (index % 2 !== 0) {
              result = (
                <Grid key={index} item xs={12} sm={6}>
                  <IngredientLeftStyled>
                    <b>{meal[`strIngredient${index}`]}</b>{" "}
                    {meal[`strMeasure1${index}`] ? ":" : null}{" "}
                    {meal[`strMeasure1${index}`]}
                  </IngredientLeftStyled>
                </Grid>
              );
            } else {
              result = (
                <Grid key={index} item xs={12} sm={6}>
                  <IngredientRightStyled>
                    {meal[`strMeasure1${index}`]}{" "}
                    {meal[`strMeasure1${index}`] ? ":" : null}{" "}
                    <b>{meal[`strIngredient${index}`]}</b>
                  </IngredientRightStyled>
                </Grid>
              );
            }
          }
          return result;
        })}
      </Grid>
      {meal.strYoutube ? (
        <>
          <Divider style={{ marginBottom: "1rem", marginTop: "1rem" }} />
          <TitleStyled>Video Recipe</TitleStyled>
        </>
      ) : null}
      <ReactPlayer
        url={meal.strYoutube}
        width="100%"
        height={meal.strYoutube ? (widthYtb < 415 ? "20rem" : "30rem") : 0}
      />
    </Container>
  );
}

export default Meal;
