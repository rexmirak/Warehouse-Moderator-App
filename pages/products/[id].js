import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function ProductDetails() {
  const router = useRouter();
  const { id } = router.query;

  const [product, setProduct] = useState(null);
  const [formData, setFormData] = useState({
    productName: "",
    productVariant: "",
    productPrice: "",
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      async function fetchProduct() {
        try {
          const response = await fetch(
            "https://6776992512a55a9a7d0c4868.mockapi.io/products"
          );
          const data = await response.json();
          const foundProduct = data.find((product) => product.id.toString() === id);
          setProduct(foundProduct);
          setFormData({
            productName: foundProduct?.productName || "",
            productVariant: foundProduct?.productVariant || "",
            productPrice: foundProduct?.productPrice || "",
          });
          setLoading(false);
        } catch (error) {
          console.error("Failed to fetch product details:", error);
          setLoading(false);
        }
      }
      fetchProduct();
    }
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setProduct((prevProduct) => ({
      ...prevProduct,
      productName: formData.productName,
      productVariant: formData.productVariant,
      productPrice: formData.productPrice,
    }));
  };

  if (loading) {
    return (
      <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900">
        <div className="w-16 h-16 border-4 border-blue-500 dark:border-yellow-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col justify-start items-center p-8 bg-gray-50 dark:bg-gray-900">
      {/* Product Details */}
      <h1 className="text-3xl font-bold text-blue-500 dark:text-blue-500 mb-4">
        Product Details
      </h1>
      <div className="p-4 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md max-w-md w-full mb-8 bg-white dark:bg-gray-800">
        <p className="text-lg font-bold text-gray-700 dark:text-gray-300">ID: {product.id}</p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Name: {product.productName}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Variant: {product.productVariant}
        </p>
        <p className="text-lg text-gray-700 dark:text-gray-300">
          Price: ${product.productPrice}
        </p>
      </div>

      {/* Update Form */}
      <form
        className="w-full max-w-md bg-white dark:bg-gray-800 p-6 border border-gray-300 dark:border-gray-700 rounded-lg shadow-md"
        onSubmit={handleSubmit}
      >
        <h2 className="text-2xl font-bold text-gray-700 dark:text-gray-300 mb-4">
          Update Product Details
        </h2>

        <div className="mb-4">
          <label
            htmlFor="productName"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Name
          </label>
          <input
            type="text"
            id="productName"
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full dark:text-black px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="productVariant"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Variant
          </label>
          <input
            type="text"
            id="productVariant"
            name="productVariant"
            value={formData.productVariant}
            onChange={handleChange}
            className="w-full dark:text-black px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500"
          />
        </div>

        <div className="mb-4">
          <label
            htmlFor="productPrice"
            className="block text-gray-700 dark:text-gray-300 font-medium mb-2"
          >
            Price
          </label>
          <input
            type="number"
            id="productPrice"
            name="productPrice"
            value={formData.productPrice}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:focus:ring-yellow-500 dark:text-black"
          />
        </div>

        <button
          type="submit"
          className="w-full py-2 px-4 text-white bg-blue-500  rounded-md hover:bg-blue-600 dark:hover:bg-gray-500 transition-colors"
        >
          Update Product
        </button>
      </form>
    </div>
  );
}
