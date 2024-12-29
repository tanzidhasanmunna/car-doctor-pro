import Image from "next/image";
import Link from "next/link";

export default function Service({ service }) {
  const { title, img, price, _id } = service || {};
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <Image
        alt={title}
        className="w-full h-48 object-cover"
        height="400"
        src={img}
        width="600"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold text-left">{title}</h3>

        <div className="text-right mt-4 flex justify-between items-center">
          <p className="text-primary mt-2 font-bold">Price : ${price}</p>
          <Link href={`/services/${_id}`}>
            <i className="fas fa-arrow-right text-primary"></i>
          </Link>
        </div>
      </div>
    </div>
  );
}
