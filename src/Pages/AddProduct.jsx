import { Link } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import productBg from "../assets/images/bg/productbg.png";

const AddProduct = () => {
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
          <div className="bg-bgGrayOverlay p-8 md:p-12 rounded-lg space-y-10">
            <div className="flex flex-col items-center gap-2">
              <h2 className="section-heading">Add New Product</h2>
              <p className="max-w-3xl mx-auto text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>

            <form className="space-y-4">
              <div className="grid lg:grid-cols-2 gap-4">
                <input
                  className="form-input"
                  type="text"
                  name="title"
                  id="title"
                  placeholder="Product Title"
                />
                <input
                  className="form-input"
                  type="text"
                  name="chef"
                  id="chef"
                  placeholder="Chef name"
                />
                <input
                  className="form-input"
                  type="text"
                  name="supplier"
                  id="supplier"
                  placeholder="Supplier"
                />
                <input
                  className="form-input"
                  type="text"
                  name="taste"
                  id="taste"
                  placeholder="Taste"
                />
                <input
                  className="form-input"
                  type="text"
                  name="category"
                  id="category"
                  placeholder="Category"
                />
                <input
                  className="form-input"
                  type="text"
                  name="price"
                  id="price"
                  placeholder="Price"
                />
              </div>
              <input
                className="form-input"
                type="text"
                name="photo"
                id="photo"
                placeholder="Photo URL"
              />
              <textarea
                className="form-input min-h-[200px]"
                name="detail"
                id="details"
                placeholder="Product details"
              ></textarea>
              <button
                className="btn btn-primary w-full border-2 border-primary font-semibold"
                type="submit"
              >
                Add New Product
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AddProduct;
