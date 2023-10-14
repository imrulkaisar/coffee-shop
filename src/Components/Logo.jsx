import LogoIcon from "../assets/images/logo.png";
import { Link } from "react-router-dom";

const Logo = ({ isDark = false }) => {
  return (
    <Link
      className={`flex gap-5 items-center font-primary text-5xl ${
        isDark ? "text-white" : "text-primary"
      }`}
      to="/"
    >
      <img className="w-12" src={LogoIcon} alt="logo icon" />{" "}
      <span>Coffee Shop</span>
    </Link>
  );
};

export default Logo;
