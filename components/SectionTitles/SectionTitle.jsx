"use client";

import PropTypes from "prop-types";
import React, { memo, useMemo } from "react";

const SectionTitleComponent = ({ title, subTitle, titleOption, headingOption }) => {
  const titleContent = useMemo(() => ({ __html: title }), [title]);
  const subTitleContent = useMemo(() => ({ __html: subTitle }), [subTitle]);

  return (
    // <div
    //   className={`section-title ${titleOption}`}
    //   data-aos="fade-up"
    //   style={{
    //     contentVisibility: "auto",
    //     containIntrinsicSize: "0 100px",
    //   }}
    // >
    //   <h2
    //     className={`title ${headingOption}`}
    //     dangerouslySetInnerHTML={titleContent}
    //     style={{
    //       contentVisibility: "auto",
    //       containIntrinsicSize: "0 42px",
    //       willChange: "transform",
    //       transform: "translateZ(0)",
    //       backfaceVisibility: "hidden",
    //       WebkitFontSmoothing: "antialiased",
    //     }}
    //   />
    //   {subTitle && (
    //     <p
    //       className="mt-2"
    //       dangerouslySetInnerHTML={subTitleContent}
    //       style={{
    //         contentVisibility: "auto",
    //         containIntrinsicSize: "0 24px",
    //       }}
    //     />
    //   )}
    // </div>
    <div
  className={`section-title ${titleOption}`}
  data-aos="fade-up"
  style={{
    contentVisibility: "auto",
    containIntrinsicSize: "0 100px",
  }}
>
  <h2
    className={`title ${headingOption}`}
    dangerouslySetInnerHTML={titleContent}
    style={{
      contentVisibility: "auto",
      containIntrinsicSize: "0 42px",
      willChange: "transform",
      transform: "translateZ(0)",
      backfaceVisibility: "hidden",
      WebkitFontSmoothing: "antialiased",
    }}
  />
  {subTitle && (
    <div
      className="mt-2"
      dangerouslySetInnerHTML={subTitleContent}
      style={{
        contentVisibility: "auto",
        containIntrinsicSize: "0 24px",
      }}
    />
  )}
</div>

  );
};

SectionTitleComponent.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  titleOption: PropTypes.string,
  headingOption: PropTypes.string,
};

SectionTitleComponent.defaultProps = {
  titleOption: "text-center",
  headingOption: "title",
};

const SectionTitle = memo(SectionTitleComponent);
SectionTitle.displayName = "SectionTitle";

export default SectionTitle;
