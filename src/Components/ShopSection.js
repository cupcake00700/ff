import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './ShopSection.css';
import data from './db.json';

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

export default function ShopSection() {
    const [selectedBrand, setSelectedBrand] = useState('');

    const filteredData = selectedBrand
        ? data.filter(shoe => shoe.brand === selectedBrand)
        : data;

    const handleBrandClick = (brand) => {
        setSelectedBrand(brand);
    };

    return (
        <div>
            <div className="recommended">
                <h4>Recommended :</h4>
                <button onClick={() => handleBrandClick('Puma')}>Puma</button>
                <button onClick={() => handleBrandClick('Nike')}>Nike</button>
                <button onClick={() => handleBrandClick('')}>All</button>
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
    );
}
