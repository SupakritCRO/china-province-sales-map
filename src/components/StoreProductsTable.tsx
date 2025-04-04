import React, { useState } from "react";
import { storeProducts } from "../pages/LossMakingScanner";
import SaleTrendChart from "./SaleTrendChart";
import ProductGPSankeyChart from "./ProductGPSankeyChart";

interface StoreProductsTableProps {
  storeName: string;
  onBack: () => void;
}

export default function StoreProductsTable({
  storeName,
  onBack,
}: StoreProductsTableProps) {
  // Look up products for the given store name
  // const products = storeProducts[storeName] || [];
  const products = [
    {
      productID: 1,
      name: "Organic Green Tea",
      salesAmount: 560000,
      quantity: 1200,
      totalGP: -320103,
    },
    {
      productID: 2,
      name: "Premium Jasmine Rice",
      salesAmount: 480000,
      quantity: 900,
      totalGP: -280000,
    },
    {
      productID: 3,
      name: "Imported Olive Oil",
      salesAmount: 420000,
      quantity: 600,
      totalGP: -250000,
    },
    {
      productID: 4,
      name: "Fresh Salmon Fillet",
      salesAmount: 300000,
      quantity: 500,
      totalGP: -200000,
    },
    {
      productID: 5,
      name: "Handmade Dumplings",
      salesAmount: 270000,
      quantity: 800,
      totalGP: -190000,
    },
    {
      productID: 6,
      name: "Almond Milk - Unsweetened",
      salesAmount: 200000,
      quantity: 1000,
      totalGP: -180000,
    },
    {
      productID: 7,
      name: "Natural Yogurt",
      salesAmount: 180000,
      quantity: 1100,
      totalGP: -160000,
    },
    {
      productID: 8,
      name: "Sichuan Spicy Sauce",
      salesAmount: 140000,
      quantity: 750,
      totalGP: -140000,
    },
    {
      productID: 9,
      name: "Tofu - Firm",
      salesAmount: 100000,
      quantity: 95,
      totalGP: -110000,
    },
    {
      productID: 10,
      name: "Seasonal Fruit Basket",
      salesAmount: 90000,
      quantity: 600,
      totalGP: -110000,
    },
  ]; // Mock
  const [selectedProduct, setSelectedProduct] = useState<any>(null);

  const handleRowClick = (product: any) => {
    // Toggle selection: if this product is already selected, deselect it; otherwise, select it.
    if (selectedProduct && selectedProduct.productID === product.productID) {
      setSelectedProduct(null);
    } else {
      setSelectedProduct(product);
    }
  };

  return (
    <div className="p-4">
      <button
        onClick={onBack}
        className="mb-4 px-4 py-2 bg-cpg-white border border-cpg-gray-300 rounded-md text-cpg-black shadow-sm hover:bg-cpg-gray-100 transition-colors"
        style={{ fontFamily: "Satoshi, sans-serif" }}
      >
        Back to Map
      </button>
      <div className="overflow-x-auto shadow-md border border-cpg-gray-200 rounded-lg">
        <table className="min-w-full divide-y divide-cpg-gray-200">
          <thead className="bg-cpg-green-light">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-cpg-gray-dark uppercase tracking-wider">
                Product ID
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cpg-gray-dark uppercase tracking-wider">
                Product Name
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-cpg-gray-dark uppercase tracking-wider">
                Sale Trend
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-cpg-gray-dark uppercase tracking-wider">
                Sales Amount
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-cpg-gray-dark uppercase tracking-wider">
                Quantity
              </th>
              <th className="px-6 py-3 text-right text-xs font-medium text-cpg-gray-dark uppercase tracking-wider">
                Total GP
              </th>
            </tr>
          </thead>
          <tbody className="bg-cpg-white divide-y divide-cpg-gray-200">
            {selectedProduct ? (
              <>
                <tr
                  key={selectedProduct.productID}
                  className="cursor-pointer bg-cpg-green-100 hover:bg-cpg-gray-100"
                  onClick={() => handleRowClick(selectedProduct)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-cpg-black">
                    {selectedProduct.productID}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-cpg-gray-dark">
                    {selectedProduct.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-48 h-16 bg-cpg-gray-100 rounded-md">
                      <SaleTrendChart />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-cpg-black">
                    {selectedProduct.salesAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-cpg-black">
                    {selectedProduct.quantity}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                      selectedProduct.totalGP < 0
                        ? "text-cpg-error-500 font-bold"
                        : "text-cpg-black"
                    }`}
                  >
                    {selectedProduct.totalGP.toLocaleString()}
                  </td>
                </tr>
                <tr>
                  <td colSpan={6} className="px-6 py-4">
                    <ProductGPSankeyChart />
                  </td>
                </tr>
              </>
            ) : (
              products.map((product) => (
                <tr
                  key={product.productID}
                  className="cursor-pointer hover:bg-cpg-gray-100"
                  onClick={() => handleRowClick(product)}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-cpg-black">
                    {product.productID}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-cpg-gray-dark">
                    {product.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="w-48 h-16 bg-cpg-gray-100 rounded-md">
                      <SaleTrendChart />
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-cpg-black">
                    {product.salesAmount.toLocaleString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-cpg-black">
                    {product.quantity}
                  </td>
                  <td
                    className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                      product.totalGP < 0
                        ? "text-cpg-error-500 font-bold"
                        : "text-cpg-black"
                    }`}
                  >
                    {product.totalGP.toLocaleString()}
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
