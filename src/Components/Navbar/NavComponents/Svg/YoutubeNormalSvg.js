import React, { memo } from "react";
import "./scss/svg_style_scnni.scss";

// SVG path COPIED FROM YOUTUBE

const YouTubeNormalSvg = () => {
  return (
    <div className="ytb_svg">
      <svg className="ytb_svg__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill="#F00"
            d="M23.8,17.1c0,0.9-0.7,1.6-1.6,1.6H1.9c-0.9,0-1.6-0.7-1.6-1.6V4.8c0-0.9,0.7-1.6,1.6-1.6 h20.3c0.9,0,1.6,0.7,1.6,1.6V17.1z"
          ></path>
          <polygon fill="#FFFFFF" points="9.6,14.4 15.7,10.9 9.6,7.5"></polygon>
        </g>
      </svg>
    </div>
  );
};

export default memo(YouTubeNormalSvg);
