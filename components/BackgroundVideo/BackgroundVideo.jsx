import React from 'react';

function BackgroundVideo({ videoSrc, overlayColor, children, className }) {
    return (
        <div
            className={`position-relative overflow-hidden w-100 ${className}`}
            style={{ height: '100vh' }} // Ensure the container takes up the full viewport height
        >
            <video
                className="position-absolute top-0 start-0 w-100 h-100 object-fit-cover"
                src={process.env.REACT_APP_CLOUDINARY_VIDEO_BASE_URL + videoSrc}
                autoPlay
                loop
                muted
                style={{ objectFit: 'cover', zIndex: -1 }} // Ensure the video is behind the overlay
            />
            {overlayColor && (
                <div
                    className="position-absolute top-0 start-0 w-100 h-100"
                    style={{
                        backgroundColor: overlayColor,
                        mixBlendMode: 'multiply',
                        zIndex: 0 // Ensure the overlay is above the video
                    }}
                />
            )}
            <div className="position-relative z-index-1">
                {children} {/* Content will appear on top of the video */}
            </div>
        </div>
    );
}

export default BackgroundVideo;
