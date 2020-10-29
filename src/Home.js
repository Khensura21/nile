import React from "react";
import "./Home.css";
import Product from "./Product";


function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazonhero"
        />

        <div className="home__row">

          <Product
            id="274738837"
            title="Mastery"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71LRdEUOmNL.jpg"
            rating={5}
          />
          <Product
            id="274738837"
            title="Mastery"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71LRdEUOmNL.jpg"
            rating={5}
          />

        </div>

         <div className="home__row">
          <Product
            id="274739537"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="274543837"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />
          <Product
            id="275538837"
            title="Samsung 49' Curved LED Gaming Monitor"
            price={199.99}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={5}
          />

        </div>

        <div className="home__row">
          <Product
            id="274738837"
            title="New Ipad Pro"
            price={899.99}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SEX385_.jpg"
            rating={5}
          />
        </div> 
      </div>
    </div>
  );
}
export default Home;
