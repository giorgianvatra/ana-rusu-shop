import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
import { Link } from "react-router-dom";

const BASE_URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA/";

const getData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

function Articles() {
  const [active, setActive] = useState(1);
  const [data, setData] = useState([]);
  const [startIndex, setStartIndex] = useState(0); 
  const [endIndex, setEndIndex] =  useState(startIndex + 4); 
  const [isLoading, setIsLoading] = useState(false); 

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const array = await getData();
        setData((d) => [...d, ...array]);
      };
      fetchData();
    } catch (e) {
        console.log(e);
    }finally {
      setIsLoading(false);
    }
  }, []);

  
  const getItemProps = (index) => ({
    variant: active === index ? "filled" : "text",
    color: "gray",
    onClick: () => {
        setStartIndex(index * 4-1);
        setEndIndex(3 + index * 4);
        setActive(index)
    },
  });

  const next = () => {
    if (active === 5) return;
    setStartIndex((s)=> s + 4);
    setEndIndex((s) => s + 4);
    setActive(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
        setStartIndex((s) => s - 4);
        setEndIndex((s) => s - 4);
        setActive(active - 1);
  };

    if (isLoading)
      return (
        <div
          className="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
          role="status">
          <span className="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...
          </span>
        </div>
      );

  return (
    <div className="container mt-3rem">
      <div className="articles flex gap-3.5 pb-[2rem]">
        {data.slice(startIndex, endIndex).map((d, index) => {
          return (
            <Card key={index} className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={d.image} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {d.title}
                </Typography>
                <Typography>{d.main_article}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link to="/blog_post">
                  <Button className="">Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>

      <div className="flex items-center gap-4 justify-center p-[2rem]">
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={prev}
          disabled={active === 1}>
          <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
        </Button>
        <div className="flex items-center gap-2">
          <IconButton {...getItemProps(1)}>1</IconButton>
          <IconButton {...getItemProps(2)}>2</IconButton>
          <IconButton {...getItemProps(3)}>3</IconButton>
          <IconButton {...getItemProps(4)}>4</IconButton>
          <IconButton {...getItemProps(5)}>5</IconButton>
        </div>
        <Button
          variant="text"
          className="flex items-center gap-2"
          onClick={next}
          disabled={active === 5}>
          Next
          <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}

export default Articles;
