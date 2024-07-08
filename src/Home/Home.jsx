import CarouselDisplay from "./Carousel/Carousel";
import Articles from "./Articles"

// import Articles from "./Articles";

function Home() {
  return (
    <div className="w-screen flex flex-col justify-center items-center mt-6 ">
      <CarouselDisplay />
      <Articles />
    </div>
  );
}

export default Home;
