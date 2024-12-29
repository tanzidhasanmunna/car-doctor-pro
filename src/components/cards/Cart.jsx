import Image from "next/image";
import Link from "next/link";

export default function Cart({ single_cart, handleDelete }) {
  const { _id, serviceName, img, price, orderDate } = single_cart;
  return (
    <div className="flex flex-col md:flex-row items-center justify-between my-2">
      <div className="flex items-center mb-4 md:mb-0">
        <Image
          alt={serviceName}
          className="w-20 h-20 rounded-lg"
          height="100"
          src={img}
          width="100"
        />
        <div className="ml-4">
          <h2 className="text-lg font-semibold">{serviceName}</h2>
          <p className="text-gray-500">Color : Green</p>
          <p className="text-gray-500">Size: S</p>
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-8">
        <p className="text-lg font-semibold">${price}</p>
        <p className="text-gray-500">{orderDate}</p>

        <Link href={`/my-bookings/update/${_id}`}>
          <button className="btn bg-red-500 text-white px-4 py-2 rounded-lg">
            Edit
          </button>
        </Link>
        <button
          onClick={() => handleDelete(_id)}
          className="text-gray-500 hover:text-red-500"
        >
          <i className="fas fa-times"></i>
        </button>
      </div>
    </div>
  );
}
