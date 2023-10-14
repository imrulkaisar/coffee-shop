import { Link } from "react-router-dom";
import { BsFillEyeFill, BsPencilFill, BsTrash3Fill } from "react-icons/bs";
import productImage from "../assets/images/cup-5.png";

const ProductCard = () => {
  return (
    <article className="bg-bgGrayOverlay p-8 flex justify-between items-center rounded-lg">
      <figure className="max-w-[120px]">
        <img src={productImage} alt="" />
      </figure>
      <div className="space-y-1">
        <p>
          <b>Name:</b> Americano Coffee
        </p>
        <p>
          <b>Chef:</b> Imrul Kaisar
        </p>
        <p>
          <b>Price:</b> $4.99
        </p>
      </div>
      <div className="actions flex flex-col gap-2 text-white">
        <Link
          to={`/product/1`}
          className="inline-block bg-secondary p-2 rounded-md"
        >
          <BsFillEyeFill />
        </Link>
        <Link
          to={`/product/update/1`}
          className="inline-block bg-primary p-2 rounded-md"
        >
          <BsPencilFill />
        </Link>
        <button className="bg-red-600 p-2 rounded-md">
          <BsTrash3Fill />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
