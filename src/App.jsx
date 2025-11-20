import { Routes, Route } from "react-router-dom";
import Favorites from "./pages/Favorites.jsx";
import Cart from "./pages/Cart.jsx";
import Ring from "./pages/Ring.jsx";
import Nacklace from "./pages/Nacklace.jsx";
import Mangalsutra from "./pages/Mangalsutra.jsx";
import Earrings from "./pages/Earrings.jsx";
import Bracelets from "./pages/Bracelets.jsx";
import Gifts from "./pages/Gifts.jsx";
import Home from "./pages/Home.jsx";
import Detail from "./pages/PDetail.jsx";
import AngaraNews from "./pages/news.jsx";
import whatapp from "./assets/Whatsapp.png";
import Register from "./pages/register.jsx";
import Navbar from "./component/Navbar.jsx";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Favorites" element={<Favorites />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/rings" element={<Ring />} />
        <Route path="/necklaces" element={<Nacklace />} />
        <Route path="/mangalsutra" element={<Mangalsutra />} />
        <Route path="/earrings" element={<Earrings />} />
        <Route path="/bracelets" element={<Bracelets />} />
        <Route path="/gifts" element={<Gifts />} />
        <Route path="/Detail/:id" element={<Detail />} />
        <Route path="/AngaraNews" element={<AngaraNews />} />
        <Route path="/Register" element={<Register />} />
      </Routes>
      <a href="https://api.whatsapp.com/send?phone=917666666061&text=Hi">
        <img
          src={whatapp}
          alt="logo"
          className="bg-green-500 p-3 fixed right-4 bottom-16 rounded-4xl w-16 h-16"
        />
      </a>
    </>
  );
}

export default App;
