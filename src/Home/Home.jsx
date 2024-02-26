import Banner from "./Banner/Banner";
import CarouselDisplay from "./Carousel/Carousel";
// import Articles from "./Articles";

function Home() {
  return (
    <div className="w-screen flex flex-col justify-center items-center">
      <Banner />
      <CarouselDisplay />
      {/* <Articles /> */}
    </div>
  );
}

export default Home
