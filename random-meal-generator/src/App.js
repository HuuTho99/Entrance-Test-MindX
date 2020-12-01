import { useEffect, useState } from "react";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import HomePage from "./pages/Home.page";
import MealPage from "./pages/Meal.page";

function App() {
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage
              loading={loading}
              setMeal={(value) => setMeal(value)}
              setLoading={(value) => setLoading(value)}
            />
          </Route>
          <Route path="/meal" exact>
            {meal !== null ? (
              <MealPage
                loading={loading}
                meal={meal}
                setLoading={(value) => setLoading(value)}
                setMeal={(value) => setMeal(value)}
              />
            ) : (
              <Redirect to="/" />
            )}
          </Route>
        </Switch>
      </Router>

      <div style={{ opacity: loading ? 0 : 1 }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
