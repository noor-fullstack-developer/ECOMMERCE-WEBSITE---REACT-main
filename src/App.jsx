import { Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar";
import Favorites from "./pages/Favorites.jsx";
import ShoppingBag from "./pages/Shoppingbag.jsx";
import Ring from "./pages/Ring";
import Nacklace from "./pages/Nacklace";
import Mangalsutra from "./pages/Mangalsutra";
import Earrings from "./pages/Earrings";
import Bracelets from "./pages/Bracelets";
import Gifts from "./pages/Gifts";
import Home from "./pages/home";
import Detail from "./pages/PDetail.jsx";
import AngaraNews from "./pages/news.jsx";

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/AngaraNews" element={<AngaraNews />} />
        <Route path="/Detail" element={<Detail />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/ShoppingBag" element={<ShoppingBag />} />
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
