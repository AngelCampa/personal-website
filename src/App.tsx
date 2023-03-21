import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Landing from "./components/LandingPage";
import PersonalProjects from "./pages/PersonalProjects";
import Experience from "./pages/Experience";
import Education from "./pages/Education";

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/projects" element={<PersonalProjects />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
