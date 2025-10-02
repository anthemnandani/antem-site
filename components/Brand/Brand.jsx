// "use client";

// import PropTypes from "prop-types";
// import { useState, useEffect } from "react";
// import NextImage from "next/image";
// import Skeleton from "react-loading-skeleton";
// import "react-loading-skeleton/dist/skeleton.css";

// const Brand = ({ data }) => {
//   const [imageStatus, setImageStatus] = useState("loading");

//   // useEffect(() => {
//   //   if (!data || !data.logo1) {
//   //     setImageStatus("error");
//   //     return;
//   //   }

//   //   setImageStatus("loading");

//   //   // Preload image
//   //   const img = new Image();
//   //   img.src = data.logo1;

//   //   const handleLoad = () => setTimeout(() => setImageStatus("loaded"), 100);
//   //   const handleError = () => setTimeout(() => setImageStatus("error"), 100);

//   //   img.onload = handleLoad;
//   //   img.onerror = handleError;

//   //   return () => {
//   //     img.onload = null;
//   //     img.onerror = null;
//   //   };
//   // }, [data]);



// useEffect(() => {
//   if (!data || !data.logo1) {
//     setImageStatus("error");
//     return;
//   }

//   setImageStatus("loading");

//   const img = new window.Image(); // <-- explicitly use native Image
//   img.src = data.logo1;

//   const handleLoad = () => setTimeout(() => setImageStatus("loaded"), 100);
//   const handleError = () => setTimeout(() => setImageStatus("error"), 100);

//   img.onload = handleLoad;
//   img.onerror = handleError;

//   return () => {
//     img.onload = null;
//     img.onerror = null;
//   };
// }, [data]);



//   return (
//     <div className="brand-item">
//       <a href={data?.websiteAddress || "#"} target="_blank" rel="noreferrer">
//         <div className="image-container position-relative" style={{ width: 200, height: 100 }}>
//           {(!data || !data.logo1 || imageStatus === "loading") && (
//             <Skeleton
//               height={100}
//               width={200}
//               className="rounded"
//               baseColor="#f0f0f0"
//               highlightColor="#e0e0e0"
//               style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
//             />
//           )}

//           {imageStatus === "error" && (
//             <Image
//               src="/path/to/fallback-image.png"
//               alt={data?.clientName || "Brand"}
//               width={200}
//               height={100}
//               style={{ objectFit: "contain" }}
//               priority
//             />
//           )}

//           {imageStatus === "loaded" && (
//             <Image
//               src={data.logo1}
//               alt={data.clientName}
//               title={data.clientName}
//               width={200}
//               height={100}
//               style={{ objectFit: "contain" }}
//               priority
//             />
//           )}
//         </div>
//       </a>
//     </div>
//   );
// };

// Brand.propTypes = {
//   data: PropTypes.shape({
//     logo1: PropTypes.string,
//     clientName: PropTypes.string,
//     websiteAddress: PropTypes.string,
//   }),
// };

// export default Brand;




"use client";

import PropTypes from "prop-types";
import { useState, useEffect } from "react";
import NextImage from "next/image"; // rename Next.js Image import
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const Brand = ({ data }) => {
  const [imageStatus, setImageStatus] = useState("loading");

  useEffect(() => {
    if (!data || !data.logo1) {
      setImageStatus("error");
      return;
    }

    setImageStatus("loading");

    // Use native Image constructor
    const img = new window.Image();
    img.src = data.logo1;

    const handleLoad = () => setTimeout(() => setImageStatus("loaded"), 100);
    const handleError = () => setTimeout(() => setImageStatus("error"), 100);

    img.onload = handleLoad;
    img.onerror = handleError;

    return () => {
      img.onload = null;
      img.onerror = null;
    };
  }, [data]);

  return (
    <div className="brand-item">
      <a href={data?.websiteAddress || "#"} target="_blank" rel="noreferrer">
        <div className="image-container position-relative" style={{ width: 200, height: 100 }}>
          {(!data || !data.logo1 || imageStatus === "loading") && (
            <Skeleton
              height={100}
              width={200}
              className="rounded"
              baseColor="#f0f0f0"
              highlightColor="#e0e0e0"
              style={{ position: "absolute", top: 0, left: 0, zIndex: 1 }}
            />
          )}

          {imageStatus === "error" && (
            <NextImage
              src="/path/to/fallback-image.png"
              alt={data?.clientName || "Brand"}
              width={200}
              height={100}
              style={{ objectFit: "contain" }}
              priority
            />
          )}

          {imageStatus === "loaded" && (
            <NextImage
              src={data.logo1}
              alt={data.clientName}
              title={data.clientName}
              width={200}
              height={100}
              style={{ objectFit: "contain" }}
              priority
            />
          )}
        </div>
      </a>
    </div>
  );
};

Brand.propTypes = {
  data: PropTypes.shape({
    logo1: PropTypes.string,
    clientName: PropTypes.string,
    websiteAddress: PropTypes.string,
  }),
};

export default Brand;
