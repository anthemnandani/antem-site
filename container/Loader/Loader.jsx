import React from 'react';
import dynamic from 'next/dynamic';

const CircleLoader = dynamic(
  () => import('react-spinners').then(mod => mod.CircleLoader),
  { ssr: false }
);

function Loader() {
  const loaderStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh", // optional: center vertically in viewport
  };

  return (
    <div style={loaderStyle}>
      <CircleLoader color="#0a507a" />
    </div>
  );
}

export default Loader;
