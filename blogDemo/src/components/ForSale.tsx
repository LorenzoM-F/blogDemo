import React, { useState } from "react";
import product2 from "../assets/product2.png";
import ProductModal from "./ProductModal"; // Import the modal

type ForSaleItem = {
  id: number;
  title: string;
  image: string;
  price: number;
};

const itemsForSale: ForSaleItem[] = [
  { id: 1, title: "Sourdough Bread", image: product2, price: 200 },
  { id: 2, title: "Ceramic Baking Set", image: product2, price: 1200 },
  { id: 3, title: "Cast Iron Skillet", image: product2, price: 900 },
  { id: 4, title: "Wooden Rolling Pin", image: product2, price: 150 },
];

const ForSale: React.FC = () => {
  const [selectedProduct, setSelectedProduct] = useState<ForSaleItem | null>(null);

  return (
    <section className="max-w-7xl mx-auto p-6">
      <h2 className="text-3xl font-bold text-gray-800 mb-6">For Sale</h2>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {itemsForSale.map((item) => (
          <div
            key={item.id}
            onClick={() => setSelectedProduct(item)}
            className="cursor-pointer bg-white rounded-sm shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-lg font-semibold text-gray-900">{item.title}</h3>
              <p className="mt-2 text-sky-300">R {item.price.toLocaleString()}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProduct && (
        <ProductModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
      )}
    </section>
  );
};

export default ForSale;
