import axios from "axios";
import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";

const RequestQuote = () => {
  const [token] = useState(localStorage.getItem("token"));

  const [recaptchaToken, setRecaptchaToken] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const recaptchaRef = useRef();

  function onRecaptchaChange(token) {
    setRecaptchaToken(token);
  }

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
  });
  const onSubmit = async (data) => {
    if (isSubmitting) {
      return;
    }
    setIsSubmitting(true);
    try {
      if (!recaptchaToken) {
        Swal.fire({
          title: "Please complete the ReCAPTCHA",
          icon: "error", //error,success,
        });
        setIsSubmitting(false);
        return;
      }

      if (token && recaptchaToken) {
        const jsonData = {
          name: data.name,
          email: data.email,
          number: data.contactnumber,
          website: data.website,
          message: data.message,
          goal: data.goal.join(","), // Append goal
        };

        const response = await axios.post(
          `${process.env.REACT_APP_PUBLIC_API_URL}/api/ContactUs/RequestQuote`,
          jsonData,
          {
            headers: {
              // "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          }
        );

        if (response.status === 200) {
          Swal.fire({
            title: response.data.msg,
            icon: "success", //error,success,
          });
          setRecaptchaToken(null);
          recaptchaRef.current.reset();
          reset();
        }
      } else {
        console.error("Token is not available");
      }
    } catch (error) {
      console.error("Error in onSubmit: ", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-form" data-aos="fade-up" data-aos-delay="300">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="row mb-n6">
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Enter Name *"
              name="name"
              className="textbox-border"
              {...register("name", {
                required: "Name is required.",
                validate: (value) => {
                  return (
                    (value.length >= 3 && value.length <= 50) ||
                    "Name must be between 3 and 50 characters."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.name && <p>{errors.name?.message}</p>}
            </span>
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="email"
              placeholder="Enter Email *"
              name="email"
              className="textbox-border"
              {...register("email", {
                required: "Email is required.",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                  message: "invalid email address.",
                },
                validate: (value) => {
                  return (
                    (value.length >= 3 && value.length <= 50) ||
                    "Email must be between 3 and 50 characters."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.email && <p>{errors.email?.message}</p>}
            </span>
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Contact Number *"
              name="contactnumber"
              className="textbox-border"
              {...register("contactnumber", {
                required: "Contact Number is required.",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "invalid contact number.",
                },
                validate: (value) => {
                  return (
                    (value.length >= 10 && value.length <= 13) ||
                    "Contact Number must be between 10 and 13 digits."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.contactnumber && <p>{errors.contactnumber?.message}</p>}
            </span>
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Enter Website *"
              name="website"
              className="textbox-border"
              {...register("website", {
                required: "Website is required.",
                validate: (value) => {
                  return (
                    (value.length >= 3 && value.length <= 50) ||
                    "Website must be between 3 and 50 characters."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.website && <p>{errors.website?.message}</p>}
            </span>
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder="How can we help you *"
              className="textbox-border"
              {...register("message", {
                required: "Message is required.",
              })}
            ></textarea>
            <span className="text-danger">
              {errors?.message && <p>{errors.message?.message}</p>}
            </span>
          </div>

          {/* New Checkbox Section for Goals */}
          <div className="col-12 mb-6">
            <label className="mb-2">What is your goal? *</label>
            <div className="row">
              {/* Left Column (6) */}
              <div className="col-md-7">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="Web Development"
                      {...register("goal")}
                    />
                    &nbsp;Web Development
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="Web Applications"
                      {...register("goal")}
                    />
                    &nbsp; Web Applications
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="Mobile App Development"
                      {...register("goal")}
                    />
                    &nbsp; Mobile App Development
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="On-Demand Dedicated Talent"
                      {...register("goal")}
                    />
                    &nbsp; On-Demand Dedicated Talent
                  </label>
                </div>
              </div>

              {/* Right Column (6) */}
              <div className="col-md-5">
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="Design"
                      {...register("goal")}
                    />
                    &nbsp; Design
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="Digital Marketing"
                      {...register("goal")}
                    />
                    &nbsp; Digital Marketing
                  </label>
                </div>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      value="QA and Testing"
                      {...register("goal")}
                    />
                    &nbsp; QA and Testing
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 mb-6">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA}
              onChange={onRecaptchaChange}
            />
          </div>

          <div className="col-12 mb-6">
            <button
              type="submit"
              className="btn btn btn-bottom"
              data-hover="Request A Quote"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request A Quote"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RequestQuote;
