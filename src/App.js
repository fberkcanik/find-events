import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Location from "./pages/Location";
import Favorites from "./pages/Favorites";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/locations" element={<Location />} />
      <Route path="/events/:id" element={<EventDetail />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
