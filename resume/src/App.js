import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path= "/contact" element={<Contact />} />
        <Route exact path= "/github" element={<Github />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
