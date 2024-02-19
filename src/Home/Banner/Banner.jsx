import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPinterest,
  faFacebook,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import SearchBar from "./SearchBar";

function Banner() {
  return (
    <div className="w-full h-24 grid grid-cols-3">
      <div className="flex justify-center items-center gap-3">
        <FontAwesomeIcon
          icon={faPinterest}
          className="text-xl text-[#cb522d]"
        />
        <FontAwesomeIcon icon={faFacebook} className="text-xl text-[#cb522d]" />
        <FontAwesomeIcon
          icon={faInstagram}
          className="text-xl text-[#cb522d]"
        />
        <FontAwesomeIcon icon={faEnvelope} className="text-xl text-[#cb522d]" />
      </div>
      <div className=" w-screenflex flex flex-col  justify-center items-center">
        <h1 className=" text-xl text-center	 font-bold	">Anas Brand Logo</h1>
        <p className="text-xs text-center	">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, vero
        </p>
      </div>
      <div className="flex justify-center items-center">
        <SearchBar />
      </div>
    </div>
  );
}

export default Banner;
