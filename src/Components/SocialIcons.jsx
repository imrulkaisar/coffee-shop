import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa6";

const SocialIcons = ({ className }) => {
  return (
    <div className={`social-icons flex gap-3 text-3xl ${className}`}>
      <a href="#">
        <FaFacebook />
      </a>
      <a href="#">
        <FaTwitter />
      </a>
      <a href="#">
        <FaInstagram />
      </a>
      <a href="#">
        <FaLinkedin />
      </a>
    </div>
  );
};

export default SocialIcons;
