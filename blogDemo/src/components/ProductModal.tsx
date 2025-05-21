import React from "react";

type Product = {
  id: number;
  title: string;
  image: string;
  price: number;
};

type Props = {
  product: Product | null;
  onClose: () => void;
};

const ProductModal: React.FC<Props> = ({ product, onClose }) => {
  const [email, setEmail] = React.useState("");
  const [mobile, setMobile] = React.useState("");

  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-black/40">
      <div className="bg-white rounded-lg p-6 w-full max-w-md relative shadow-xl">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
        <img
          src={product.image}
          alt={product.title}
          className="w-full h-48 object-cover rounded"
        />
        <h2 className="text-xl font-semibold mt-4">{product.title}</h2>
        <p className="text-sky-500 mb-4">R {product.price.toLocaleString()}</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert(`Quote requested for ${product.title}`);
            onClose();
          }}
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Mobile Number"
            value={mobile}
            onChange={(e) => setMobile(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <input
            type="email"
            placeholder="Email Address"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            type="submit"
            className="w-full bg-sky-500 text-white py-2 rounded hover:bg-sky-600"
          >
            Get Quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default ProductModal;
