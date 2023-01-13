import HomePage from './pages/home';
import SearchPage from './pages/search';
import PetDetailsPage from './pages/detail';
import PetDetailsNotFound from './pages/petDetailsNotFound';
import Navigation from './components/navigation';
import { BrowserRouter, Route, Routes, Router, Link } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <HomePage />
        <Routes>
          <Route path="/:type?" element={<HomePage />} />
       
        </Routes>
      </div>
    </BrowserRouter>
  );
}


 
 

export default App;
