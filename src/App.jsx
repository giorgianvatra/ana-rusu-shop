import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./Home/Home";
import AboutMe from "./AboutMe/AboutMe";
import Posts from "./Posts/Posts";
import BlogPage from "./BlogPage/BlogPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Banner from "./Home/Banner/Banner";
import AdminPage from "./AdminPage/AdminPage";
import EditComponentForm from "./AdminPage/EditComponentForm";

function App() {
  return (
    <div className="min-w-screen min-h-screen flex flex-col">
      <BrowserRouter>
        <Navbar />
        <Banner/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about_me" element={<AboutMe />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/blog_post" element={<BlogPage />} />
          <Route path="/admin" element={<AdminPage />} />   
          <Route path="/edit_article" element={<EditComponentForm />} />
   </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
