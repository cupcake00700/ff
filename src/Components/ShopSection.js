import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./ShopSection.css";
import data from "./db.json";

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const priceRanges = [
  { label: "Under $50", min: 0, max: 50 },
  { label: "$50 - $100", min: 50, max: 100 },
  { label: "$100 - $200", min: 100, max: 200 },
  { label: "$200 - $300", min: 200, max: 300 },
  { label: "Above $300", min: 300, max: Infinity }
];

export default function ShopSection({ searchQuery }) {
  const [selectedBrand, setSelectedBrand] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [selectedPriceRange, setSelectedPriceRange] = useState("");

  const filteredData = data.filter((shoe) => {
    const price = parseFloat(shoe.r_money.replace(/[^0-9.-]+/g, ""));
    return (
      (selectedBrand ? shoe.brand === selectedBrand : true) &&
      (selectedCategory ? shoe.category === selectedCategory : true) &&
      (selectedColor ? shoe.color === selectedColor : true) &&
      (selectedPriceRange
        ? price >= selectedPriceRange.min && price <= selectedPriceRange.max
        : true) &&
      shoe.Fname.toLowerCase().includes(searchQuery.toLowerCase())
    );
  });

  const handleBrandClick = (brand) => setSelectedBrand(brand);
  const handleCategoryClick = (category) => setSelectedCategory(category);
  const handleColorClick = (color) => setSelectedColor(color);
  const handlePriceRangeClick = (range) => setSelectedPriceRange(range);

  return (
    <div>
      <div className="total-shopsection">
        <div className="sidebar">
          <div className="sidebar-contents">
            <h1>Category:</h1>
            <button
              onClick={() => handleCategoryClick("Sneakers")}
              className={selectedCategory === "Sneakers" ? "active" : ""}
            >
              Sneakers
            </button>
            <button
              onClick={() => handleCategoryClick("Palm shoes")}
              className={selectedCategory === "Palm shoes" ? "active" : ""}
            >
              Palm Shoes
            </button>
            <button
              onClick={() => handleCategoryClick("")}
              className={selectedCategory === "" ? "active" : ""}
            >
              All
            </button>
            <br />

            <h1>Color:</h1>
            <button
              onClick={() => handleColorClick("White")}
              className={selectedColor === "White" ? "active" : ""}
            >
              White
            </button>
            <button
              onClick={() => handleColorClick("Blue")}
              className={selectedColor === "Blue" ? "active" : ""}
            >
              Blue
            </button>
            <button
              onClick={() => handleColorClick("Red")}
              className={selectedColor === "Red" ? "active" : ""}
            >
              Red
            </button>
            <button
              onClick={() => handleColorClick("Black")}
              className={selectedColor === "Black" ? "active" : ""}
            >
              Black
            </button>
            <button
              onClick={() => handleColorClick("")}
              className={selectedColor === "" ? "active" : ""}
            >
              All
            </button><br></br>

            <h1>Price:</h1>
            {priceRanges.map((range) => (
              <button
                key={range.label}
                onClick={() => handlePriceRangeClick(range)}
                className={
                  selectedPriceRange === range ? "active" : ""
                }
              >
                {range.label}
              </button>
            ))}
            <button
              onClick={() => handlePriceRangeClick("")}
              className={selectedPriceRange === "" ? "active" : ""}
            >
              All
            </button>
          </div>
        </div>

        <div className="hero-and-mainsection">
          <div className="recommended">
            <h4>Recommended:</h4>
            <button
              onClick={() => handleBrandClick("Puma")}
              className={selectedBrand === "Puma" ? "active" : ""}
            >
              Puma
            </button>
            <button
              onClick={() => handleBrandClick("Nike")}
              className={selectedBrand === "Nike" ? "active" : ""}
            >
              Nike
            </button>
            <button
              onClick={() => handleBrandClick("")}
              className={selectedBrand === "" ? "active" : ""}
            >
              All
            </button>
          </div>

          <div className="hero-section"></div>

          <div className="shopAndPanel1">
            <div className="shop-section">
              {filteredData.map((shoe) => (
                <Link key={shoe.id} to={`/checkout/${shoe.id}`} className="box">
                  <div
                    style={{
                      backgroundImage: `url(${shoe.image})`,
                      backgroundSize: "cover",
                      height: "200px",
                      width: "100%",
                    }}
                  ></div>
                  <div>
                    <div className="intro">
                      <p>{shoe.intro}</p>
                    </div>
                    <div className="main">
                      <p>{shoe.Fname}</p>
                    </div>
                    <div className="money">
                      <div className="s-money">
                        <p>{shoe.s_money}</p>
                      </div>
                      <div className="r-money">
                        <h4>{shoe.r_money}</h4>
                      </div>
                      <div className="off">
                        <h3>{shoe.off}</h3>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            <div className="panel1">
              <button onClick={scrollToTop} className="buttonBottom">
                Back to Top
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
