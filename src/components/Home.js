import React, { Fragment, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productsActions";
import Loader from "./layouts/Loader";
import Metadata from "./layouts/Metadata";
import Product from "./product/Product";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading } = useSelector((state) => state.productsState);

  useEffect(() => {
    dispatch(getProducts);
  }, []);
  return (
    <div>
      <Fragment>
        {loading ? <Loader/>:
      <Fragment>
        <Metadata title={"All products"} />
        <h1 id="products_heading">Latest Products</h1>

        <section id="products" className="container mt-5">
          <div className="row">
            {products &&
              products.map((product) => (
              <Product product={product}/>
              ))}
          </div>
        </section>
      </Fragment>
        }
      </Fragment>
    </div>
  );
};

export default Home;
