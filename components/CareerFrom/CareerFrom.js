import axios from "axios";
import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form";
import ReCAPTCHA from "react-google-recaptcha";
import Swal from "sweetalert2";

const CareerFrom = () => {
  const [token] = useState(localStorage.getItem("token"));
  const [fileName, setFileName] = useState("");
  const fileInputRef = useRef(null);

  const handleFileClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
    }
  };

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

      const formData = new FormData();
      formData.append("file", fileInputRef.current.files[0]);
      formData.append("Name", data.name);
      formData.append("Email", data.email);
      formData.append("Number", data.contactnumber);
      formData.append("ExpYears", data.experienceyear);
      formData.append("ExpMonth", data.experiencemonths);
      formData.append("TextArea", data.message);
      formData.append("LastEmployedAt", data.lastemployedat);
      formData.append("uploadresume", data.uploadresume);
      //extra
      formData.append("SelectJoining", data.selectjoining);
      formData.append("PostApply", data.postapply);

      if (token && recaptchaToken) {
        const response = await axios.post(
          `${process.env.REACT_APP_PUBLIC_API_URL}/api/Career/ApplyforJobCareer`,
          formData,
          {
            headers: {
              "Content-Type": "multipart/form-data",
              Authorization: `Bearer ${token}`,
            },
          }
        );
        if (response.status === 200) {
          Swal.fire({
            title: response.data.msg,
            icon: "success", //error,success,
          });
          reset();
          setRecaptchaToken(null);
          recaptchaRef.current.reset();
          fileInputRef.current.value = "";
          setFileName("");
        }
      }
    } catch (error) {
      console.error("Error in onSubmit ", error);
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
                    "Name must be between 3 and 50 characters."
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
              placeholder="Last Employed At (Optional)"
              name="lastemployedat"
              className="textbox-border"
              {...register("lastemployedat")}
            />
            <span className="text-danger">
              {errors?.lastemployedat && (
                <p>{errors.lastemployedat?.message}</p>
              )}
            </span>
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Experience Year *"
              name="experienceyear"
              className="textbox-border"
              {...register("experienceyear", {
                required: "Experience Year is required.",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "invalid experience year.",
                },
                validate: (value) => {
                  const num = parseInt(value, 10);
                  return (
                    (num >= 0 && num <= 20) ||
                    "Experience Year must be between 0 to 20 digits."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.experienceyear && (
                <p>{errors.experienceyear?.message}</p>
              )}
            </span>
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Experience Months *"
              name="experiencemonths"
              className="textbox-border"
              {...register("experiencemonths", {
                required: "Experience Months is required.",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "invalid experience months.",
                },
                validate: (value) => {
                  const num = parseInt(value, 10);
                  return (
                    (num >= 0 && num <= 12) ||
                    "Experience Months must be between 0 to 12 digits."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.experiencemonths && (
                <p>{errors.experiencemonths?.message}</p>
              )}
            </span>
          </div>
          {/*  */}
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Apply for? *"
              name="postapply"
              className="textbox-border"
              {...register("postapply", {
                required: "Apply for is required.",
                pattern: {
                  message: "invalid Apply for.",
                },
                validate: (value) => {
                  return (
                    (value.length >= 3 && value.length <= 50) ||
                    "Apply for must be between 3 and 50 characters."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.postapply && <p>{errors.postapply?.message}</p>}
            </span>
          </div>
          <div className="col-md-6 col-12 mb-6">
            <input
              type="text"
              placeholder="Your joining *"
              name="selectjoining"
              className="textbox-border"
              {...register("selectjoining", {
                required: "Your joining is required.",
                pattern: {
                  value: /^[0-9]+$/i,
                  message: "invalid Your joining",
                },
                validate: (value) => {
                  const num = parseInt(value, 10);
                  return (
                    (num >= 0 && num <= 20) ||
                    "joining day must be between 0 to 20 digits."
                  );
                },
              })}
            />
            <span className="text-danger">
              {errors?.selectjoining && <p>{errors.selectjoining?.message}</p>}
            </span>
          </div>
          <div className="col-md-12 col-12 mb-6">
            <input
              type="text"
              placeholder="Upload Resume *"
              className="textbox-border"
              value={fileName}
              onClick={handleFileClick}
              readOnly // Make the text input read-only to prevent user editing
              {...register("uploadresume", {
                required: "Upload Resume is required.",
              })}
            />
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              style={{ display: "none" }} // Hide the file input
            />
            <span className="text-danger">
              {errors?.uploadresume && <p>{errors.uploadresume?.message}</p>}
            </span>
          </div>
          <div className="col-12 mb-6">
            <textarea
              name="message"
              placeholder="Message *"
              className="textbox-border"
              {...register("message", {
                required: "Message is required.",
              })}
            ></textarea>
            <span className="text-danger">
              {errors?.message && <p>{errors.message?.message}</p>}
            </span>
          </div>

          <div className="col-12 mb-6">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey={process.env.REACT_APP_RECAPTCHA}
              onChange={onRecaptchaChange}
            />
          </div>
          <div className="col-12 text-center mb-6">
            <button
              type="submit"
              className="btn btn btn-bottom"
              data-hover="Submit"
              disabled={isSubmitting}
              style={{ background: "#0e6497" }}
            >
              {isSubmitting ? "Submitting..." : "Submit"}
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CareerFrom;
