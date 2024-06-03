import "./Navbar.css"
function Navbar() {
  return (
    <div className="navbar">
      <nav>
      <h1>React</h1>
        <ol>
          <li><a href="#home">home</a></li>
          <li><a href="#about">about</a></li>
          <li><a href="#contacts">contacts</a></li>
          <li><a href="#login">login</a></li>
        </ol>
      </nav>
    </div>
  );
}

export default Navbar;