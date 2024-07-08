import { useState, useEffect } from "react";
import axios from "axios";
import { Card } from "flowbite-react";

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
    try{
    const fetchData = async () => {
    const data  = await getData();
    setArticles(data)
    } 
    fetchData(); 
    
    }catch(err){
      console.error(err);
    }finally{
      setIsLoading(false);
    }
  }, [])

  return (
    <div>
      <Card
        className="max-w-sm"
        renderImage={() => (
          <Image
            width={500}
            height={500}
            src="/images/blog/image-1.jpg"
            alt="image 1"
          />
        )}>
        <h5 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p className="font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
      </Card>
    </div>
  );
 
  
}

export default Posts;
