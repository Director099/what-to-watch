import React from "react";
import PropTypes from "prop-types";

const PageContent = ({children}) => {
  return (
    <div className="page-content">
      {children}
    </div>
  );
};

PageContent.propTypes = {
  children: PropTypes.element,
};

export default PageContent;
