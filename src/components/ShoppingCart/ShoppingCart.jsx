import React, { useState } from "react";

import "./ShoppingCart.css";

/*
  ShoppingCart component:
  Lets users add, display, and delete items with details (name, quantity, brand, subtotal, tax, availability).
  Each input field is controlled by component state, and the full cart is displayed as an ordered list.
*/
function ShoppingCart() {
  // State for the list of items in the cart
  const [items, setItems] = useState([]);

  // Input state for a new item being added
  const [newItem, setNewItem] = useState({
    itemName: "",
    quantity: "",
    brand: "",
    subtotal: "",
    tax: "",
    availability: "",
  });

  // Handles all input changes in the form fields and updates corresponding value in newItem state
  function handleInputChange(event) {
    const { name, value } = event.target;
    setNewItem((prev) => ({ ...prev, [name]: value }));
  }

  // Adds the newItem to the items list if required fields are filled; then resets the form
  function addItem() {
    if (newItem.itemName.trim() === "" || newItem.quantity.trim() === "")
      return;

    setItems((prev) => [...prev, newItem]);

    // Reset form after adding
    setNewItem({
      itemName: "",
      quantity: "",
      brand: "",
      subtotal: "",
      tax: "",
      availability: "",
    });
  }

  // Removes an item from the cart by its index
  function deleteItem(index) {
    setItems((prev) => prev.filter((_, i) => i !== index));
  }

  // Render form for adding items and the current shopping cart list
  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div className="form">
        <input
          type="text"
          name="itemName"
          placeholder="Item name"
          value={newItem.itemName}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={newItem.quantity}
          onChange={handleInputChange}
        />
        <input
          type="text"
          name="brand"
          placeholder="Brand"
          value={newItem.brand}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="subtotal"
          placeholder="Subtotal"
          value={newItem.subtotal}
          onChange={handleInputChange}
        />
        <input
          type="number"
          name="tax"
          placeholder="Tax"
          value={newItem.tax}
          onChange={handleInputChange}
        />
        <select
          name="availability"
          value={newItem.availability}
          onChange={handleInputChange}
        >
          <option value="">Availability...</option>
          <option value="In stock">In stock</option>
          <option value="Out of stock">Out of stock</option>
        </select>
        <button onClick={addItem}>Add Item</button>
      </div>
      {/* Display all cart items */}
      <ol>
        {items.map((item, index) => (
          <li className="item" key={index}>
            <span className="item-details">
              <strong>{item.itemName}</strong> (Qty: {item.quantity}) |{" "}
              {item.brand} | <strong>Subtotal: {item.subtotal}</strong> | Tax:{" "}
              {item.tax} | {item.availability}
            </span>
            <button className="delete-btn" onClick={() => deleteItem(index)}>
              Delete
            </button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;
