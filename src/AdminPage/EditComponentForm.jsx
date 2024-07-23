import axios from "axios";
import { useState, useEffect } from "react";
import DateObject from "react-date-object";

function convertSecondsToDate(seconds) {
  const date = new DateObject(seconds);

  return date.format("YYYY-MM-dd");
}
const URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA/1";

function EditComponentForm() {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error(error);
      });
  }, []);

  return (
    <div className="form-container flex flex-col gap-10 border-solid border-[#cb522d] border-4 w-[40%]  absolute top-1/3 left-1/4 p-[2rem] rounded-md">
      {/* title */}

      <div className="flex flex-col font-bold ">
        <label htmlFor="title" className="text-[1.5rem]">
          Title
        </label>
        <input
          name="title"
          type="text"
          className="title p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          value={article.title}
        />
      </div>
      {/* Subject */}
      <div className="flex flex-col font-bold ">
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          type="text"
          className="subject  p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          value={article.subject}
        />
      </div>
      {/* main article */}
      <div className="flex flex-col font-bold ">
        <label htmlFor="main-article">Main Article</label>
        <textarea
          type="text"
          className="main-article p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          value={article.main_article}
        />
      </div>

      {/* Image URL */}
      <div className="flex flex-col font-bold ">
        <label htmlFor="Image">Image URL</label>
        <input
          name="image"
          type="text"
          className="image-url p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          value={article.image}
        />
      </div>
      <div className="flex flex-col font-bold ">
        <label htmlFor="date">Date</label>
        <input
          type="date"
          name="date"
          id=""
          value={convertSecondsToDate(article.date)}
          className="date p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
        />
      </div>
      <div className="buttons">
        <button className="submit border-black border-solid border-2">
          Submit
        </button>
        <button className="close border-black border-solid border-2">
          Close
        </button>
      </div>
    </div>
  );
}

export default EditComponentForm;
