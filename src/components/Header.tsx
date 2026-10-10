import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";
import logo from "../assets/logo.svg";

type HeaderProps = {
  name: string;
  subtitle: string;
};

function Header({ name, subtitle }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <div className="header-content">
        <div className="brand">
          <img src={logo} alt="" />
          <div>
            <h1>{name}</h1>
            <p>{subtitle}</p>
          </div>
        </div>

        <p className="likes-counter">❤️ Likes: {likes}</p>

        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>
          <NavLink to="/skills">Skills</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;