import Link from "next/link";

export default function ProductCard({ id, name, variant, price }) {
  return (
    <Link href={`/products/${id}`}>
      <div className="p-4 border border-gray-300 rounded-lg shadow-md transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:border-blue-500 cursor-pointer">
        <h2 className="text-lg font-bold text-blue-500">ID: {id}</h2>
        <p className="text-gray-700 dark:text-white">Name: {name}</p>
        <p className="text-gray-700 dark:text-white">Variant: {variant}</p>
        <p className="text-gray-700 dark:text-white">Price: ${price}</p>
      </div>
    </Link>
  );
}
