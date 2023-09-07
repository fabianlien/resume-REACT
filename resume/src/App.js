import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Contact from "./pages/Contact";
import Github from "./pages/Github";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Route, Routes, Navigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import Container from "react-bootstrap/Container";

function App() {
  return (
    <Container fluid="xl" className="p-0">
      <Nav />
      <Routes>
        <Route exact path="/" element={<Navigate to="/home" />} />
        <Route exact path="/home" element={<Home />} />
        <Route exact path="/resume" element={<Resume />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/github" element={<Github />} />
      </Routes>
      <Footer />
    </Container>
  );
}

export default App;
