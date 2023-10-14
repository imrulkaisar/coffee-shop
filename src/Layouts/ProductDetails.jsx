import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";

import productImage from "../assets/images/cup-5.png";

const ProductDetails = () => {
  return (
    <div>
      <section className="bg-[url('/../src/assets/images/bg/productbg.png')] bg-top bg-contain py-16">
        <div className="container-area space-y-8">
          <Link
            to="/"
            className="flex font-primary text-2xl items-center gap-2"
          >
            <HiArrowLongLeft /> Back to home
          </Link>
          <div className="bg-bgGrayOverlay p-12 rounded-lg grid md:grid-cols-2 items-center">
            <figure className="">
              <img
                className="mx-auto w-full max-w-sm"
                src={productImage}
                alt=""
              />
            </figure>
            <div className="space-y-5">
              <h2 className="section-heading">NiceTeas</h2>
              <div className="space-y-1">
                <p>
                  <b>Name:</b> Americano Coffee
                </p>
                <p>
                  <b>Chef:</b> Imrul Kaisar
                </p>
                <p>
                  <b>Supplier:</b> Cappu Authorizer
                </p>
                <p>
                  <b>Taste:</b> Americano
                </p>
                <p>
                  <b>Category:</b> Sweet and hot
                </p>
                <p>
                  <b>Price:</b> $4.99
                </p>
              </div>
              <button className="btn btn-primary">Order Now</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
