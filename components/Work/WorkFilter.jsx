import React, { useState } from "react";
import PropTypes from "prop-types";
import { slugify } from "../../utils";

const WorkFilter = ({ categories, classOption, handleProjectWithCategory }) => {
    const [activeCategory, setActiveCategory] = useState("All");

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
        handleProjectWithCategory(category);
    };
    return (
        <div className={`messonry-button ${classOption}`}>
            <button data-filter="*" className={activeCategory === "All" ? "is-checked" : ""} onClick={() => handleCategoryClick("All")}><span className="filter-text">All</span></button>
            {categories.map((cat, idx) => <button key={idx} data-filter={`.${slugify(cat)}`} className={activeCategory === cat ? "is-checked" : ""} onClick={() => handleCategoryClick(cat)}><span className="filter-text">{cat}</span></button>)}
        </div>
    )
}
WorkFilter.propTypes = {
    categories: PropTypes.array,
    classOption: PropTypes.string
}

WorkFilter.defaultProps = {
    classOption: "text-lg-end text-start mb-lg-13 mb-md-13 mb-6"
};

export default WorkFilter;
