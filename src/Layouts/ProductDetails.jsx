import { Link, useLoaderData, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import Swal from "sweetalert2";
import { apiURL } from "../Contexts/GlobalContext";
import productBg from "../assets/images/bg/productbg.png";

import { useEffect, useState } from "react";

const ProductDetails = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState(loadedData) || {};

  const { title, chef, supplier, taste, category, price, photo, details } =
    product[0];

  useEffect(() => {
    fetch(`${apiURL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleOrder = () => {
    Swal.fire({
      icon: "success",
      title: "Your order has been submitted!",
      showConfirmButton: false,
      showCloseButton: true,
    });
  };

  console.log(loadedData);

  return (
    <div>
      <section
        style={{
          backgroundImage: `url('${productBg}')`,
        }}
        className="bg-top bg-contain py-16"
      >
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
                src={photo}
                alt={title}
              />
            </figure>
            <div className="space-y-5">
              <h2 className="section-heading">NiceTeas</h2>
              <div className="space-y-1">
                <p>
                  <b>Name:</b> {title}
                </p>
                <p>
                  <b>Chef:</b> {chef}
                </p>
                <p>
                  <b>Supplier:</b> {supplier}
                </p>
                <p>
                  <b>Taste:</b> {taste}
                </p>
                <p>
                  <b>Category:</b> {category}
                </p>
                <p>
                  <b>Price:</b> ${price}
                </p>
              </div>
              <button onClick={handleOrder} className="btn btn-primary">
                Order Now
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProductDetails;
