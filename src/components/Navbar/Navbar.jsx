import { Link } from "react-router-dom";


function Navbar() {
  return (
    <nav className="font-default shadow text-[#cb522d] px-10 py-4 w-screen flex justify-center aling-center">
      <ul className="text-xl flex justify-between	gap-6 ">
        <Link to="/">Home</Link>
        <Link to="/about_me">About me</Link>
        <Link to="/posts">Posts</Link>
        <Link to="/contact">Contact</Link>
      </ul>
    </nav>
  );
}

export default Navbar
