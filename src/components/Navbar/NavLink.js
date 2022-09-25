import { Link } from 'react-scroll';

const NavLink = ({ children, to, onClick, offset = 0 }) => {
  return (
    <Link
      to={to}
      spy={true}
      smooth={true}
      offset={offset}
      duration={1000}
      onClick={onClick}
    >
      {children}
    </Link>
  );
};
export default NavLink;
