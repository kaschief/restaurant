import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../app/store";

interface CustomerCardTypes {
  id: string;
  name: string;
  meals: string[];
}

const CustomerCard = ({ id, name, meals }: CustomerCardTypes) => {
  return (
    <div className="customer-food-card-container">
      <p>{name}</p>
      <div className="customer-foods-container">
        <div className="customer-food">
          {meals.map((meal) => {
            return <p>{meal}</p>;
          })}
        </div>
        <div className="customer-food-input-container">
          <input />
          <button>Add</button>
        </div>
      </div>
    </div>
  );
};

export default CustomerCard;
