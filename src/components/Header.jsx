import { Link } from "react-router";

const Header = () => {
  return (
    <div className="border-b py-6 text-center">
      Header
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
    </div>
  );
};

export default Header;
