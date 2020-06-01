import React, { memo } from "react";
import "./scss/svg_style_sci.scss";
import { useSelector } from "react-redux";

// SVG path COPIED FROM YOUTUBE

const Like = ({ ChangeColor = false }) => {
  // Theme
  const Theme = useSelector((state) => state.Theme.isDarkTheme);

  return (
    <div className="ytb_svg_y">
      <svg className="ytb_svg_y__wrapper" viewBox="0 0 24 24" focusable={false}>
        <g>
          <path
            fill={ChangeColor ? (Theme ? "#3ea6ff" : "#065fd4") : "#909090"}
            d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z"
          ></path>
        </g>
      </svg>
    </div>
  );
};

export default memo(Like);
