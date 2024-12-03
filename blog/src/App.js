// import React, { useState, useEffect } from "react";

// const App = () => {
//   const [products, setProducts] = useState([]); // Full list of products
//   const [filteredProducts, setFilteredProducts] = useState([]); // Filtered list
//   const [filters, setFilters] = useState({
//     price: 0,
//     category: "",
//   });

//   // Load JSON data
//   useEffect(() => {
//     fetch("/Data.json")
//       .then((res) => res.json())
//       .then((data) => {
//         setProducts(data);
//         setFilteredProducts(data); // Initially, show all products
//       });
//   }, []);

//   // Handle filter changes
//   const handleFilterChange = (e) => {
//     const { name, value } = e.target;
//     setFilters({ ...filters, [name]: value }); // Update filters dynamically
//   };

//   // Apply filters
//   useEffect(() => {
//     let filtered = products;

//     // Price Filter
//     if (filters.price > 0) {
//       filtered = filtered.filter((product) => product.price <= filters.price);
//     }

//     // Category Filter
//     if (filters.category) {
//       filtered = filtered.filter(
//         (product) => product.category === filters.category
//       );
//     }

//     setFilteredProducts(filtered);
//   }, [filters, products]);

//   return (
//     <div className="layout">
//       {/* Sidebar with Filters */}
//       <div className="left-sidebar">
//         <h3>Filters</h3>
//         <label>
//           Max Price:
//           <input
//             type="number"
//             name="price"
//             value={filters.price}
//             onChange={handleFilterChange}
//           />
//         </label>

//         <label>
//           Category:
//           <select
//             name="category"
//             value={filters.category}
//             onChange={handleFilterChange}
//           >
//             <option value="">All</option>
//             <option value="Electronics">Electronics</option>
//             <option value="Clothing">Clothing</option>
//           </select>
//         </label>
//       </div>

//       {/* Products Grid */}
//       <div className="content">
//         <div className="product-grid">
//           {filteredProducts.map((product) => (
//             <div key={product.id} className="product-card">
//               <img src={product.image} alt={product.name} />
//               <h3>{product.name}</h3>
//               <p>Price: ₹{product.price}</p>
//               <p>Category: {product.category}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default App;