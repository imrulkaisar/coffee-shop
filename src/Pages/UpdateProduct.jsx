import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import { HiArrowLongLeft } from "react-icons/hi2";
import productBg from "../assets/images/bg/productbg.png";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";
import { apiURL } from "../Contexts/GlobalContext";

const UpdateProduct = () => {
  const loadedData = useLoaderData();
  const { id } = useParams();
  const [product, setProduct] = useState(loadedData) || {};
  const navigate = useNavigate();

  const { title, chef, supplier, taste, category, price, photo, details } =
    product[0];

  useEffect(() => {
    fetch(`${apiURL}/products/${id}`)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);

  const handleUpdate = (event) => {
    event.preventDefault();
    const form = event.target;
    const newTitle = form.title.value;
    const newChef = form.chef.value;
    const newSupplier = form.supplier.value;
    const newTaste = form.taste.value;
    const newCategory = form.category.value;
    const newPrice = form.price.value;
    const newPhoto = form.photo.value;
    const newDetails = form.details.value;

    const updateProduct = {
      newTitle,
      newChef,
      newSupplier,
      newTaste,
      newCategory,
      newPrice,
      newPhoto,
      newDetails,
    };

    fetch(`${apiURL}/products/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        if (data.modifiedCount) {
          Swal.fire({
            icon: "success",
            title: "Product has been updated!",
            showConfirmButton: false,
            showCloseButton: true,
          });
          navigate("/");
        }
      });
  };

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
              <h2 className="section-heading">Update Product details</h2>
              <p className="max-w-3xl mx-auto text-center">
                It is a long established fact that a reader will be distraceted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here.
              </p>
            </div>

            <form className="space-y-4" onSubmit={handleUpdate}>
              <div className="grid lg:grid-cols-2 gap-4">
                <div className="form-group">
                  <label htmlFor="title">Product Title</label>
                  <input
                    className="form-input"
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Product Title"
                    defaultValue={title}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="chef">Chef name</label>
                  <input
                    className="form-input"
                    type="text"
                    name="chef"
                    id="chef"
                    placeholder="Chef name"
                    defaultValue={chef}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="supplier">Supplier</label>
                  <input
                    className="form-input"
                    type="text"
                    name="supplier"
                    id="supplier"
                    placeholder="Supplier"
                    defaultValue={supplier}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="taste">Taste</label>
                  <input
                    className="form-input"
                    type="text"
                    name="taste"
                    id="taste"
                    placeholder="Taste"
                    defaultValue={taste}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category</label>
                  <input
                    className="form-input"
                    type="text"
                    name="category"
                    id="category"
                    placeholder="Category"
                    defaultValue={category}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="price">Price</label>
                  <input
                    className="form-input"
                    type="text"
                    name="price"
                    id="price"
                    placeholder="Price"
                    defaultValue={price}
                  />
                </div>
              </div>
              <div className="form-group">
                <label htmlFor="photo">Photo URL</label>
                <input
                  className="form-input"
                  type="text"
                  name="photo"
                  id="photo"
                  placeholder="Photo URL"
                  defaultValue={photo}
                />
              </div>
              <div className="form-group">
                <label htmlFor="details">Product details</label>
                <textarea
                  className="form-input min-h-[200px]"
                  name="detail"
                  id="details"
                  placeholder="Product details"
                  defaultValue={details}
                ></textarea>
              </div>
              <button
                className="btn btn-primary w-full border-2 border-primary font-semibold"
                type="submit"
              >
                Update Product Details
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UpdateProduct;
