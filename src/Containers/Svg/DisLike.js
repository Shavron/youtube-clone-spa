import React, { memo } from "react";
import "./scss/svg_style_sci.scss";
import { useSelector } from "react-redux";

// SVG path COPIED FROM YOUTUBE

const DisLike = ({ ChangeColor = false }) => {
  // Theme
  const Theme = useSelector((state) => state.Theme.isDarkTheme);

  return (
    <div className="ytb_svg_y">
      <svg className="ytb_svg_y__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={ChangeColor ? (Theme ? "#3ea6ff" : "#065fd4") : "#909090"}
            d="M15 3H6c-.83 0-1.54.5-1.84 1.22l-3.02 7.05c-.09.23-.14.47-.14.73v1.91l.01.01L1 14c0 1.1.9 2 2 2h6.31l-.95 4.57-.03.32c0 .41.17.79.44 1.06L9.83 23l6.59-6.59c.36-.36.58-.86.58-1.41V5c0-1.1-.9-2-2-2zm4 0v12h4V3h-4z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(DisLike);
