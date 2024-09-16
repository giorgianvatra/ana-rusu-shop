import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Cards(props) {
  return (
    <div className=" cards-container flex h-[10rem] w-[90vw] justify-between items-center border-solid border-2 border-[#C3E2C2] rounded-md px-10 ">
      <div className="content flex  gap-[3rem] items-center">
        <img className="w-[10rem]" src={props.image} alt="" />
        <h2 className="font-bold">{props.title} </h2>
      </div>
      <div className="buttons flex flex-col gap-2">
        <Link
          to={{
            pathname: "/edit_article",
            search: "?id_param=" + (props.id),
          }}>
          <button className="transition ease-in-out delay-100 bg-green-500 text-white px-10 py-3 rounded-md hover:bg-white hover:text-green-500 hover:border-green-500 hover:border-solid hover:border-2">
            Edit
          </button>
        </Link>
        <button className="transition ease-in-out delay-100 bg-red-600 text-white px-10 py-3 rounded-md hover:bg-white hover:text-red-600 hover:border-red-600 hover:border-solid hover:border-2">
          Remove
        </button>
      </div>
    </div>
  );
}

export default Cards;

Cards.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.string,
};
