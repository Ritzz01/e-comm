import React from "react";
import image from "../img/image";
import Product from "./Product";
import Header from "./Header";

function Home({ userEmail }) {
  // Array of product objects
  const products = [
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 20.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
    { title: "Harry Potter", price: 29.9, img: image.book, rating: 3 },
  ];

  return (
    <>
      <Header userEmail /> {/* Pass userEmail to Header */}
      {/* Banner Section */}
      <div className="relative w-full h-72 bg-purple-100">
        {/* Banner Image with Transparency */}
        <img
          src={image.banner}
          alt="Banner"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-50"
        />
        {/* Overlay Text or Content */}
        <div className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-white">
          <h1 className="text-4xl font-bold">Welcome to Our Shop</h1>
        </div>
      </div>
      <div className="home mt-6 bg-purple-50 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 ">
        {/* Map over the products array and render each Product component */}
        {products.map((product, index) => (
          <Product
            key={index} // Use the index as the key (or another unique id if available)
            title={product.title}
            price={product.price}
            imgg={product.img}
            rating={product.rating}
          />
        ))}
      </div>
    </>
  );
}

export default Home;
