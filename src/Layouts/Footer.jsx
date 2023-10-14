import { Link } from "react-router-dom";
import footerBg from "../assets/images/bg/footerbg.jpg";
import logoIcon from "../assets/images/logo.png";
import Logo from "../Components/Logo";
import SocialIcons from "../Components/SocialIcons";
import ContactInfo from "../Components/ContactInfo";
import ContactFrom from "../Components/ContactFrom";

const Footer = () => {
  return (
    <footer
      style={{
        background: `url(${footerBg})`,
        backgroundSize: "cover",
      }}
      className={`py-32`}
    >
      <div className="container-area flex gap-10">
        <div className="flex-1 space-y-8">
          <div>
            <Logo />
            <p className="">
              Always ready to be your friend. Come & Contact with us to share
              your memorable moments, to share with your best companion.
            </p>
          </div>
          <SocialIcons />
          <div className="space-y-5">
            <h4 className="section-heading">Get in touch</h4>
            <ContactInfo />
          </div>
        </div>
        <div className="flex-1 space-y-5">
          <h4 className="section-heading">Connect with us</h4>
          <ContactFrom />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
