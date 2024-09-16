import Cards from "./cards";
import axios from "axios";
import { useState, useEffect } from "react";

const BASE_URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA";

const getData = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

function AdminPage() {
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

  if(isLoading){
    return <div>is loading .....</div>
  }
  return (
  
    <div className="flex flex-col gap-[2rem] justify-center items-center">
      {articles.map((article, index) => {
        return <Cards key={index} image={article.image} title={article.title} id={article.id} />;
      })}
    </div>
  );
}

export default AdminPage;
