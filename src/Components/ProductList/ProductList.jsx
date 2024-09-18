import React, { useEffect } from "react";
import products from "../../api/products.json";
import { useDispatch, useSelector } from "react-redux";
import CartButtons from "./CartButtons";
import { useGetTodosQuery } from "../../Redux/apiSlice";
import "./ProductList.css";
import { fetchTodos } from "../../Redux/Thunkapi";

const ProductList = () => {
  const dispatch = useDispatch()
  const { cartCount, cartList } = useSelector((state) => state.cart);
  const { todos = [],status,error } = useSelector((state) => state.todos)
  useEffect(()=>{
    dispatch(fetchTodos())
  },[dispatch])
  
  if (status === 'loading') return <div>Loading...</div>;
  if (status === 'failed') return <div>Error: {error}</div>;
  console.log(todos);
 
  return (
    <section className="container">
      {products?.map((product) => (
        <div className="product-container" key={product.id || product.title}> 
          <img src={product.image} alt={product.title} />
          <h3>{product.title}</h3>
          <CartButtons product={product} />
        </div>
      ))}

      {todos && (
        <div>
          <h2>Todos:</h2>
          <ul>
            {todos.map((todo) => (
              <li key={todo.id}>{todo.title}</li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};

export default ProductList;
