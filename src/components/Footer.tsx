import "./Footer.css";

const Footer = () => {
  return (
    <footer className="Footer">
      <ul>
        <li>
          <h2>Dream Park</h2>
          <p>Copyright 2022 Szczesniak</p>
        </li>
        <li>
          <ul>
            <li>
              <a href="#">
                <i className="fa-brands fa-youtube"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa-brands fa-facebook"></i>
              </a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Community</h3>
          <ul>
            <li>
              <a href="#">Articles</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Team</a>
            </li>
          </ul>
        </li>
        <li>
          <h3>Company</h3>
          <ul>
            <li>
              <a href="#">About Us</a>
            </li>
            <li>
              <a href="#">Career</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
