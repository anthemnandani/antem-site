import PropTypes from "prop-types";
import React from 'react';
import { Helmet } from "react-helmet";

const SEO = ({ title, description, ogtitle, ogdescription }) => {
    return (
        <Helmet>
            <meta charSet="utf-8" />
            <title>{title}</title>
            <meta name="robots" content="index, follow" />
            <meta name="canonical" content={process.env.REACT_APP_CANONICAL_URL} />
            {description && <meta name="description" content={description} />}
            {ogtitle && <meta property="og:title" content={ogtitle} />}
            {ogdescription && <meta property="og:description" content={ogdescription} />}
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        </Helmet>
    )
}

SEO.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    ogtitle: PropTypes.string,
    ogdescription: PropTypes.string
};

export default SEO;
