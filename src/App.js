import "./App.scss";
import Brief from "./components/Brief/Brief";
import Header from "./components/Header/Header";
import LatestCreations from "./components/LatestCreations/LatestCreations";
import Reviews from "./components/Reviews/Reviews";
import Stats from "./components/Stats/Stats";
import ThingsToDo from "./components/ThingsToDo/ThingsToDo";

function App() {
  return (
    <div>
      <Header />
      <Brief />
      <Stats />
      <ThingsToDo />
      <Reviews />
      <LatestCreations />
    </div>
  );
}

export default App;
