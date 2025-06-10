import React from "react";
import { Link, useLoaderData } from "react-router";

const CoffeeDetails = () => {
  const { name, photo, price, quantity, details, taste, supplier } =
    useLoaderData();


    
  return (
    <div>
      <Link className="text-green-300 ml-3" to="/">
        {" "}
        back to Home
      </Link>
      <h2 className="text-2xl font-bold text-center">Coffee Details</h2>

      <div className="card bg-base-100 w-96 mx-auto shadow-sm border-2 my-6">
        <figure>
          <img src={photo} alt="Shoes" />
        </figure>
       
          <div className="ml-30">
            <h2>name: {name}</h2>
          <p>Price : {price}</p>
          <p>Quantity : {quantity}</p>
          <p>Details :{details}</p>
          <p>Taste : {taste}</p>
          <p>Supplier : {supplier}</p>
          </div>
        </div>
      </div>
    
  );
};

export default CoffeeDetails;
