import ProfilePicture from "../img/profile-picture.jpg";

function ProfileIntroductionAndPhoto() {
  return (
    <>
      <div className="header-container flex justify-around items-center mt-[1rem] shadow-2xl py-[2rem] w-[90%] rounded-lg">
        <div className="intro w-[40vw] mr-[3rem]">
          <h1>Hi!</h1>
          <h5 className>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus rerum iusto iure, dolorem dicta veniam soluta cum
            officia facilis maiores.
          </h5>
        </div>
        <div className="image ">
          <img
            src={ProfilePicture}
            className=" h-[20rem] object-cover"
            alt=""
          />
        </div>
        
      </div>
    </>
  );
}

export default ProfileIntroductionAndPhoto;
