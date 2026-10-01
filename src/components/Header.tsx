import { NavLink } from "react-router";

type HeaderProps = {
  name: string;
  subtitle: string;
};

function Header({ name, subtitle }: HeaderProps) {
  return (
    <header>
      <h1>{name}</h1>
      <p>{subtitle}</p>

      <nav>
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/skills">
          Skills
        </NavLink>

        <NavLink to="/contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}

export default Header;