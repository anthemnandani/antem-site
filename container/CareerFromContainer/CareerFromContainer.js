import React from "react";
import SectionTitle from "../../components/SectionTitles/SectionTitle";
import CareerFrom from "../../components/CareerFrom/CareerFrom";

const CareerFromContainer = ({ classOption }) => {
  return (
    <div
      className={`contact-form-section section section-padding-t90-b100 ${classOption}`}
    >
      <div className="container">
        <div className="row">
          <div className="offset-lg-2 col-lg-8">
            <SectionTitle
              headingOption="fz-32"
              title="Join Us at Anthem Infotech"
              subTitle="We make it easy for talented individuals to connect and grow with us. Whether you're starting your career or looking to advance, exciting opportunities await"
            />
            <CareerFrom />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareerFromContainer;
