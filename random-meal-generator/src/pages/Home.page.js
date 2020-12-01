import React from "react";
import RandomBox from "../components/RandomBox";
import Start from "../components/Start";
import StartSkeleton from "../components/StartSkeleton";

function HomePage({ loading, setMeal, setLoading }) {
  return (
    <>
      {loading ? (
        <StartSkeleton />
      ) : (
        <Start>
          <RandomBox
            setMeal={(value) => setMeal(value)}
            setLoading={(value) => setLoading(value)}
          />
        </Start>
      )}
    </>
  );
}

export default HomePage;
