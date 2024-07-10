import { useState, useEffect } from "react";
import axios from "axios";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react";
import {Link} from "react-router-dom";

const BASE_URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA";

const getData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

function Posts() {
  const [isLoading, setIsLoading] = useState(false);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    try {
      const fetchData = async () => {
        const data = await getData();
        setArticles(data);
      };
      fetchData();
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  return (
    <div className=" container flex justify-center self-center  ">
      <div className=" grid 2xl:grid-cols-4 2xl:gap-[4rem] xl:grid-cols-3 xl:gap-[1rem] lg:grid-cols-2 lg: gap-[1rem] md:grid-cols-2 md: mt-[3rem] sm:grid-cols-1 sm:mt-[4rem] sm:ml-[-11.5rem]">
        {articles.map((article, index) => {
          return (
            <Card key={index} className="mt-6 w-96">
              <CardHeader color="blue-gray" className="relative h-56">
                <img src={article.image} alt="card-image" />
              </CardHeader>
              <CardBody>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {article.title}
                </Typography>
                <Typography>{article.main_article}</Typography>
              </CardBody>
              <CardFooter className="pt-0">
                <Link
                  to={{
                    pathname: "/blog_post",
                    search: `?id_param=${index + 1}`,
                  }}>
                  <Button>Read More</Button>
                </Link>
              </CardFooter>
            </Card>
          );
        })}
      </div>
    </div>
  );
}

export default Posts;
