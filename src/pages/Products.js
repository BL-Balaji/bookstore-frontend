import { useEffect, useState } from "react";

import {
  getAllProducts,
  searchProducts
} from "../services/productService";

import {
  getCategories
} from "../services/categoryService";

import ProductCard from "../components/ProductCard";
import HeroBanner from "../components/HeroBanner";
import CategoriesSection from "../components/CategoriesSection";
import TrendingBooks from "../components/TrendingBooks";
import FeaturedBooks from "../components/FeaturedBooks";
import CategorySidebar from "../components/CategorySidebar";

import "./Products.css";

function Products({ keyword }) {

  const [products, setProducts] = useState([]);

  const [categories, setCategories] = useState([]);

  useEffect(() => {

    fetchProducts();
    fetchCategories();

  }, []);

  useEffect(() => {

    if (!keyword?.trim()) {

      fetchProducts();

      return;
    }

    handleSearch(keyword);

  }, [keyword]);

  const fetchProducts = async () => {

    try {

      const data = await getAllProducts();

      setProducts(data);

    } catch (error) {

      console.log(error);
    }
  };

  const fetchCategories = async () => {

    try {

      const data = await getCategories();

      setCategories(data);

    } catch (error) {

      console.log(error);
    }
  };

  const handleSearch = async (value) => {

    try {

      const data = await searchProducts(value);

      setProducts(data);

    } catch (error) {

      console.log(error);
    }
  };

  return (

    <div>

      {/* Hero Banner */}
      <HeroBanner />

      {/* Categories */}
      <CategoriesSection />

      {/* Trending Books */}
      <TrendingBooks />

      {/* Featured Books */}
      <FeaturedBooks />

      {/* Products Section */}
      <div className="container-fluid mt-5">

        <div className="row">

          {/* Sidebar */}
          <div className="col-lg-2 mb-4">

            <CategorySidebar
              categories={categories}
              onSelect={(id) =>
                console.log(id)
              }
            />

          </div>

          {/* Products */}
          <div className="col-lg-10">

            <h2 className="section-title">
              📚 Available Books
            </h2>

            <div className="row">

              {
                products.map((product) => (

                  <div
                    className="
                    col-xl-3
                    col-lg-4
                    col-md-6
                    col-sm-12
                    mb-4"
                    key={product.id}
                  >

                    <ProductCard
                      product={product}
                    />

                  </div>

                ))
              }

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Products;