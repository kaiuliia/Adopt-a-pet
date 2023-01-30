import HomePage from "./pages/home";
import SearchPage from "./pages/search";
import PetDetailsPage from "./pages/detail";
import PetDetailsNotFound from "./pages/petDetailsNotFound";
import Navigation from "./components/navigation";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <Navigation />
      <HomePage />
      <Routes>
        <Route path="/:type/:id" element={<PetDetailsPage />} />
        <Route path="/:type?" element={<HomePage />} />

        <Route path="/pet-details-not-found" element={<PetDetailsNotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
