"use client";

import React from "react";
import CounterUpData from "../../public/data/counter/counterText.json";
import CounterUpItem from "../../components/CounterUp/CounterUpItem.jsx";

const Funfact = ({ classOption = "section section-padding-bottom" }) => {
  return (
    <section className={`${classOption}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 mx-auto">
            <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
              {CounterUpData &&
                CounterUpData.map((single, key) => (
                  <div key={key} className="col mb-6" data-aos="fade-up">
                    <CounterUpItem data={single} />
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Funfact;
