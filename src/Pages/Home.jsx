import IconBox from "../Components/IconBox";
import { BsCup } from "react-icons/bs";

import heroBg from "../assets/images/bg/hero-bg.png";
import pagebg from "../assets/images/bg/page-bg.png";

import icon1 from "../assets/images/icons/1.png";
import icon2 from "../assets/images/icons/2.png";
import icon3 from "../assets/images/icons/3.png";
import icon4 from "../assets/images/icons/4.png";
import ProductCard from "../Components/ProductCard";

// gallery images
import image1 from "../assets/images/cups/Rectangle9.png";
import image2 from "../assets/images/cups/Rectangle10.png";
import image3 from "../assets/images/cups/Rectangle11.png";
import image4 from "../assets/images/cups/Rectangle12.png";
import image5 from "../assets/images/cups/Rectangle13.png";
import image6 from "../assets/images/cups/Rectangle14.png";
import image7 from "../assets/images/cups/Rectangle15.png";
import image8 from "../assets/images/cups/Rectangle16.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      {/* Hero section */}
      <section
        style={{
          backgroundImage: `url('${heroBg}')`,
        }}
        className="bg-cover bg-left-bottom"
        id="Hero"
      >
        <div className="overlay py-32">
          <div className="container-area flex justify-end">
            <div className="text-white max-w-xl space-y-5">
              <h2 className="section-heading text-white">
                Would you like a Cup of Delicious Coffee?
              </h2>
              <p className="text-white">
                It's coffee time - Sip & Savor - Relaxation in every sip! Get
                the nostalgia back!! Your companion of every moment!!! Enjoy the
                beautiful moments and make them memorable.
              </p>
              <button className="btn btn-primary">Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* Features section */}
      <section className="bg-bgGray py-16">
        <div className="container-area flex flex-wrap lg:flex-nowrap justify-center gap-6">
          <IconBox icon={icon1} title="Awesome Aroma">
            You will definitely be a fan of the design & aroma of your coffee
          </IconBox>
          <IconBox icon={icon2} title="High Quality">
            We served the coffee to you maintaining the best quality
          </IconBox>
          <IconBox icon={icon3} title="Pure Grades">
            The coffee is made of the green coffee beans which you will love
          </IconBox>
          <IconBox icon={icon4} title="Proper Roasting">
            Your coffee is brewed by first roasting the green coffee beans
          </IconBox>
        </div>
      </section>

      {/* page body */}
      <section
        style={{
          backgroundImage: `url('${pagebg}')`,
        }}
        className="bg-top bg-contain py-20 "
      >
        <div className="container-area space-y-16">
          <div className="space-y-10">
            <div className="flex flex-col items-center gap-2">
              <p>--- Sip & Savor ---</p>
              <h2 className="section-heading">Our Popular Products</h2>
              <Link
                to="/add"
                className="btn btn-primary mt-3 flex gap-2 items-center border-2 border-primary"
              >
                Add Coffee <BsCup className="text-primary" />
              </Link>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
              <ProductCard />
            </div>
          </div>

          {/* instagram */}
          <div className="space-y-10">
            <div className="flex flex-col items-center gap-2">
              <p>--- Follow Us Now ---</p>
              <h2 className="section-heading">Follow on Instagram</h2>
            </div>
            <div className="gallery grid grid-cols-2 lg:grid-cols-4 gap-5">
              <img src={image1} alt="" />
              <img src={image2} alt="" />
              <img src={image3} alt="" />
              <img src={image4} alt="" />
              <img src={image5} alt="" />
              <img src={image6} alt="" />
              <img src={image7} alt="" />
              <img src={image8} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
