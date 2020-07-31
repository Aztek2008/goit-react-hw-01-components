import React from "react";
import PropTypes from "prop-types";
import RandomColor from "./RandomColor";
import styles from "./Statistics.module.css";

const StatLi = ({ label, percentage }) => (
  <li className={styles.item} style={{ backgroundColor: RandomColor() }}>
    <span className="label">{label}</span>
    <span className="percentage">{percentage}</span>
  </li>
);

StatLi.propTypes = {
  label: PropTypes.string.isRequired,
  percentage: PropTypes.number.isRequired,
};

export default StatLi;
