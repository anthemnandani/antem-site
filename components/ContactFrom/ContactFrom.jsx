import axios from 'axios';
import React, { useRef, useState } from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from "react-hook-form";
import Swal from 'sweetalert2';

const ContactFrom = () => {
    const [token] = useState(localStorage.getItem("token"));
    // color body 
    // Set theme to the user's preferred color scheme
    function updateTheme() {
        const colorMode = window.matchMedia("(prefers-color-scheme: dark)").matches ?
            "dark" :
            "light";
        document.querySelector("html").setAttribute("data-bs-theme", colorMode);
    }

    // Set theme on load
    updateTheme()

    // Update theme when the preferred scheme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateTheme)
    // end color body 






    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onBlur"
    });

    const [recaptchaToken, setRecaptchaToken] = useState(null);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const recaptchaRef = useRef();

    function onRecaptchaChange(token) {
        setRecaptchaToken(token);
    }

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
            formData.append("Name", data.name);
            formData.append("Email", data.email);
            formData.append("Number", data.contactnumber);
            formData.append("Message", data.message);
            if (token && recaptchaToken) {
                const response = await axios.post(
                    `${process.env.REACT_APP_PUBLIC_API_URL}/api/ContactUs/ContactUs`,
                    formData,
                    {
                        headers: {
                            "Content-Type": "application/json",
                            Authorization: `Bearer ${token}`,
                        },
                    }
                );
                if (response.status === 200) {
                    Swal.fire({
                        title: response.data.msg,
                        icon: "success", //error,success,
                    });
                    setRecaptchaToken(null)
                    recaptchaRef.current.reset();
                    reset();
                }
            } else {
                console.error("Token is not available");
            }
        } catch (error) {
            console.error("Error in onSubmit: ", error);
        }
        finally {
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
                    <div className="col-md-12 col-12 mb-6">
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
                    <div className="col-12 mb-6">
                        <textarea
                            name="message"
                            className="textbox-border"
                            placeholder="Message *"
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
                        <button type="submit" disabled={isSubmitting} className="btn btn btn-bottom" data-hover="Contact Us" style={{ background: "#0e6497" }}>  {isSubmitting ? "Submitting..." : "Contact Us"}</button>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default ContactFrom;
