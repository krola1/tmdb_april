import { Link } from "react-router-dom";
export default function NavBar() {
  return (
    <nav>
      <Link to="/"> Home </Link>
      <Link to="search1">Search</Link>
    </nav>
  );
}
