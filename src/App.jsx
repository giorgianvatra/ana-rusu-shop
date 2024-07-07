import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Posts from "./Posts/Posts";
import BlogPage from "./BlogPage/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="min-w-screen min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/blog_post" element={<BlogPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
