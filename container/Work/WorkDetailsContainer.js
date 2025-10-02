import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ImageCarousel from "../../components/swiper/ImageCarousel";
import Loader from "../Loader/Loader";

const WorkDetailsContainer = ({ projects, loading, classOption }) => {
  const toTitleCase = (str) =>
    str
      .split(" ")
      .map((word) =>
        word.charAt(0) === word.charAt(0).toUpperCase()
          ? word
          : word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

  return (
    <div className={`section section-padding ${classOption}`}>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          <div className="row pt--100 pb--80">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="work-left work-details" data-aos="fade-up">
                <div className="portfolio-main-info">
                  <h6 data-aos="fade-up">ABOUT THE PROJECT</h6>
                  <div className="work-details-list mt-2">
                    <div className="details-list">
                      {/* <label>
                      <i
                        className="far fa-calendar text-primary"
                        title="Project Start Date"
                      ></i>
                    </label> */}
                      {
                        /* <span>{projects.data?.dateofProject.split("T")[0]}</span> */
                        <span title="Project Start Date">
                          <i className="far fa-calendar text-primary"></i>{" "}
                          {new Date(
                            projects.data?.dateofProject
                          ).toLocaleDateString("en-GB", {
                            day: "2-digit",
                            month: "short",
                            year: "numeric",
                          })}
                        </span>
                      }
                    </div>
                    <div className="details-list"></div>
                    <div className="details-list">
                      {/* <label>Categories</label> */}
                      <span title="Categories">
                        {/* <i className="fa fa-pencil-alt text-primary"></i>{" "} */}
                        <i className="fa-solid fa-list text-primary"></i>{" "}
                        {projects.data?.projectCategory}
                      </span>
                    </div>

                    <div className="details-list">
                      {/* <label>SubCategories</label> */}
                      <span title="Sub Categories">
                        {" "}
                        {/* <i className="fa fa-pencil-alt text-primary"></i>{" "} */}
                        <i className="fa-solid fa-diagram-project text-primary"></i>{" "}
                        {projects.data?.projectSubCategory}
                      </span>
                    </div>

                    {/* 
                  not in use
                  <ul className="meta mb-0 mt-12">
                    <li><i className="fa fa-pencil-alt"></i>{data.author}</li>
                    <li><i className="far fa-calendar"></i>{data.date}</li>
                    <li><i className="fas fa-tags text-primary"></i>{cate}</li>
                    <li><i className="fas fa-comments"></i>4 Comments</li>
                    <li className="media"><Link to={process.env.PUBLIC_URL + "/"}><i className="fas fa-share-alt"></i>Share this post</Link>
                        <div className="list">
                            <a href="#"><i className="fab fa-facebook-f"></i></a>
                            <a href="#"><i className="fab fa-twitter"></i></a>
                            <a href="#"><i className="fab fa-linkedin"></i></a>
                            <a href="#"><i className="fab fa-tumblr-square"></i></a>
                        </div>
                    </li>
                </ul> */}
                  </div>
                  <div
                    className="details-list d-flex"
                    style={{ margin: "5px 0px" }}
                  >
                    {/* <label>Technologies</label> */}
                    {/* <i
                      className="fas fa-tags text-primary mt-4 me-1"
                      title="Technologies"
                    ></i>{" "} */}
                    <div className="tagcloud mt-1">
                      {(projects.data?.technolgies || "")
                        .split(",")
                        .map((highlight) => highlight.trim())
                        .filter((highlight) => highlight)
                        .map((highlight, index) => (
                          <Link key={index} to={`#`}>
                            {toTitleCase(highlight)}
                          </Link>
                        ))}
                    </div>
                    {/* <Link
                      className="btn btn-primary btn-hover-secondary"
                      to={process.env.PUBLIC_URL + projects.data.url}
                    >
                      {`View Live`}
                    </Link> */}
                  </div>
                  <div className="my-2">
                    {projects?.data?.url && (
                      <div className="work-btn">
                        <a
                          className="btn btn btn-bottom"
                          href={projects?.data?.url}
                          target="_blank"
                          rel="noreferrer"
                          data-hover="Live Preview"
                          style={{ background: "#0e6497" }}
                        >
                          Live Preview
                        </a>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-8 col-md-6 col-12">
              <div className="work-left work-details">
                <div className="work-main-info">
                  <div className="work-content">
                    <h3 className="title text-primary" data-aos="fade-up">
                      {projects?.data?.projectName}
                    </h3>

                    <div className="desc">
                      {/* {data.body.map((value, i) => {
                      return (
                        <div
                          key={i}
                          className="content mb-5"
                          data-aos="fade-up"
                          dangerouslySetInnerHTML={{ __html: value }}
                        />
                      );
                    })} */}
                      <div
                        dangerouslySetInnerHTML={{
                          __html: projects.data?.description,
                        }}
                      />
                      {/* {projects?.data?.url && (
                      <div className="work-btn">
                        <a
                          className="btn btn-primary btn-hover-secondary"
                          href={projects?.data?.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Live Preview
                        </a>
                      </div>
                    )} */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="row">
          <div className="col-lg-12">
            <div className="custom-column-thumbnail mt-1" data-aos="fade-up">
              <img
                className="w-100"
                src={`${process.env.REACT_APP_PUBLIC_URL_CONTENT}/PortfolioImages/${projects.data?.projectImage}`}
                alt="Agency"
              />
            </div>
          </div>
        </div> */}

          <div className="row">
            <div className="col-lg-4 col-md-12 col-12">
              <div className="digital-marketing" data-aos="fade-up">
                {/* <h3 className="heading heading-h3">{data.subContent.title}</h3> */}
              </div>
            </div>
            <div className="col-lg-7 col-md-12 col-12 offset-lg-1">
              <div
                className="digital-marketing mt-lg-0 mt-6"
                data-aos="fade-up"
              >
                <div className="inner">
                  {/* <p>{data.subContent.text}</p> */}
                </div>
              </div>
            </div>
          </div>

          {/* <div className="custom-layout-gallery mt-12">
          <div className="row">
            {projects &&
              projects.img?.map((item, index) => (
                <div className="col-lg-6 col-md-6 col-12 p-3" key={index}>
                  <div className="thumbnail" data-aos="fade-up">
                    <img
                      className="w-100"
                      src={`${process.env.REACT_APP_PUBLIC_URL_CONTENT}/PortfolioImages/${item?.imageURL}`}
                      alt={`Gallery Image ${index + 1}`}
                    />
                  </div>
                </div>
              ))}
          </div>
        </div> */}
          {projects && <ImageCarousel imageUrls={projects.img} />}
        </div>
      )}
    </div>
  );
};

WorkDetailsContainer.propTypes = {
  data: PropTypes.object,
};

export default WorkDetailsContainer;
