import Header from "./Header.jsx";
import Cursor from "./Cursor.jsx";
import Footer from "./footer.jsx";
import LandingPage from "./LandingPage.jsx";
import Proj1 from "./Work/Proj1.jsx";
import Proj2 from "./Work/Proj2.jsx";
import Proj3 from "./Work/Proj3.jsx";
import About from "./About.jsx";
import ScrollToTop from "./components/ScrollToTop.jsx";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Cursor />
      <ScrollToTop/>
      <Header />

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/wds" element={<Proj1 />} />
        <Route path="/vsa" element={<Proj2 />}/>
        <Route path="/wits" element={<Proj3 />}/>
        <Route path="/about" element={<About />}/>
      </Routes>
        <Footer/>
    </Router>
  );
}

export default App;
