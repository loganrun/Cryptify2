
function Navbar() {
    return (
      <nav className="fixed top-0 left-0  w-full bg-[#423A6F] text-white"> 
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold">Cryptify</h1>
          <ul className="hidden md:flex space-x-8"> 
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
  
  export default Navbar;