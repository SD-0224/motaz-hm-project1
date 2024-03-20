import React from "react";

const LayoutContainer = ({ children, className }) => {
  return <div className={`${className} def-pad`}>{children}</div>;
};

export default LayoutContainer;
