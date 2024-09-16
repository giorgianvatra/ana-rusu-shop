import axios from "axios";
import { useState, useEffect } from "react";
import DateObject from "react-date-object";
import { Link } from "react-router-dom";
function convertSecondsToDate(seconds) {
  const date = new DateObject(seconds);

  return date.format("YYYY-MM-dd");
}
const URL = "https://65a3ff17a54d8e805ed44d69.mockapi.io/ANA";

function EditComponentForm() {
  const [article, setArticle] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = new URLSearchParams(location.search).get("id_param");
    axios
      .get(URL + "/" + id)
      .then((response) => {
        setArticle(response.data);
      })
      .catch((err) => {
        setError(err.message);
        console.error(error);
      });
  }, []);

  const handleEditArticle = async (e) => {
    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const mainArticle = document.getElementById("main-article").value;
    const image = document.getElementById("image").value;
    const date = document.getElementById("date").value;
    const id = new URLSearchParams(location.search).get("id_param");
    const url = URL + "/" + id;

    try {
      const resp = await axios.put(url, {
        title: title,
        subject: subject,
        main_article: mainArticle,
        image: image,
        date: date,
      });

    } catch (error) {
      console.log(error.response);
    }
  };

  return (
    <div className="form-container flex flex-col gap-10 border-solid border-[#cb522d] border-4 w-[40%]  absolute top-1/3 left-1/4 p-[2rem] rounded-md">
      {/* title */}

      <div className="flex flex-col font-bold ">
        <label htmlFor="title" className="text-[1.5rem]">
          Title
        </label>
        <input
          id="title"
          name="title"
          type="text"
          className="title p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          defaultValue={article.title}
        />
      </div>
      {/* Subject */}
      <div className="flex flex-col font-bold ">
        <label htmlFor="subject">Subject</label>
        <input
          name="subject"
          id="subject"
          type="text"
          className="subject  p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          defaultValue={article.subject}
        />
      </div>
      {/* main article */}
      <div className="flex flex-col font-bold ">
        <label htmlFor="main-article">Main Article</label>
        <textarea
          id="main-article"
          type="text"
          className="main-article p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          defaultValue={article.main_article}
        />
      </div>

      {/* Image URL */}
      <div className="flex flex-col font-bold ">
        <label htmlFor="Image">Image URL</label>
        <input
          id="image"
          name="image"
          type="text"
          className="image-url p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
          defaultValue={article.image}
        />
      </div>
      <div className="flex flex-col font-bold ">
        <label htmlFor="date">Date</label>
        <input
          id="date"
          type="date"
          name="date"
          defaultValue={convertSecondsToDate(article.date)}
          className="date p-5 border-[#cb522d] border-solid border-2 rounded-md font-bold"
        />
      </div>
      <div className="buttons flex flex-row gap-2">
        <button
          onClick={() => {
            handleEditArticle();
          }}
          className="transition ease-in-out delay-100 bg-green-500 text-white px-10 py-3 rounded-md hover:bg-white hover:text-green-500 hover:border-green-500 hover:border-solid hover:border-2">
          Edit
        </button>
        <Link to="/admin">
                <button className="transition ease-in-out delay-100 bg-red-600 text-white px-10 py-3 rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-solid hover:border-2">
          Cancel
        </button>
        </Link>
      </div>
    </div>
  );
}

export default EditComponentForm;
