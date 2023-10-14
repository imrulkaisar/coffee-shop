import { FaPhone, FaEnvelope, FaMapLocationDot } from "react-icons/fa6";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <ul className="space-y-2">
        <li>
          <a
            className="flex gap-5 items-center hover:underline"
            href="tel:+88 01533 333 333"
          >
            <FaPhone /> +88 01533 333 333
          </a>
        </li>
        <li>
          <a
            className="flex gap-5 items-center hover:underline"
            href="mailto:info@gmail.com"
          >
            <FaEnvelope /> info@gmail.com
          </a>
        </li>
        <li>
          <a className="flex gap-5 items-center hover:underline" href="#">
            <FaMapLocationDot /> 72, Wall street, King Road, Dhaka
          </a>
        </li>
      </ul>
    </div>
  );
};

export default ContactInfo;
