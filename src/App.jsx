import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Posts from "./Posts/Posts";
import Contact from "./Contact/Contact";
import BlogPage from "./BlogPage/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/blog_post" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>

  );
}

export default App;
