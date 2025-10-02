"use client";

import React, { useState } from "react";
import Link from "next/link";
import Tilt from "react-parallax-tilt";

function NewNavBar() {
  const [scale] = useState(1.04);

  // Helper to build full image URL from env variable
  const imgUrl = (path) =>
    `${process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL}${path}`;

  return (
    <nav className="site-main-menu">
      <div className="ruby-menu-demo-header">
        <div className="ruby-wrapper">
          <ul className="ruby-menu">
            <li className="ruby-active-menu-item">
              <Link href="/Home/Index">
                <span className="menu-text">Home</span>
              </Link>
            </li>

            <li className="ruby-menu-mega-blog">
              <Link href="/Home/Services">
                <span className="menu-text">Services</span>
              </Link>

              <div className="mega-height">
                <ul className="ruby-menu-mega-blog-nav">
                  {/* Custom Software Section */}
                  <li className="ruby-active-menu-item">
                    <Link href="/Home/Custom-Software">
                      <span className="menu-text">Custom Software</span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            <img
                              src={imgUrl(
                                "/images/mega-menu/Custom-Software/customer-service-agent-thin.svg"
                              )}
                              className="custom-svg"
                              alt="Customer Relationship Management"
                            />
                            <span className="menu-text">
                              <a href="#">Customer Relationship Management</a>
                            </span>
                          </Tilt>
                        </div>

                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={imgUrl("/images/mega-menu/Custom-Software/Content.svg")}
                              className="custom-svg"
                              alt="Content Management System"
                            />
                            <span className="menu-text">
                              <a href="#">Content Management System</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={imgUrl("/images/mega-menu/Custom-Software/business-briefcase-thin.svg")}
                              className="custom-svg"
                              alt="Business Process Management"
                            />
                            <span className="menu-text">
                              <a href="#">Business Process Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={imgUrl("/images/mega-menu/Custom-Software/HumanResourceManagement.svg")}
                              className="custom-svg"
                              alt="Human Resource Management"
                            />
                            <span className="menu-text">
                              <a href="#">Human Resource Management</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>

                  {/* Web & Mobile Apps Section */}
                  <li className="hidden-md">
                    <Link href="/Home/Web-Mobile-Apps">
                      <span className="menu-text">Web & Mobile Apps</span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                
                             imgUrl("/images/mega-menu/Web-Mobile-Apps/wordpress-thin.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="WordPress Websites"
                            />
                            <span className="menu-text">
                              <a href="#">WordPress Websites</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               imgUrl(
                                "/images/mega-menu/Web-Mobile-Apps/iOSAppDevelopment.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="iOS App Development"
                            />
                            <span className="menu-text">
                              <a href="#">iOS App Development</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               imgUrl(
                                "/images/mega-menu/Web-Mobile-Apps/android.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Android App Development"
                            />
                            <span className="menu-text">
                              <a href="#">Android App Development</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              
                                imgUrl("/images/mega-menu/Web-Mobile-Apps/code.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Progressive Web Apps"
                            />
                            <span className="menu-text">
                              <a href="#">Progressive Web Apps</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                
                               imgUrl("/images/mega-menu/Web-Mobile-Apps/app-developer.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Hybrid App Development"
                            />
                            <span className="menu-text">
                              <a href="#">Hybrid App Development</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                           
                                imgUrl("/images/mega-menu/Web-Mobile-Apps/performance.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Performance Optimisation"
                            />
                            <span className="menu-text">
                              <a href="#">Performance Optimisation</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              
                                imgUrl("/images/mega-menu/Web-Mobile-Apps/api.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Web API Development"
                            />
                            <span className="menu-text">
                              <a href="#">Web API Development</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               imgUrl(
                                "/images/mega-menu/Web-Mobile-Apps/windows.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="App Integration"
                            />
                            <span className="menu-text">
                              <a href="#">App Integration</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>

                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL + "/Home/AI-Powered-Solutions"
                      }
                    >
                      <span className="menu-text">AI-Powered Solutions</span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/AI-Powered-Solutions/file-ai.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Predictive Analytics"
                            />
                            <span className="menu-text">
                              <a href="#">Generative AI </a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/AI-Powered-Solutions/discussion.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Natural Language Processing"
                            />
                            <span className="menu-text">
                              <a href="#">Chat GPT Integration</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/AI-Powered-Solutions/chart-multi-type.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Recommendation Systems"
                            />
                            <span className="menu-text">
                              <a href="#">Predictive Analytics</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/AI-Powered-Solutions/technologist.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Deep Learning Models"
                            />
                            <span className="menu-text">
                              <a href="#">Computer Vision </a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               imgUrl(
                                "/images/mega-menu/AI-Powered-Solutions/user-speaker.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Classification Algorithms"
                            />
                            <span className="menu-text">
                              <a href="#"> Natural Language Processing</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              
                                imgUrl("/images/mega-menu/AI-Powered-Solutions/DataExtraction.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Clustering Techniques"
                            />
                            <span className="menu-text">
                              <a href="#">Machine Learning</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/AI-Powered-Solutions/AI-1.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Optimisation Algorithms"
                            />
                            <span className="menu-text">
                              <a href="#">Deep Learning Models</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL + "/Home/Marketing-Automation"
                      }
                    >
                      <span className="menu-text">Marketing Automation</span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Marketing-Automation/envelope-paper-email-thin.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Email Campaigns"
                            />
                            <span className="menu-text">
                              <a href="#">Email Campaigns</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                            imgUrl(
                                "/images/mega-menu/Marketing-Automation/share.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Social Media Automation"
                            />
                            <span className="menu-text">
                              <a href="#">Social Media Automation</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Marketing-Automation/seo-marketing.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Search Engine Optimisation"
                            />
                            <span className="menu-text">
                              <a href="#">Search Engine Optimisation</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Marketing-Automation/one-finger-click.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Pay-Per-Click Management"
                            />
                            <span className="menu-text">
                              <a href="#">Pay-Per-Click Management</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               
                             
                                imgUrl("/images/mega-menu/Marketing-Automation/Content.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Content Management"
                            />
                            <span className="menu-text">
                              <a href="#">Content Management</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                             imgUrl(
                                "/images/mega-menu/Marketing-Automation/user-analytics.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Analytics & Reporting"
                            />
                            <span className="menu-text">
                              <a href="#">Analytics & Reporting</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                          imgUrl(
                                "/images/mega-menu/Marketing-Automation/sms.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="SMS Marketing"
                            />
                            <span className="menu-text">
                              <a href="#">SMS Marketing</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                            imgUrl(
                                "/images/mega-menu/Marketing-Automation/customer-service.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="CRM Integration"
                            />
                            <span className="menu-text">
                              <a href="#">CRM Integration</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={process.env.PUBLIC_URL + "/Home/MVP-Development"}
                    >
                      <span className="menu-text">MVP Development</span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                           imgUrl(
                                "/images/mega-menu/MVP-Development/circuit.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Prototyping"
                            />
                            <span className="menu-text">
                              <a href="#">Prototyping</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               imgUrl(
                                "/images/mega-menu/MVP-Development/user-interface.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="UX/UI Design"
                            />
                            <span className="menu-text">
                              <a href="#">UX/UI Design</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/MVP-Development/feedback2.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="User Feedback Integration"
                            />
                            <span className="menu-text">
                              <a href="#">User Feedback Integration</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                imgUrl(
                                "/images/mega-menu/MVP-Development/design-and-development-02.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Iterative Development"
                            />
                            <span className="menu-text">
                              <a href="#">Iterative Development</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                             imgUrl(
                                "/images/mega-menu/MVP-Development/agile.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Agile Development"
                            />
                            <span className="menu-text">
                              <a href="#">Agile Development</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              
                              imgUrl(
                                "/images/mega-menu/MVP-Development/jira.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Testing & QA"
                            />
                            <span className="menu-text">
                              <a href="#">Testing & QA</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/MVP-Development/launch.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Launch Strategy"
                            />
                            <span className="menu-text">
                              <a href="#">Launch Strategy</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/MVP-Development/performance.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Performance Analytics"
                            />
                            <span className="menu-text">
                              <a href="#">Performance Analytics</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL + "/Home/Enterprise-Software"
                      }
                    >
                      <span className="menu-text">Enterprise Software</span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Enterprise-Software/security.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Security Solutions"
                            />
                            <span className="menu-text">
                              <a href="#">Security Solutions</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                             imgUrl(
                                "/images/mega-menu/Enterprise-Software/network-server-database.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Database Management"
                            />
                            <span className="menu-text">
                              <a href="#">Database Management</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Enterprise-Software/integration.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="System Integration"
                            />
                            <span className="menu-text">
                              <a href="#">System Integration</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                           imgUrl(
                                "/images/mega-menu/Enterprise-Software/chart-multi-line.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Analytics Platforms"
                            />
                            <span className="menu-text">
                              <a href="#">Analytics Platforms</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Enterprise-Software/get-ahead-of-risk-and-compliance.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Compliance Management"
                            />
                            <span className="menu-text">
                              <a href="#">Compliance Management</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                            imgUrl(
                                "/images/mega-menu/Enterprise-Software/workflow-diagram.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Workflow Automation"
                            />
                            <span className="menu-text">
                              <a href="#">Workflow Automation</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={process.env.PUBLIC_URL + "/Home/Data-Analysis-ETL"}
                    >
                      <span className="menu-text">Data Analysis & ETL</span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                          imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/DataExtraction.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Data Extraction"
                            />
                            <span className="menu-text">
                              <a href="#">Data Extraction</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/DataTransforming.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Data Transformation"
                            />
                            <span className="menu-text">
                              <a href="#">Data Transformation</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/Dataloading.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Data Loading"
                            />
                            <span className="menu-text">
                              <a href="#">Data Loading</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/CustomDashboards.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Custom Dashboards"
                            />
                            <span className="menu-text">
                              <a href="#">Custom Dashboards</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/BussinessIntelligence.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Business Intelligence"
                            />
                            <span className="menu-text">
                              <a href="#">Business Intelligence</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                            imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/database.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Big Data Solutions"
                            />
                            <span className="menu-text">
                              <a href="#">Big Data Solutions</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                            
                              imgUrl(
                                "/images/mega-menu/Data-Analysis-ETL/DataCleaning.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Data Cleaning"
                            />
                            <span className="menu-text">
                              <a href="#">Data Cleaning</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link href={process.env.PUBLIC_URL + "/Home/UI-UX-Design"}>
                      <span className="menu-text">UI/UX Design </span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                               imgUrl(
                                "/images/mega-menu/UI-UX-Design/WebsiteDesignDevelopment.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Web Design"
                            />
                            <span className="menu-text">
                              <a href="#">Web Design</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                             imgUrl(
                                "/images/mega-menu/UI-UX-Design/Mobile-UI-Design.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="obile UI Design"
                            />
                            <span className="menu-text">
                              <a href="#">Mobile UI Design</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                           imgUrl(
                                "/images/mega-menu/UI-UX-Design/Prototyping.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Prototyping"
                            />
                            <span className="menu-text">
                              <a href="#">Prototyping</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/UI-UX-Design/Brand-Design.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Brand Design"
                            />
                            <span className="menu-text">
                              <a href="#">Brand Design</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/UI-UX-Design/Responsive.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Responsive Design"
                            />
                            <span className="menu-text">
                              <a href="#">Responsive Design</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/On-Demand-Dedicated-Talent"
                      }
                    >
                      <span className="menu-text">
                        On-Demand Dedicated Talent{" "}
                      </span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/On-Demand-Dedicated-Talent/Dedicated-Developer.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Dedicated Professionals"
                            />
                            <span className="menu-text">
                              <a href="#">Dedicated Professionals</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/On-Demand-Dedicated-Talent/man-technologist.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Remote Developers"
                            />
                            <span className="menu-text">
                              <a href="#">Remote Developers</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/On-Demand-Dedicated-Talent/connection-thin.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Rapid Hiring"
                            />
                            <span className="menu-text">
                              <a href="#">Rapid Hiring</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/On-Demand-Dedicated-Talent/woman-technologist.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Project-Specific Developers"
                            />
                            <span className="menu-text">
                              <a href="#">Project-Specific Developers</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/On-Demand-Dedicated-Talent/share-knowledge.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Long-Term Partnerships"
                            />
                            <span className="menu-text">
                              <a href="#">Long-Term Partnerships</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/On-Demand-Dedicated-Talent/people-dialogue.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="End-to-End Support"
                            />
                            <span className="menu-text">
                              <a href="#">End-to-End Support</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                </ul>
              </div>
            </li>

            <li className="ruby-menu-mega-blog">
              <Link href={process.env.PUBLIC_URL + "/Home/Industries"}>
                <span className="menu-text">Industries</span>
              </Link>
              <div className="mega-height">
                <ul className="ruby-menu-mega-blog-nav">
                  <li className="ruby-active-menu-item">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Workforce Compliance Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Workforce Compliance Solutions
                      </span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                              imgUrl(
                                "/images/mega-menu/Workforce-Compliance-Solutions/Compliance-Tracking.svg")
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Compliance Tracking"
                            />
                            <span className="menu-text">
                              <a href="#">Compliance Tracking</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Workforce-Compliance-Solutions/Real-Time-Reporting.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Real-Time Reporting"
                            />
                            <span className="menu-text">
                              <a href="#">Real-Time Reporting</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Workforce-Compliance-Solutions/Wage-Verification.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Wage Verification"
                            />
                            <span className="menu-text">
                              <a href="#">Wage Verification</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Workforce-Compliance-Solutions/Training-Modules.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Training Modules"
                            />
                            <span className="menu-text">
                              <a href="#">Training Modules</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Workforce-Compliance-Solutions/Risk-Assessment.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Risk Assessment"
                            />
                            <span className="menu-text">
                              <a href="#">Risk Assessment</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Workforce-Compliance-Solutions/Financial-Audit.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Financial Audit"
                            />
                            <span className="menu-text">
                              <a href="#">Financial Audit</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>

                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Publishing Rights Management".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Publishing Rights Management
                      </span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Publishing-Rights-Management/Digital-Rights-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Digital Rights Management"
                            />
                            <span className="menu-text">
                              <a href="#">Digital Rights Management</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Publishing-Rights-Management/Global-Search.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Global Search"
                            />
                            <span className="menu-text">
                              <a href="#">Global Search</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Publishing-Rights-Management/Content-Protection.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Content Protection"
                            />
                            <span className="menu-text">
                              <a href="#">Content Protection</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Publishing-Rights-Management/Content-Extraction.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Content Extraction"
                            />
                            <span className="menu-text">
                              <a href="#">Content Extraction</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Publishing-Rights-Management/Web-Scraping.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Web Scraping"
                            />
                            <span className="menu-text">
                              <a href="#">Web Scraping</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Publishing-Rights-Management/Real-Time-Reportingh.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Real-Time Reportingh"
                            />
                            <span className="menu-text">
                              <a href="#">Real-Time Reportingh</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Financial Audit Compliance".replace(/\s+/g, "-")
                      }
                    >
                      {" "}
                      <span className="menu-text">
                        Financial Audit Compliance Solutions
                      </span>
                    </Link>{" "}
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Financial-Audit-Compliance/Real-Time-Analytics.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Real-Time Analytics"
                            />
                            <span className="menu-text">
                              <a href="#">Real-Time Analytics</a>
                            </span>{" "}
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Financial-Audit-Compliance/AI-Market-Predictions.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="AI Market Predictions"
                            />
                            <span className="menu-text">
                              <a href="#">AI Market Predictions</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Financial-Audit-Compliance/Portfolio-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Portfolio Management"
                            />
                            <span className="menu-text">
                              <a href="#">Portfolio Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Financial-Audit-Compliance/Risk-Assessment.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Risk Assessment"
                            />
                            <span className="menu-text">
                              <a href="#">Risk Assessment</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Financial-Audit-Compliance/Regulatory-Compliance.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Regulatory Compliance"
                            />
                            <span className="menu-text">
                              <a href="#">Regulatory Compliance</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Financial-Audit-Compliance/Controls-management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Controls management"
                            />
                            <span className="menu-text">
                              <a href="#">Controls management</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Food Ordering Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">Food Ordering Solutions</span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Food-Ordering-Solutions/Google-Places-API.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Google Places API"
                            />
                            <span className="menu-text">
                              <a href="#">Google Places API</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Food-Ordering-Solutions/Cart-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Cart Management"
                            />
                            <span className="menu-text">
                              <a href="#">Cart Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Food-Ordering-Solutions/Payment-Gateway-Integration.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Payment Gateway Integration"
                            />
                            <span className="menu-text">
                              <a href="#">Payment Gateway Integration</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Food-Ordering-Solutions/Assign-Driver.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Assign Driver"
                            />
                            <span className="menu-text">
                              <a href="#">Assign Driver</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Food-Ordering-Solutions/Food-Delivery.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Food Delivery"
                            />
                            <span className="menu-text">
                              <a href="#">Food Delivery</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Information Technology Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Information Technology Solutions
                      </span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Information-Technology-Solutions/Custom-Software.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Custom Software"
                            />
                            <span className="menu-text">
                              <a href="#">Custom Software</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Information-Technology-Solutions/Cloud-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Cloud Management"
                            />
                            <span className="menu-text">
                              <a href="#">Cloud Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Information-Technology-Solutions/Cybersecurity.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Cybersecurity"
                            />
                            <span className="menu-text">
                              <a href="#">Cybersecurity</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Information-Technology-Solutions/IT-Infrastructure.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="IT Infrastructure"
                            />
                            <span className="menu-text">
                              <a href="#">IT Infrastructure</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Information-Technology-Solutions/Digital-Transformation.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Digital Transformation"
                            />
                            <span className="menu-text">
                              <a href="#">Digital Transformation</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Business Promotion Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Business Promotion Solutions
                      </span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/Explainer-Video.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Explainer Video"
                            />
                            <span className="menu-text">
                              <a href="#">Explainer Video</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/Product-Demo-Content.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Product Demo Content"
                            />
                            <span className="menu-text">
                              <a href="#">Product Demo Content</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/SMS-Campaigns.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="SMS Campaigns"
                            />
                            <span className="menu-text">
                              <a href="#">SMS Campaigns</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/PDF-Generation.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="PDF Generation"
                            />
                            <span className="menu-text">
                              <a href="#">PDF Generation</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/Social-Wall.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Social Wall"
                            />
                            <span className="menu-text">
                              <a href="#">Social Wall</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/WebSite-Content.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Web Site Content"
                            />
                            <span className="menu-text">
                              <a href="#">Web Site Content</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Business-Promotion-Solutions/Reviews-Ratings.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Reviews & Ratings"
                            />
                            <span className="menu-text">
                              <a href="#">Reviews & Ratings</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "HOA Automation Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        HOA Automation Solutions
                      </span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/HOA-Automation-Solutions/Bulk-Email.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Bulk Email"
                            />
                            <span className="menu-text">
                              <a href="#">Bulk Email</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/HOA-Automation-Solutions/E-Voting-System.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="E-Voting System"
                            />
                            <span className="menu-text">
                              <a href="#">E-Voting System</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/HOA-Automation-Solutions/Document-Scanning.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Document Scanning"
                            />
                            <span className="menu-text">
                              <a href="#">Document Scanning</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/HOA-Automation-Solutions/MICR-Reading.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="MICR Reading"
                            />
                            <span className="menu-text">
                              <a href="#">MICR Reading</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/HOA-Automation-Solutions/Automated-Notifications.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Automated Notifications"
                            />
                            <span className="menu-text">
                              <a href="#">Automated Notifications</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>

                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Logistics and Supply Chain Management".replace(
                          /\s+/g,
                          "-"
                        )
                      }
                    >
                      <span className="menu-text">
                        Logistics & Supply Chain Management
                      </span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Logistics-and-Supply-Chain-Management/Fleet-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Fleet Management"
                            />
                            <span className="menu-text">
                              <a href="#">Fleet Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Logistics-and-Supply-Chain-Management/Route-Optimization.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Route Optimization"
                            />
                            <span className="menu-text">
                              <a href="#">Route Optimization</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Logistics-and-Supply-Chain-Management/Real-Time-Tracking.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Real-Time Tracking"
                            />
                            <span className="menu-text">
                              <a href="#">Real-Time Tracking</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Logistics-and-Supply-Chain-Management/Predictive-Analytics.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Predictive Analytics"
                            />
                            <span className="menu-text">
                              <a href="#">Predictive Analytics</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Logistics-and-Supply-Chain-Management/AI-Driven-Automation.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="AI-Driven Automation"
                            />
                            <span className="menu-text">
                              <a href="#">AI-Driven Automation</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Construction Industry Software".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Construction Industry Software
                      </span>
                    </Link>
                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Construction-Industry-Software/Project-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Project Management"
                            />
                            <span className="menu-text">
                              <a href="#">Project Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Construction-Industry-Software/Cost-Estimation.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Cost Estimation"
                            />
                            <span className="menu-text">
                              <a href="#">Cost Estimation</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Construction-Industry-Software/Real-Time-Updates.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Real-Time Updates"
                            />
                            <span className="menu-text">
                              <a href="#">Real-Time Updates</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Construction-Industry-Software/Risk-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Risk Management"
                            />
                            <span className="menu-text">
                              <a href="#">Risk Management</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Construction-Industry-Software/AI-Powered-Insights.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="AI-Powered Insights"
                            />
                            <span className="menu-text">
                              <a href="#">AI-Powered Insights</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Healthcare and Medical Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Healthcare & Medical Solutions
                      </span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Healthcare-and-Medical-Solutions/Telemedicine.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Telemedicine"
                            />
                            <span className="menu-text">
                              <a href="#">Telemedicine</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Healthcare-and-Medical-Solutions/Appointment-Scheduling.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Appointment Scheduling"
                            />
                            <span className="menu-text">
                              <a href="#">Appointment Scheduling</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Healthcare-and-Medical-Solutions/EHR-Integration.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="EHR Integration"
                            />
                            <span className="menu-text">
                              <a href="#">EHR Integration</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Healthcare-and-Medical-Solutions/AI-Diagnostics.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="AI Diagnostics"
                            />
                            <span className="menu-text">
                              <a href="#">AI Diagnostics</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Healthcare-and-Medical-Solutions/Remote-Patient-Monitoring.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Remote Patient Monitoring"
                            />
                            <span className="menu-text">
                              <a href="#">Remote Patient Monitoring</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                  <li className="hidden-md">
                    <Link
                      href={
                        process.env.PUBLIC_URL +
                        "/Home/Industries?Industrytype=" +
                        "Tourism and Travel Solutions".replace(/\s+/g, "-")
                      }
                    >
                      <span className="menu-text">
                        Tourism & Travel Solutions
                      </span>
                    </Link>

                    <div className="ruby-grid ruby-grid-lined mega-height">
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/Online-Bookings.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Online Bookings"
                            />
                            <span className="menu-text">
                              <a href="#">Online Bookings</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/Virtual-Tours.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Virtual Tours"
                            />
                            <span className="menu-text">
                              <a href="#">Virtual Tours</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/AI-Recommendations.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="AI Recommendations"
                            />
                            <span className="menu-text">
                              <a href="#">AI Recommendations</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/AI-Diagnostics.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="AI Diagnostics"
                            />
                            <span className="menu-text">
                              <a href="#">AI Diagnostics</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                      <div className="ruby-row">
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/Multilingual-Support.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Multilingual Support"
                            />
                            <span className="menu-text">
                              <a href="#">Multilingual Support</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/Real-Time-Updates.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Real-Time Updates"
                            />
                            <span className="menu-text">
                              <a href="#">Real-Time Updates</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/Reservation-Management.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="Reservation Management"
                            />
                            <span className="menu-text">
                              <a href="#">Reservation Management</a>
                            </span>
                          </Tilt>
                        </div>
                        <div className="ruby-col-3 text-center">
                          <Tilt scale={scale} transitionSpeed={4000}>
                            {" "}
                            <img
                              src={
                                process.env
                                  .REACT_APP_CLOUDINARY_IMAGE_BASE_URL +
                                "/images/mega-menu/Tourism-and-Travel-Solutions/API-Integration.svg"
                              }
                              className="custom-svg"
                              loading="lazy"
                              alt="API Integration"
                            />
                            <span className="menu-text">
                              <a href="#">API Integration</a>
                            </span>
                          </Tilt>
                        </div>
                      </div>
                    </div>
                    <span className="ruby-dropdown-toggle"></span>
                  </li>
                </ul>
              </div>
            </li>

            <li>
              <Link href="/Career">
                <span className="menu-text">Career</span>
              </Link>
            </li>

            <li className="has-children dropdown">
              <Link href="/OurWork">
                <span className="menu-text">Portfolio</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/OurWork">
                    <span className="menu-text">Our Work</span>
                  </Link>
                </li>
                <li>
                  <Link href="/technologies">
                    <span className="menu-text">Technologies</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li className="has-children dropdown">
              <Link href="/about-us">
                <span className="menu-text">About Us</span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link href="/about-us">
                    <span className="menu-text">About Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faqs">
                    <span className="menu-text">FAQs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/our-clients">
                    <span className="menu-text">Our Clients</span>
                  </Link>
                </li>
                <li>
                  <Link href="/testimonials">
                    <span className="menu-text">Testimonials</span>
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link href="/contact-us">
                <span className="menu-text">Contact Us</span>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default NewNavBar;
