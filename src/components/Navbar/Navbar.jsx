function Navbar() {
  return (
    <nav className="font-default shadow text-[#cb522d] px-10 py-4 w-full absolute flex absolute justify-between aling-center">
      <h1 className="text-2xl font-bold">LOGO</h1>
      <ul className="text-xl flex justify-between	gap-6 mr-5">
        <li>Home</li>
        <li>About me</li>
        <li>Posts</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
}

export default Navbar
