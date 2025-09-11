import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Cart from "./pages/Cart";
import Ring from "./pages/Ring";
import Nacklace from "./pages/Nacklace";
import Mangalsutra from "./pages/Mangalsutra";
import Earrings from "./pages/Earrings";
import Bracelets from "./pages/Bracelets";
import Gifts from "./pages/Gifts";
import Home from "./pages/home";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/rings" element={<Ring />} />
        <Route path="/necklaces" element={<Nacklace />} />
        <Route path="/mangalsutra" element={<Mangalsutra />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
