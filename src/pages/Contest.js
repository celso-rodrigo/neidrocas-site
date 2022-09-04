import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import Context from "../context/Context";

function Contest({ contest }) {
  const { setCurrPage } = useContext(Context);
  setCurrPage(contest)
  return <p>{contest}</p>;
}

Contest.propTypes = {
  contest: PropTypes.string.isRequired,
};

export default Contest;
