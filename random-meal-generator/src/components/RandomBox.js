import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
const TitleStyled = styled.h1`
  margin-bottom: 0;
  font-size: 3rem;
  color: #000000c2;
  margin-top: 0;
  @media (max-width: 414px) {
    font-size: 2.5rem;
  }
`;

const SubTitleStyled = styled.p`
  font-size: 1.8rem;
  margin-top: 0;
  @media (max-width: 414px) {
    font-size: 1.7rem;
  }
`;

const GetMealStyled = styled.button`
  font-weight: 800;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.5rem;
  cursor: pointer;
  border-radius: 1rem;
  background: orange;
  color: white;
  transition: 0.4s;
  outline: none;
  &:hover {
    background: #ff2f00;
  }
`;

function RandomBox({ setMeal, setLoading }) {
  const OnclickMeal = async () => {
    setMeal(1);
    setLoading(true);
    try {
      const randomMeal = await fetch(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      ).then((response) => response.json());
      await setMeal(randomMeal.meals[0]);
    } catch (error) {
      setMeal(null);
    }
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };
  return (
    <div style={{ textAlign: "center", marginBottom: "3rem" }}>
      <TitleStyled>Feeling hungry?</TitleStyled>
      <SubTitleStyled>Get a random meal by clicking below</SubTitleStyled>
      <Link to="/meal">
        <GetMealStyled onClick={() => OnclickMeal()}>Get Meal 🍔</GetMealStyled>
      </Link>
    </div>
  );
}

export default RandomBox;
