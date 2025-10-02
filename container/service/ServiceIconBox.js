"use client";

import React from "react";
import IconBoxData from "../../public/data/iconBox/icon-box.json";
import IconBox from "../../components/IconBox/IconBox.jsx";
import SectionTitle from "../../components/SectionTitles/SectionTitle";

const ServiceIconBox = ({ classOption = "" }) => {
  return (
    <section className={`section section-padding-t90-b100 ${classOption}`}>
      <div className="container">
        <SectionTitle
          title="From smooth collaborations to secure, innovative outcomes"
          subTitle="<span class='text-white'>With 13+ years of experience, we specialise in custom software, AI/ML integration, and mobile app development. Our team develops innovative web applications and custom technology solutions to meet your business needs. We focus on aligning our services with your goals to drive growth and efficiency, providing scalable solutions for long-term success.</span>"
        />

        <div className="row row-cols-lg-4 row-cols-md-2 row-cols-sm-2 row-cols-1 mb-n6">
          {IconBoxData &&
            IconBoxData.slice(0, 8).map((single, key) => (
              <div key={key} className="col mb-6" data-aos="fade-up">
                <IconBox classOption="box-border" data={single} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceIconBox;
