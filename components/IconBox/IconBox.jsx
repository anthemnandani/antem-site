"use client";

import PropTypes from "prop-types";
import React from "react";
import ReactVivus from "react-vivus";
import Link from "next/link";

const IconBox = ({ data, classOption = "icon-box text-center" }) => {
  const iconName = data.icon;
  const iconUrl = `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL
}/${iconName}`;

  return (
    <div className={`icon-box text-center ${classOption}`}>
      <Link href={data.link} className="link">
        <div className="icon">
          <ReactVivus
            id={`servicesvg-${data.id}`}
            option={{
              file: iconUrl,
              animTimingFunction: "EASE",
              type: "oneByOne",
              delay: 80,
            }}
          />
        </div>
        <div className="content">
          <h3 className="title">{data.title}</h3>
          <div className="desc">
            <p>{data.desc}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};

IconBox.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string,
    link: PropTypes.string.isRequired,
  }).isRequired,
  classOption: PropTypes.string,
};

export default IconBox;
