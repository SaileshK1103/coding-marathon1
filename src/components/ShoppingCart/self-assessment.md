# Self-Assessment: ShoppingCart.jsx
  - Group member: Sailesh Karki
  - Date : 14.11.2025
  
## 1. Functionality
- **Does the component meet the requirements?**
  - Handles all core features: Users can add items with fields for itemName, quantity, brand, subtotal, tax, and availability. Items display correctly and can be deleted.
  - Edge cases are partly handled: The “Add Item” function blocks adding when itemName or quantity is blank, but does not check for empty brand, subtotal, tax, or availability. Duplicate items are not blocked.
  - No major bugs: Form, listing, and remove functions all behave as expected.

- **How well does the component integrate with other parts of the application?**
  - All state is managed locally with useState, so the component doesn’t interfere with the parent layout or navigation. Integration into the full app via routing works smoothly.

## 2. Code Quality
- **Readability**
  - The code uses clear and descriptive function and variable names, which makes its purpose easy to understand.
  - Its logical structure and consistent formatting help maintain readability for any developer reviewing or updating the code

- **Reusability**
  - Logic for item listing and cart management could be reused for similar list components. Extraction of the item display into a separate component would make it even more reusable.

- **Comments and Documentation**
  - [ Yes there are comments explaining the complex logic.] Are there comments explaining complex logic?
  - [ Inline comments for each major function (addItem, deleteItem, handleInputChange) and for render sections (input form, cart display).] Is there documentation for how to use the component?

## 3. Performance
- **Efficiency**
  - [The component avoids unnecessary re-renders and performs well for typical cart sizes, but isn’t tuned for very large datasets. ]

- **State Management**
  - [ State is kept minimal.] Is state managed efficiently (e.g., minimal state, derived state)?
  - [UseState is used correctly for managing items and form data.] Are hooks (e.g., `useState`, ) used correctly?

## 4. Overall Assessment
- **Strengths**
  - Simple, clean logic and UI; easy to maintain and extend.
- **Areas for Improvement**
  - Add better input validation and support for edge cases like duplicate items.

- **Action Plan**
  - Strengthen form checks and refactor for potential scalability.

## 5. Additional Notes
- The cart’s local state and component-scoped styles keep it isolated and maintainable within the app.