import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Banner from "./Banner/Banner";
import CarouselDisplay from "./Carousel/Carousel";
import Articles from "./Articles";

function App() {
  return (
    <div className="w-screen flex flex-col justify-center items-center  ">
      <Navbar />
      <Banner />
      <CarouselDisplay />
      <Articles />
    </div>
  );
}

export default App;
