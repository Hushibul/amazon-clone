import React from "react";

import "./Home.css";

import amazonBanner from "../img/amazon_banner.jpg";
import Product from "./Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img src={amazonBanner} className="home__image" alt="" />

        <div className="home__row">
          <Product
            id={123564545}
            title="The learn Staff"
            price={19.99}
            image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            rating={5}
          />
          <Product
            id={3493892834}
            title="Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consectetur
              iste fugiat maxime quod recusandae reprehenderit voluptatibus illum in
                dignissimos, "
            price={29.99}
            image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={3847873984}
            title="Samsung UZDJJSDFLFG LED Watch"
            price={265.0}
            image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
            rating={4}
          />
          <Product
            id={87348783722}
            title="Infinix Hot 10"
            price={455.0}
            image="https://fdn2.gsmarena.com/vv/pics/infinix/infinix-smart-hd-2021-1.jpg"
          />
          <Product
            id={48324787328}
            title="Samsung Gallaxy Tab 8 Pro Max"
            price={200.8}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385.jpg"
            rating={3}
          />
        </div>
        <div className="home__row">
          <Product
            id={34764637264}
            title="Samsung Galaxy Gaming Monitor"
            price={400.66}
            image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355.jpg"
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;

// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/
//           Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
