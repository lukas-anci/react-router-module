import { Link } from 'react-router-dom';
const Products = () => {
  return (
    <>
      <h1>The Products Page</h1>
      <ul>
        <li>
          <Link to="products/boat">A boat</Link>
        </li>
        <li>
          <Link to="products/book">A book</Link>
        </li>
        <li>
          <Link to="products/a-train">A train</Link>
        </li>
      </ul>
    </>
  );
};

export default Products;
