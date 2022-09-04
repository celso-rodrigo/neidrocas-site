import React, { useState } from "react";
import Context from "./Context";
import PropTypes from "prop-types";

function BiruProvider({ children }) {
  const [currPage, setCurrPage] = useState('');

  const providerValue = {
    setCurrPage,
    currPage,
  };

  return <Context.Provider value={providerValue}>{children}</Context.Provider>;
}

BiruProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default BiruProvider;
