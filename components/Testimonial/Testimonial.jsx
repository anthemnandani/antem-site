import PropTypes from "prop-types";
import React from 'react';


const Testimonial = ({ data }) => {
    return (
        <div className="static-testimonial mb-6">
            <div className="testimonial-image">
                <img src={process.env.NEXT_PUBLIC_CLOUDINARY_IMAGE_BASE_URL + data.image} alt={data.name} loading="lazy" />
            </div>
            <div className="testimonial-content">
                <p>{data.desc}</p>
            </div>
            <div className="author-info">
                <div className="cite">
                    <h6 className="name">{data.name}</h6>
                    <span className="position">{data.position}</span>
                </div>
            </div>
        </div>
    )
}

Testimonial.propTypes = {
    data: PropTypes.object
};

export default Testimonial;
