import { NavLink } from "react-router";
import { useLikes } from "../context/LikesContext";

type HeaderProps = {
  name: string;
  subtitle: string;
};

function Header({ name, subtitle }: HeaderProps) {
  const { likes } = useLikes();

  return (
    <header>
      <h1>{name}</h1>
      <p>{subtitle}</p>

      <p className="likes-counter">❤️ Likes: {likes}</p>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>
        <NavLink to="/skills">Skills</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </nav>
    </header>
  );
}

export default Header;