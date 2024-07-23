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
  return (
    <div>
      {articles.map((article, index) => {
        return <Cards key={index} title={article.title} />;
      })}
    </div>
  );
}

export default AdminPage;
