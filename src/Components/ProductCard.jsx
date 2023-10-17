import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import Swal from "sweetalert2";
import { apiURL } from "../Contexts/GlobalContext";

const ProductCard = ({ data }) => {
  const { _id, title, chef, price, photo } = data;

  const handleDelete = (id) => {
    fetch(`${apiURL}/products/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount) {
          Swal.fire({
            icon: "info",
            title: "Product has been deleted!",
            showConfirmButton: false,
            showCloseButton: true,
          });
        }
      })
      .catch((error) => console.error(error));
  };

  return (
    <article className="bg-bgGrayOverlay p-8 flex justify-between items-center rounded-lg">
      <figure className="max-w-[120px]">
        <img src={photo} alt="" />
      </figure>
      <div className="space-y-1">
        <p>
          <b>Name:</b> {title}
        </p>
        <p>
          <b>Chef:</b> {chef}
        </p>
        <p>
          <b>Price:</b> ${price}
        </p>
      </div>
      <div className="actions flex flex-col gap-2 text-white">
        <Link
          to={`/product/${_id}`}
          className="inline-block bg-secondary p-2 rounded-md"
        >
          <BsFillEyeFill />
        </Link>
        <Link
          to={`/product/update/${_id}`}
          className="inline-block bg-primary p-2 rounded-md"
        >
          <BsPencilFill />
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="bg-red-600 p-2 rounded-md"
        >
          <BsTrash3Fill />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
