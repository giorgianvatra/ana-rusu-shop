import { useState, useEffect } from "react";
import { Carousel, IconButton } from "@material-tailwind/react";
import { Link } from "react-router-dom";
import axios from "axios";

const BASE_URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA/";

const getData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

function CarouselDisplay() {
  const [id, setId] = useState(0);
  const [articles, setArticle] = useState([]);
  const [isLoading, setIsLoading] = useState(false);



  function increaseId() {
    if (id >= 2) {
      setId(0);
    } else {
      setId((i) => i + 1);
    }
  }

  function decreaseId() {
    if (id <= 0) {
      setId(2);
    } else {
      setId((i) => i - 1);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const allArticles = await getData();
        setArticle((all) => [
          ...all,
          allArticles[0],
          allArticles[1],
          allArticles[2],
        ]);
      };
      fetchData();
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  }, [id]);

  return isLoading ? (
    <div className="absolute inset-0">Loading</div>
  ) : (
    <div className="w-10/12 mt-[2rem] rounded-xl flex md:flex-col sm:flex-col justify-cente items-center w">
      <Carousel
        className="rounded-xl"
        prevArrow={({ handlePrev }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={() => {
              handlePrev();
              decreaseId();
            }}
            className="!absolute top-2/4 left-4 -translate-y-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
              />
            </svg>
          </IconButton>
        )}
        nextArrow={({ handleNext }) => (
          <IconButton
            variant="text"
            color="white"
            size="lg"
            onClick={() => {
              handleNext();
              increaseId();
            }}
            className="!absolute top-2/4 !right-4 -translate-y-2/4">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
              />
            </svg>
          </IconButton>
        )}>
        {articles.map((a, index) => (
          <img
            key={index}
            src={a.image}
            alt={`image ${index + 1}`}
            className="h-[100%] w-[100%] object-cover"
          />
        ))}
      </Carousel>

      <div className="flex flex-col justify-center items-left gap-1 p-[2rem]  ms:justify-center ms:items-center ml-[0px] w-[85vw] md:ml-10 w-[85vw] lg:ml-10 w-[60vw]">
        <h2 className="font-bold text-[#cb522d] text-xl">
          {articles.length > 0 && articles[id] ? articles[id].subject : ""}
        </h2>
        <h1 className="font-bold text-4xl">
          {articles.length > 0 && articles[id] ? articles[id].title : ""}
        </h1>
        <p className="text-justify leading-relaxed pt-4">
          {articles.length > 0 && articles[id] ? articles[id].main_article : ""}
        </p>
        <Link to={{pathname : "/blog_post", 
          search : '?id_param=' + (articles[id] ? articles[id].id : ''), 
        }}>
          <button
           
            className="text-white  bg-[#cb522d] hover:bg-[#c6745b] font-medium rounded-lg text-sm mt-[2rem] px-4 py-2 w-[6rem] hover:">
            {" "}
            Search
          </button>
        </Link>
      </div>
    </div>
  );
}

export default CarouselDisplay;
