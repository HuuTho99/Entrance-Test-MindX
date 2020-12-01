import React from "react";
import Meal from "../components/Meal";
import MealSkeleton from "../components/MealSkeleton";
import RandomBox from "../components/RandomBox";

function MealPage({ loading, meal, setMeal, setLoading }) {
  return (
    <>
      {loading ? <MealSkeleton /> : null}

      <div style={{ opacity: loading ? 0 : 1 }}>
        {meal ? (
          <Meal meal={meal}>
            <RandomBox
              setMeal={(value) => setMeal(value)}
              setLoading={(value) => setLoading(value)}
            />
          </Meal>
        ) : null}
      </div>
    </>
  );
}

export default MealPage;
