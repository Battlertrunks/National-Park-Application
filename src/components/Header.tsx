import "./Header.css";

const Header = () => {
  return (
    <header className="Header">
      <h1>Dream Park</h1>
      <div>
        <a href="#">Sign In</a>
        <button>
          <i className="fa-solid fa-bars"></i>
        </button>
      </div>
    </header>
  );
};

export default Header;
